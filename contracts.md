# API Contracts & Integration Plan

## Backend Implementation Strategy

### 1. MongoDB Models Required

#### Contact Model
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  subject: String (required),
  message: String (required),
  status: String (enum: ['new', 'read', 'responded']),
  createdAt: Date,
  updatedAt: Date
}
```

#### Blog Post Model
```javascript
{
  _id: ObjectId,
  title: String (required),
  slug: String (unique),
  excerpt: String (required),
  content: String (required),
  author: String (default: 'Amit'),
  category: String (enum: ['AI', 'Backend', 'Frontend', 'General']),
  tags: [String],
  image: String (URL),
  readTime: String,
  published: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

#### Project Model
```javascript
{
  _id: ObjectId,
  name: String (required),
  description: String (required),
  techStack: [String],
  category: String (enum: ['AI/ML', 'Full Stack']),
  image: String (URL),
  demoUrl: String,
  githubUrl: String,
  featured: Boolean (default: false),
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### 2. API Endpoints to Implement

#### Contact Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PUT /api/contact/:id` - Update contact status (admin)
- `DELETE /api/contact/:id` - Delete contact (admin)

#### Blog Endpoints
- `GET /api/blog` - Get all published blog posts
- `GET /api/blog/:slug` - Get single blog post by slug
- `POST /api/blog` - Create new blog post (admin)
- `PUT /api/blog/:id` - Update blog post (admin)
- `DELETE /api/blog/:id` - Delete blog post (admin)

#### Project Endpoints
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### 3. Frontend Integration Points

#### Contact Form Integration
**Current Mock:** Form submission shows success message
**Backend Integration:** 
- Remove mock setTimeout in Contact.jsx
- Add real API call to `/api/contact`
- Handle real success/error responses
- Add form validation

#### Blog System Integration
**Current Mock:** Static blog posts from mock.js
**Backend Integration:**
- Replace mock data with API calls in Blog.jsx
- Add pagination for blog posts
- Add search/filter functionality
- Add dynamic routing for individual blog posts

#### Projects Integration
**Current Mock:** Static projects from mock.js
**Backend Integration:**
- Replace mock data with API calls in Projects.jsx
- Add admin functionality for managing projects
- Add project creation/editing interface

### 4. Frontend Components to Update

#### Contact.jsx
- Replace mock form submission with real API call
- Add proper error handling
- Add loading states
- Add form validation feedback

#### Blog.jsx
- Replace portfolioData.blog with API call
- Add pagination controls
- Add search functionality
- Add individual blog post routing

#### Projects.jsx
- Replace portfolioData.projects with API call
- Add real-time project filtering
- Add admin project management interface

### 5. Database Seed Data

#### Initialize with existing mock data:
- Convert mock projects to database entries
- Convert mock blog posts to database entries
- Create admin interface for content management

### 6. Error Handling Strategy

#### Backend
- Validation errors (400)
- Not found errors (404)
- Server errors (500)
- Database connection errors

#### Frontend
- Network errors
- Validation errors
- Loading states
- Empty states

### 7. Security Considerations

#### Contact Form
- Rate limiting
- Input sanitization
- CSRF protection
- Email validation

#### Admin Features
- Authentication middleware
- Role-based access control
- Input validation
- Data sanitization

### 8. Testing Strategy

#### Backend Testing
- Contact form submission
- Blog CRUD operations
- Project CRUD operations
- Error handling

#### Frontend Testing
- Form validation
- API integration
- Error states
- Loading states

### 9. Implementation Order

1. **Setup MongoDB models**
2. **Create contact form API**
3. **Integrate contact form frontend**
4. **Create blog API endpoints**
5. **Integrate blog frontend**
6. **Create projects API endpoints**
7. **Integrate projects frontend**
8. **Add admin interface**
9. **Testing and refinement**

### 10. Mock Data Migration

#### Current Mock Data Location: `/app/frontend/src/data/mock.js`
- Projects: portfolioData.projects
- Blog posts: portfolioData.blog
- Services: portfolioData.services (can remain static)
- Personal info: portfolioData.personal (can remain static)

#### Migration Strategy:
1. Create database seeding script
2. Import mock data into MongoDB
3. Update frontend to use API calls
4. Remove mock data dependencies
5. Add real-time data management

This plan ensures a smooth transition from mock data to a fully functional backend system while maintaining all existing functionality and improving the user experience.