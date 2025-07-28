from pydantic import BaseModel, Field, validator
from typing import Optional, List
from datetime import datetime
from enum import Enum
import uuid
import re

class BlogCategory(str, Enum):
    AI = "AI"
    BACKEND = "Backend"
    FRONTEND = "Frontend"
    GENERAL = "General"

class BlogCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    excerpt: str = Field(..., min_length=1, max_length=500)
    content: str = Field(..., min_length=1)
    category: BlogCategory
    tags: List[str] = Field(default_factory=list)
    image: Optional[str] = None
    read_time: Optional[str] = None
    published: bool = False

    @validator('tags')
    def validate_tags(cls, v):
        if len(v) > 10:
            raise ValueError('Maximum 10 tags allowed')
        return v

class BlogResponse(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    slug: str
    excerpt: str
    content: str
    author: str = "Amit"
    category: BlogCategory
    tags: List[str]
    image: Optional[str]
    read_time: Optional[str]
    published: bool
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class BlogUpdate(BaseModel):
    title: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    category: Optional[BlogCategory] = None
    tags: Optional[List[str]] = None
    image: Optional[str] = None
    read_time: Optional[str] = None
    published: Optional[bool] = None
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class BlogList(BaseModel):
    posts: List[BlogResponse]
    total: int
    page: int
    per_page: int

def create_slug(title: str) -> str:
    """Create URL-friendly slug from title"""
    slug = re.sub(r'[^\w\s-]', '', title.lower())
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')