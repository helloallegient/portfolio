from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime
from enum import Enum
import uuid

class ContactStatus(str, Enum):
    NEW = "new"
    READ = "read"
    RESPONDED = "responded"

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)

class ContactResponse(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    status: ContactStatus = ContactStatus.NEW
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ContactUpdate(BaseModel):
    status: Optional[ContactStatus] = None
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ContactList(BaseModel):
    contacts: List[ContactResponse]
    total: int
    page: int
    per_page: int