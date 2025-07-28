from fastapi import APIRouter, HTTPException, Query, Depends
from typing import List, Optional
from datetime import datetime
import logging

from ..models.blog import BlogCreate, BlogResponse, BlogUpdate, BlogList, BlogCategory, create_slug
from ..database import get_database

logger = logging.getLogger(__name__)
router = APIRouter()

@router.post("/blog", response_model=BlogResponse)
async def create_blog_post(blog_data: BlogCreate, db = Depends(get_database)):
    """Create a new blog post (admin endpoint)"""
    try:
        # Convert to dict and add metadata
        blog_dict = blog_data.dict()
        blog_dict['slug'] = create_slug(blog_dict['title'])
        blog_dict['created_at'] = datetime.utcnow()
        blog_dict['updated_at'] = datetime.utcnow()
        
        # Check for duplicate slug
        existing_post = await db.blog_posts.find_one({"slug": blog_dict['slug']})
        if existing_post:
            # Add timestamp to make slug unique
            blog_dict['slug'] = f"{blog_dict['slug']}-{int(datetime.utcnow().timestamp())}"
        
        # Create blog object for response
        blog_obj = BlogResponse(**blog_dict)
        
        # Insert into database
        result = await db.blog_posts.insert_one(blog_obj.dict())
        
        if result.inserted_id:
            logger.info(f"New blog post created: {blog_obj.title}")
            return blog_obj
        else:
            raise HTTPException(status_code=500, detail="Failed to create blog post")
            
    except Exception as e:
        logger.error(f"Error creating blog post: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/blog", response_model=BlogList)
async def get_blog_posts(
    page: int = Query(1, ge=1),
    per_page: int = Query(10, ge=1, le=100),
    category: Optional[BlogCategory] = None,
    published_only: bool = Query(True),
    search: Optional[str] = None,
    db = Depends(get_database)
):
    """Get all blog posts with filtering and pagination"""
    try:
        # Build query
        query = {}
        if published_only:
            query['published'] = True
        if category:
            query['category'] = category.value
        if search:
            query['$or'] = [
                {"title": {"$regex": search, "$options": "i"}},
                {"excerpt": {"$regex": search, "$options": "i"}},
                {"tags": {"$regex": search, "$options": "i"}}
            ]
        
        # Calculate pagination
        skip = (page - 1) * per_page
        
        # Get posts
        posts_cursor = db.blog_posts.find(query).sort("created_at", -1).skip(skip).limit(per_page)
        posts = await posts_cursor.to_list(length=per_page)
        
        # Get total count
        total = await db.blog_posts.count_documents(query)
        
        # Convert to response models
        blog_responses = [BlogResponse(**post) for post in posts]
        
        return BlogList(
            posts=blog_responses,
            total=total,
            page=page,
            per_page=per_page
        )
        
    except Exception as e:
        logger.error(f"Error getting blog posts: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/blog/{slug}", response_model=BlogResponse)
async def get_blog_post(slug: str, db = Depends(get_database)):
    """Get a specific blog post by slug"""
    try:
        post = await db.blog_posts.find_one({"slug": slug})
        
        if not post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        
        return BlogResponse(**post)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error getting blog post {slug}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.put("/blog/{post_id}", response_model=BlogResponse)
async def update_blog_post(post_id: str, blog_update: BlogUpdate, db = Depends(get_database)):
    """Update a blog post (admin endpoint)"""
    try:
        # Find existing post
        existing_post = await db.blog_posts.find_one({"id": post_id})
        
        if not existing_post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        
        # Update fields
        update_data = blog_update.dict(exclude_unset=True)
        update_data['updated_at'] = datetime.utcnow()
        
        # Update slug if title changed
        if 'title' in update_data:
            new_slug = create_slug(update_data['title'])
            # Check for duplicate slug
            existing_slug = await db.blog_posts.find_one({"slug": new_slug, "id": {"$ne": post_id}})
            if existing_slug:
                new_slug = f"{new_slug}-{int(datetime.utcnow().timestamp())}"
            update_data['slug'] = new_slug
        
        # Update in database
        result = await db.blog_posts.update_one(
            {"id": post_id},
            {"$set": update_data}
        )
        
        if result.modified_count == 0:
            raise HTTPException(status_code=400, detail="No changes made")
        
        # Get updated post
        updated_post = await db.blog_posts.find_one({"id": post_id})
        
        logger.info(f"Blog post {post_id} updated")
        return BlogResponse(**updated_post)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating blog post {post_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.delete("/blog/{post_id}")
async def delete_blog_post(post_id: str, db = Depends(get_database)):
    """Delete a blog post (admin endpoint)"""
    try:
        result = await db.blog_posts.delete_one({"id": post_id})
        
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Blog post not found")
        
        logger.info(f"Blog post {post_id} deleted")
        return {"message": "Blog post deleted successfully"}
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting blog post {post_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/blog/category/{category}", response_model=BlogList)
async def get_posts_by_category(
    category: BlogCategory,
    page: int = Query(1, ge=1),
    per_page: int = Query(10, ge=1, le=100),
    db = Depends(get_database)
):
    """Get blog posts by category"""
    try:
        query = {"category": category.value, "published": True}
        
        # Calculate pagination
        skip = (page - 1) * per_page
        
        # Get posts
        posts_cursor = db.blog_posts.find(query).sort("created_at", -1).skip(skip).limit(per_page)
        posts = await posts_cursor.to_list(length=per_page)
        
        # Get total count
        total = await db.blog_posts.count_documents(query)
        
        # Convert to response models
        blog_responses = [BlogResponse(**post) for post in posts]
        
        return BlogList(
            posts=blog_responses,
            total=total,
            page=page,
            per_page=per_page
        )
        
    except Exception as e:
        logger.error(f"Error getting posts by category {category}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")