<<<<<<< HEAD
# Personal Portfolio with Signal Interception (Contact Form)

This project features a production-ready contact system using React and **EmailJS**. It's a serverless solution that sends emails directly from the frontend.

## 🚀 Getting Started

### Installation

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The site will run on `http://localhost:5173`.

### EmailJS Configuration

The contact form is pre-configured with the following credentials:
- **Service ID**: `service_8ll3v9u`
- **Template ID**: `template_6mly7jn`
- **Public Key**: `dzlyz-rysoAExUJmu`

No additional setup is required unless you wish to use your own EmailJS account.

## 🛠 Features

- **Serverless Architecture:** No backend server required, simplifying deployment to Vercel/Netlify.
- **EmailJS Integration:** Reliable email delivery managed via the EmailJS dashboard.
- **Controlled Inputs:** React-managed state for better validation and UX.
- **Rich Feedback:** Custom success/error animations and messages.
- **Spam Protection:** Client-side validation to ensure all fields are filled.
- **Responsive Design:** Fully mobile-optimized contact interface.
=======
# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio website built to showcase my projects, skills, and experience as a Full Stack Developer and ML enthusiast.

---

## 🌐 Live Demo
👉 [click to vist](https://portfolio-eta-sable-bdxxw28c7e.vercel.app/)

---

## 📌 Features

- ⚡ Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with smooth animations
- 🧑 About section with skills overview
- 💼 Projects showcase with live links
- 📄 Resume download option (Google Drive integration)
- 📬 Contact form with working email system (Nodemailer)
- 🌙 Clean and minimal UI/UX
- 🚀 Fast and optimized performance

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express.js
- Nodemailer
- CORS

### Tools
- Git & GitHub
- REST API
- dotenv

---

## 📁 Project Structure

portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── nodemailer.js
│   ├── controllers/
│   │   └── contact.controller.js
│   ├── routes/
│   │   └── contact.routes.js
│   ├── server.js
│   └── package.json
│
└── README.md

---

## 📬 Contact Form (Email System)

When someone submits the contact form:
- Frontend sends data to backend API
- Backend uses Nodemailer
- Email is delivered to my Gmail inbox

---

### API Endpoint
POST /api/contact

---

### Request Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I would like to connect with you!"
}

---

### Email Format (Received in Gmail)

Subject:
New Portfolio Contact from <name>

Body:
Name: <name>
Email: <email>

Message:
<message>

---

## ⚙️ Setup Instructions

### 1. Clone repository
git clone https://github.com/your-username/portfolio.git

---

### 2. Install frontend dependencies
cd frontend
npm install
npm run dev

---

### 3. Install backend dependencies
cd backend
npm install
npm start

---

## 🔐 Environment Variables

Create .env file in backend:

EMAIL=yourgmail@gmail.com
APP_PASSWORD=your_gmail_app_password
PORT=5000

---

## 🔥 Features Status

✔ Contact form working  
✔ Email sending to Gmail  
✔ Responsive UI  
✔ API integration  
✔ Backend validation  
✔ Production-ready structure  

---

## 🚀 Future Improvements

- Blog section
- Admin dashboard for messages
- Dark/light mode toggle
- SEO optimization
- Deployment on Render/Vercel

---

## 🙋‍♂️ About Me

Full Stack Developer & AI enthusiast building real-world projects using MERN stack and exploring AI/ML systems.

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the MIT License.
>>>>>>> bdae10354c55ac9255c20cb677fddd44bc254e36
