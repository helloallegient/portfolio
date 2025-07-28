from pydantic import BaseModel, Field, validator
from typing import Optional, List
from datetime import datetime
from enum import Enum
import uuid

class ProjectCategory(str, Enum):
    AI_ML = "AI/ML"
    FULL_STACK = "Full Stack"

class ProjectCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    description: str = Field(..., min_length=1, max_length=1000)
    tech_stack: List[str] = Field(..., min_items=1)
    category: ProjectCategory
    image: Optional[str] = None
    demo_url: Optional[str] = None
    github_url: Optional[str] = None
    featured: bool = False
    order: int = 0

    @validator('tech_stack')
    def validate_tech_stack(cls, v):
        if len(v) > 20:
            raise ValueError('Maximum 20 technologies allowed')
        return v

class ProjectResponse(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    tech_stack: List[str]
    category: ProjectCategory
    image: Optional[str]
    demo_url: Optional[str]
    github_url: Optional[str]
    featured: bool
    order: int
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    tech_stack: Optional[List[str]] = None
    category: Optional[ProjectCategory] = None
    image: Optional[str] = None
    demo_url: Optional[str] = None
    github_url: Optional[str] = None
    featured: Optional[bool] = None
    order: Optional[int] = None
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectList(BaseModel):
    projects: List[ProjectResponse]
    total: int
    page: int
    per_page: int