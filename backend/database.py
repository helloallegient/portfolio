import os
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Database configuration
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'portfolio_db')

# Global database client
client = None
database = None

async def connect_to_mongo():
    """Create database connection"""
    global client, database
    client = AsyncIOMotorClient(mongo_url)
    database = client[db_name]
    
    # Test connection
    try:
        await client.admin.command('ping')
        print("✅ Connected to MongoDB successfully!")
    except Exception as e:
        print(f"❌ Failed to connect to MongoDB: {e}")
        raise

async def close_mongo_connection():
    """Close database connection"""
    global client
    if client:
        client.close()
        print("✅ Disconnected from MongoDB")

def get_database():
    """Dependency to get database instance"""
    return database

# Database collections
async def get_contacts_collection():
    return database.contacts

async def get_blog_posts_collection():
    return database.blog_posts

async def get_projects_collection():
    return database.projects

# Initialize database indexes
async def create_indexes():
    """Create database indexes for optimal performance"""
    try:
        # Contact indexes
        await database.contacts.create_index("email")
        await database.contacts.create_index("created_at")
        await database.contacts.create_index("status")
        
        # Blog indexes
        await database.blog_posts.create_index("slug", unique=True)
        await database.blog_posts.create_index("category")
        await database.blog_posts.create_index("published")
        await database.blog_posts.create_index("created_at")
        await database.blog_posts.create_index([("title", "text"), ("excerpt", "text"), ("content", "text")])
        
        # Project indexes
        await database.projects.create_index("category")
        await database.projects.create_index("featured")
        await database.projects.create_index("order")
        await database.projects.create_index("created_at")
        
        print("✅ Database indexes created successfully!")
    except Exception as e:
        print(f"❌ Failed to create indexes: {e}")

# Seed data for initial setup
async def seed_database():
    """Seed the database with initial data"""
    from datetime import datetime
    
    # Check if data already exists
    contacts_count = await database.contacts.count_documents({})
    blog_count = await database.blog_posts.count_documents({})
    projects_count = await database.projects.count_documents({})
    
    if contacts_count > 0 or blog_count > 0 or projects_count > 0:
        print("✅ Database already contains data, skipping seeding")
        return
    
    # Seed blog posts
    blog_posts = [
        {
            "id": "1",
            "title": "The Future of AI in Web Development",
            "slug": "the-future-of-ai-in-web-development",
            "excerpt": "Exploring how artificial intelligence is reshaping the web development landscape and what developers need to know.",
            "content": "The intersection of artificial intelligence and web development is creating unprecedented opportunities for innovation. As AI technologies mature, developers are finding new ways to enhance user experiences, automate complex tasks, and build more intelligent applications.\n\nMachine learning algorithms are now being integrated directly into web applications, enabling features like personalized content recommendations, intelligent search functionality, and automated testing. This shift is fundamentally changing how we approach web development.\n\nThe rise of AI-powered development tools is also streamlining the coding process. From code completion and bug detection to automated refactoring and performance optimization, AI is becoming an indispensable coding companion.\n\nLooking ahead, we can expect to see even more sophisticated AI integrations, including natural language interfaces, advanced chatbots, and predictive analytics built directly into web applications. The future of web development is undoubtedly intertwined with AI.",
            "author": "Amit",
            "category": "AI",
            "tags": ["AI", "Web Development", "Future Tech"],
            "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
            "read_time": "8 min read",
            "published": True,
            "created_at": datetime(2024, 1, 15),
            "updated_at": datetime(2024, 1, 15)
        },
        {
            "id": "2",
            "title": "Building Scalable APIs with FastAPI",
            "slug": "building-scalable-apis-with-fastapi",
            "excerpt": "A comprehensive guide to creating high-performance APIs using FastAPI and modern Python development practices.",
            "content": "FastAPI has emerged as one of the most powerful and developer-friendly frameworks for building APIs in Python. Its combination of high performance, automatic API documentation, and type safety makes it an excellent choice for modern web development.\n\nOne of FastAPI's standout features is its automatic generation of interactive API documentation using Swagger UI and ReDoc. This makes it incredibly easy for developers to understand and test API endpoints without additional documentation effort.\n\nThe framework's built-in support for async/await patterns enables developers to build highly concurrent applications that can handle thousands of requests per second. This is particularly important for modern web applications that need to scale efficiently.\n\nFastAPI's integration with Pydantic for data validation ensures that your API endpoints are robust and type-safe. This reduces bugs and improves the overall reliability of your applications.\n\nIn this article, we'll explore best practices for building scalable APIs with FastAPI, including database integration, authentication, error handling, and deployment strategies.",
            "author": "Amit",
            "category": "Backend",
            "tags": ["Python", "FastAPI", "Backend"],
            "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
            "read_time": "12 min read",
            "published": True,
            "created_at": datetime(2024, 1, 10),
            "updated_at": datetime(2024, 1, 10)
        },
        {
            "id": "3",
            "title": "React Performance Optimization Tips",
            "slug": "react-performance-optimization-tips",
            "excerpt": "Essential techniques for optimizing React applications and improving user experience with better performance.",
            "content": "React applications can become slow and unresponsive if not optimized properly. Understanding performance bottlenecks and implementing the right optimization strategies is crucial for delivering great user experiences.\n\nOne of the most effective optimization techniques is minimizing unnecessary re-renders. React's virtual DOM is efficient, but excessive re-renders can still impact performance. Using React.memo, useMemo, and useCallback hooks strategically can significantly improve your app's performance.\n\nCode splitting is another powerful technique that allows you to load only the necessary code for each page or component. This reduces the initial bundle size and improves loading times, especially for large applications.\n\nOptimizing images and other assets is often overlooked but can have a massive impact on performance. Implementing lazy loading, using appropriate image formats, and compressing assets can dramatically improve load times.\n\nFinally, proper state management and avoiding prop drilling can help maintain clean, performant code. Tools like Redux Toolkit and Zustand provide efficient state management solutions that scale well with your application.\n\nIn this comprehensive guide, we'll dive deep into these optimization techniques and provide practical examples you can implement immediately.",
            "author": "Amit",
            "category": "Frontend",
            "tags": ["React", "Performance", "Frontend"],
            "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
            "read_time": "10 min read",
            "published": True,
            "created_at": datetime(2024, 1, 5),
            "updated_at": datetime(2024, 1, 5)
        }
    ]
    
    # Seed projects
    projects = [
        {
            "id": "1",
            "name": "AI Chatbot Assistant",
            "description": "Built a GPT-powered assistant using OpenAI API, integrated with a CRM system for seamless customer support and lead generation.",
            "tech_stack": ["OpenAI", "LangChain", "React", "Node.js", "MongoDB"],
            "category": "AI/ML",
            "image": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
            "demo_url": "#",
            "github_url": "#",
            "featured": True,
            "order": 1,
            "created_at": datetime(2024, 1, 1),
            "updated_at": datetime(2024, 1, 1)
        },
        {
            "id": "2",
            "name": "E-commerce Platform",
            "description": "Developed a scalable e-commerce website with admin panel, cart system, and Razorpay integration for a fashion retailer.",
            "tech_stack": ["PHP", "CodeIgniter 3", "MySQL", "AJAX", "Bootstrap"],
            "category": "Full Stack",
            "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
            "demo_url": "#",
            "github_url": "#",
            "featured": True,
            "order": 2,
            "created_at": datetime(2024, 1, 2),
            "updated_at": datetime(2024, 1, 2)
        },
        {
            "id": "3",
            "name": "AI Resume Generator",
            "description": "Created an AI-powered tool that generates tailored resumes using GPT and form input, helping job seekers create professional resumes.",
            "tech_stack": ["Next.js", "OpenAI", "Tailwind CSS", "Firebase"],
            "category": "AI/ML",
            "image": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
            "demo_url": "#",
            "github_url": "#",
            "featured": True,
            "order": 3,
            "created_at": datetime(2024, 1, 3),
            "updated_at": datetime(2024, 1, 3)
        }
    ]
    
    # Insert seed data
    try:
        await database.blog_posts.insert_many(blog_posts)
        await database.projects.insert_many(projects)
        print("✅ Database seeded successfully!")
    except Exception as e:
        print(f"❌ Failed to seed database: {e}")