# 🌟 Instagram Clone — Spring Boot + React (Full-Stack)  
A modern **Instagram-like social media application** built with **Spring Boot (Java 17)** and **React (Vite)**.  
This project demonstrates **JWT authentication**, **secure API routing**, and a **fully responsive UI** designed with **Tailwind CSS**.

## 🚀 Features

### 👤 User Management
- Register & Login  
- Profile view & edit  
- Secure session using JWT tokens  

### 🔐 JWT Authentication
- Access token  
- Refresh token  
- Roles and protected routes  

### 📸 Posts
- Create, update, delete posts  
- Upload images  
- View personalized feed  

### ❤️ Likes & 💬 Comments
- Like/unlike posts  
- Add comments  
- Real-time UI updates  

### 👥 Follow System
- Follow/unfollow users  
- Show followers & following lists  

### 🩺 Health Check
`GET /api/health` returns API status  

### 🗄️ Database
- H2 in-memory database for fast development  

---

## 🏗️ Tech Stack

### ⚙️ Backend — Spring Boot
| Technology | Description |
|-----------|-------------|
| **Java 17** | Language |
| **Spring Boot 3.2.3** | API framework |
| Spring Web | REST services |
| Spring Security | JWT authentication |
| Spring Data JPA | ORM |
| H2 Database | In-memory DB |
| Lombok | Reduce boilerplate |
| JJWT | JWT token handling |


### 🎨 Frontend — React (Vite)
| Technology | Description |
|-----------|-------------|
| **React 19** | UI library |
| **Vite** | Ultra-fast bundler |
| Tailwind CSS | Styling |
| Axios | API requests |
| React Router DOM | Routing |
| React Icons | Icons |


---

## 📁 Project Structure

springboot/
├── backend/
│ └── src/main/java/com/instagram/clone/...
│
├── frontend/
│ ├── src/
│ │ ├── components/ # PostCard, Header, Sidebar
│ │ ├── pages/ # Login, Register, Home, Profile
│ │ └── services/api.js # Axios instance
│ └── tailwind.config.js





---

## 🛠️ Setup & Run Locally

### 📌 Prerequisites
- JDK **17**
- Node.js **18+**
- npm
- Git

---

## 🔙 Backend Setup (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
Backend runs at:
👉 http://localhost:8080

🔮 Frontend Setup (React + Vite)
bash
Copy code
cd frontend
npm install
npm run dev
Frontend runs at:
👉 http://localhost:5173

The project uses a proxy to forward API requests to backend (see vite.config.js).

📡 API Overview
Method	Endpoint	Description
POST	/api/auth/register	Register a user
POST	/api/auth/login	Login + JWT
GET	/api/users/{id}	Get profile
PUT	/api/users/{id}	Update profile
POST	/api/posts	Create post
GET	/api/posts	Feed posts
POST	/api/posts/{id}/like	Like/unlike post
POST	/api/posts/{id}/comment	Add comment
POST	/api/users/{id}/follow	Follow/unfollow
GET	/api/health	Health check

🔒 Protected routes must include:
Authorization: Bearer <token>

📦 Frontend Scripts (package.json)
json
Copy code
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
Run production build:

bash
Copy code
npm run build
Output appears in:
frontend/dist/

🧪 Testing
Backend
bash
Copy code
./mvnw test
Frontend
bash
Copy code
npm run lint
📘 License
This project is for educational purposes.
Feel free to fork, modify, and upgrade it.



