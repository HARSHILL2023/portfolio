# 🚀 Personal Portfolio Website

A modern, responsive personal portfolio website built to showcase my projects, skills, and experience.

## 🌐 Live Demo
👉 [click to visit](https://portfolio-eta-sable-bdxxw28c7e.vercel.app/)

---

## 📬 Contact Form (EmailJS)

This project features a production-ready contact system using React and **EmailJS**. It's a serverless solution that sends emails directly from the frontend.

### Pre-configured Credentials (with ENV support):
- **Service ID**: `service_cyv99li` (env: `VITE_EMAILJS_SERVICE_ID`)
- **Template ID**: `template_om7zvil` (env: `VITE_EMAILJS_TEMPLATE_ID`)
- **Public Key**: `qKK9FBdTcc8ZQuw9m` (env: `VITE_EMAILJS_PUBLIC_KEY`)
- **Recipient**: `harshil.patel.cg@gmail.com` (configured in EmailJS template)
- Template variables: `from_name`, `from_email`, `message`

#### Environment Variables (Vite + Vercel):
Create a `.env` file in the project root (see `.env.example`):
```bash
VITE_EMAILJS_SERVICE_ID=service_cyv99li
VITE_EMAILJS_TEMPLATE_ID=template_om7zvil
VITE_EMAILJS_PUBLIC_KEY=qKK9FBdTcc8ZQuw9m
```
On Vercel: Project Settings → Environment Variables → add the three `VITE_EMAILJS_*` keys.
The code falls back to the hardcoded values above if env vars are not set, so it works locally and on Vercel out of the box.

#### Contact Form Behaviour:
- Uses `emailjs.send()` with mapped params `{ from_name, from_email, message }`
- Loading state (`TRANSMITTING...`), success & error messages (no `alert()`)
- Prevents duplicate submissions (`disabled` + guard)
- Clears form only on success

---

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

---

## 📌 Features

- ⚡ **Fully Responsive Design**: Mobile, tablet, and desktop optimized.
- 🎨 **Modern UI**: Smooth animations and premium aesthetic.
- 🧑 **About Section**: Skills overview and journey.
- 💼 **Projects Showcase**: Interactive cards with live links.
- 📬 **Serverless Contact Form**: Direct email delivery via EmailJS.
- 🚀 **Performance**: Fast loading and smooth interactions.

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion

### Tools
- Git & GitHub
- EmailJS
- Lucide React

---

## 📄 License

This project is licensed under the MIT License.
