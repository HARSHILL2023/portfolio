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
