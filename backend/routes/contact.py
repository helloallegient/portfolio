from fastapi import APIRouter, HTTPException, Query, Depends
from typing import List, Optional
from datetime import datetime
import logging

from models.contact import ContactCreate, ContactResponse, ContactUpdate, ContactList, ContactStatus
from database import get_database

logger = logging.getLogger(__name__)
router = APIRouter()

@router.post("/contact", response_model=ContactResponse)
async def create_contact(contact_data: ContactCreate, db = Depends(get_database)):
    """Submit a new contact form"""
    try:
        # Convert to dict and add metadata
        contact_dict = contact_data.dict()
        contact_dict['status'] = ContactStatus.NEW
        contact_dict['created_at'] = datetime.utcnow()
        contact_dict['updated_at'] = datetime.utcnow()
        
        # Create contact object for response
        contact_obj = ContactResponse(**contact_dict)
        
        # Insert into database
        result = await db.contacts.insert_one(contact_obj.dict())
        
        if result.inserted_id:
            logger.info(f"New contact form submitted: {contact_obj.name} - {contact_obj.email}")
            return contact_obj
        else:
            raise HTTPException(status_code=500, detail="Failed to submit contact form")
            
    except Exception as e:
        logger.error(f"Error creating contact: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/contact", response_model=ContactList)
async def get_contacts(
    page: int = Query(1, ge=1),
    per_page: int = Query(10, ge=1, le=100),
    status: Optional[ContactStatus] = None,
    db = Depends(get_database)
):
    """Get all contacts (admin endpoint)"""
    try:
        # Build query
        query = {}
        if status:
            query['status'] = status.value
        
        # Calculate pagination
        skip = (page - 1) * per_page
        
        # Get contacts
        contacts_cursor = db.contacts.find(query).sort("created_at", -1).skip(skip).limit(per_page)
        contacts = await contacts_cursor.to_list(length=per_page)
        
        # Get total count
        total = await db.contacts.count_documents(query)
        
        # Convert to response models
        contact_responses = [ContactResponse(**contact) for contact in contacts]
        
        return ContactList(
            contacts=contact_responses,
            total=total,
            page=page,
            per_page=per_page
        )
        
    except Exception as e:
        logger.error(f"Error getting contacts: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/contact/{contact_id}", response_model=ContactResponse)
async def get_contact(contact_id: str, db = Depends(get_database)):
    """Get a specific contact by ID"""
    try:
        contact = await db.contacts.find_one({"id": contact_id})
        
        if not contact:
            raise HTTPException(status_code=404, detail="Contact not found")
        
        return ContactResponse(**contact)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error getting contact {contact_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.put("/contact/{contact_id}", response_model=ContactResponse)
async def update_contact(contact_id: str, contact_update: ContactUpdate, db = Depends(get_database)):
    """Update contact status (admin endpoint)"""
    try:
        # Find existing contact
        existing_contact = await db.contacts.find_one({"id": contact_id})
        
        if not existing_contact:
            raise HTTPException(status_code=404, detail="Contact not found")
        
        # Update fields
        update_data = contact_update.dict(exclude_unset=True)
        update_data['updated_at'] = datetime.utcnow()
        
        # Update in database
        result = await db.contacts.update_one(
            {"id": contact_id},
            {"$set": update_data}
        )
        
        if result.modified_count == 0:
            raise HTTPException(status_code=400, detail="No changes made")
        
        # Get updated contact
        updated_contact = await db.contacts.find_one({"id": contact_id})
        
        logger.info(f"Contact {contact_id} updated by admin")
        return ContactResponse(**updated_contact)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating contact {contact_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.delete("/contact/{contact_id}")
async def delete_contact(contact_id: str, db = Depends(get_database)):
    """Delete a contact (admin endpoint)"""
    try:
        result = await db.contacts.delete_one({"id": contact_id})
        
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Contact not found")
        
        logger.info(f"Contact {contact_id} deleted by admin")
        return {"message": "Contact deleted successfully"}
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting contact {contact_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/contact/stats/summary")
async def get_contact_stats(db = Depends(get_database)):
    """Get contact statistics (admin endpoint)"""
    try:
        # Get counts by status
        pipeline = [
            {"$group": {"_id": "$status", "count": {"$sum": 1}}},
            {"$sort": {"_id": 1}}
        ]
        
        status_counts = await db.contacts.aggregate(pipeline).to_list(length=None)
        
        # Get total count
        total_contacts = await db.contacts.count_documents({})
        
        # Format response
        stats = {
            "total_contacts": total_contacts,
            "by_status": {item["_id"]: item["count"] for item in status_counts}
        }
        
        return stats
        
    except Exception as e:
        logger.error(f"Error getting contact stats: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")