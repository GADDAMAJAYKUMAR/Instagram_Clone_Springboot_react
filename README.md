Instagram Clone (Spring Boot + React)
Overview
A full‑stack Instagram‑like application built with Spring Boot (Java 17) for the backend API and React (Vite) for the frontend. It demonstrates JWT authentication, CRUD operations for posts, comments, likes, and a follow system.

Features
User Management: Registration, login, profile view/edit.
JWT Authentication: Secure API access with token refresh.
Posts: Create, read, update, delete posts with image support.
Comments & Likes: Add comments, like/unlike posts.
Follow System: Follow/unfollow other users, view follower/following lists.
Feed: Personalized feed showing posts from followed users.
Health Check: /api/health endpoint for service status.
In‑Memory DB: H2 database for quick local development.
Responsive UI: Built with Tailwind CSS and React Icons.
Tech Stack
Backend (Spring Boot)
Java 17
Spring Boot 3.2.3
Spring Data JPA – ORM layer
Spring Security – JWT based security
Spring Web – REST APIs
Spring Validation – Request validation
H2 Database – In‑memory DB for dev
Lombok – Boilerplate reduction
JJWT (0.11.5) – JWT creation/validation
JUnit & Spring Test – Unit/integration testing
Frontend (React + Vite)
React 19
Vite – Fast dev server & bundler
Tailwind CSS – Utility‑first styling
Axios – HTTP client
React Router DOM – SPA routing
React Icons – Icon library
ESLint – Linting
PostCSS & Autoprefixer – CSS processing
Project Structure
springboot/
├─ backend/          # Spring Boot source
│   └─ src/main/java/com/instagram/clone/...
├─ frontend/         # React application (Vite)
│   ├─ src/
│   │   ├─ components/   # UI components (PostCard, etc.)
│   │   ├─ pages/        # Page components (Login, Register, Home, Profile)
│   │   └─ services/api.js # Axios instance
│   └─ tailwind.config.js
└─ README.md          # This file
Setup & Run Locally
Prerequisites
JDK 17
Node.js (≥ 18) and npm
Git (optional)
Backend
# Navigate to backend
cd backend
# Build and run (Maven wrapper is included)
./mvnw spring-boot:run
The API will be available at http://localhost:8080.

Frontend
# Navigate to frontend
cd frontend
npm install          # install dependencies
npm run dev          # start dev server (http://localhost:5173)
The React app proxies API calls to the backend (see 

vite.config.js
).

API Overview
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Authenticate and receive JWT
GET	/api/users/{id}	Get user profile
PUT	/api/users/{id}	Update profile
POST	/api/posts	Create a post
GET	/api/posts	List posts (feed)
POST	/api/posts/{id}/like	Like/unlike a post
POST	/api/posts/{id}/comment	Add comment
POST	/api/users/{id}/follow	Follow/unfollow user
GET	/api/health	Health check
Note: All protected routes require an Authorization: Bearer <jwt> header.

Scripts (frontend/package.json)
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
Use npm run build to generate a production bundle (output in dist/).

Testing
Backend: Run ./mvnw test.
Frontend: Linting with npm run lint. (Add Jest/React Testing Library as needed.)
License
This project is for educational purposes. Feel free to fork and modify.

Let me know if you’d like any adjustments or additional sections!
