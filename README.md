# 🔗 Shortly - URL Shortener

Shortly is a full-stack URL shortener application where users can shorten long URLs. Registered users can also create custom short URLs and track the number of times each link is clicked.

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- TanStack Query
- Redux Toolkit

### Backend:
- Node.js
- Express.js
- Bcrypt (for password hashing)
- JWT (for authentication)

### Database:
- MongoDB

---

## ✨ Features

- 🔐 User authentication (register/login)
- ✂️ Shorten long URLs quickly
- 🧩 Custom short URLs for registered users
- 📊 Track number of clicks per URL
- ⚙️ Modern UI using Tailwind CSS and Redux for state management

---

Some of its screenshots 
![image](https://github.com/user-attachments/assets/799088a7-5e5e-4066-ae95-cf948dc0cd3e)
![image](https://github.com/user-attachments/assets/2cffc4c5-bda4-4bba-9c49-0ed95430d0ef)
![image](https://github.com/user-attachments/assets/3c40b42f-8e56-4b55-9820-6ee81ca8cae2)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Pratikkumartulo/Shortly--URL-shortner.git
cd shortly
```

### 2. Set up the Backend
```bash
cd Backend
npm install
npx nodemon app.js
```

Ensure you create a .env file with your MongoDB URI and JWT secret key.
```bash
MONGO_URI = your_mongodb_connection_string 
APP_URL = app_url_localhost
JWT_SECRET = your_jwt_secret
```
### 3. Set up the Frontend
```bash
cd Frontend
npm install
npm run dev
```

### Folder structure
```bash
shortly/
│
├── frontend/         # React frontend using Vite
│   └── ...
├── backend/          # Node/Express backend
│   └── ...
└── README.md
```
