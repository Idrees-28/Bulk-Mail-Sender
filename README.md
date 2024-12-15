# Bulk Mail Sender

## Project Overview
Bulk Mail Sender is a web application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to send bulk emails to multiple recipients efficiently. This application supports features like contact management, email template customization, and real-time status updates for email sending.

---

## Features
- **Add and Manage Recipients**: Upload a list of email addresses or add them individually.
- **Email Templates**: Create and save reusable email templates.
- **Bulk Email Sending**: Send emails to multiple recipients in one go.
- **Status Tracking**: View the status of email delivery in real time.
- **Secure Authentication**: Supports secure login for authorized email sending.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.

---

## Technologies Used

### Frontend
- **React**: JavaScript library for building the user interface.
- **Axios**: For making API requests to the backend.
- **CSS / Tailwind CSS**: Styling for the application.
- **React Router**: For handling frontend navigation.

### Backend
- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for creating RESTful APIs.
- **Nodemailer**: For sending emails.
- **MongoDB**: Database for storing recipient lists and email templates.
- **Mongoose**: For schema-based interaction with MongoDB.

---

## Installation Guide

### Prerequisites
- Node.js (v16 or later)
- MongoDB installed locally or access to a cloud-based MongoDB instance
- An SMTP server or email service provider (e.g., Gmail SMTP)
- A modern web browser
- A code editor (optional for modifications)

---

### Steps

#### 1. Clone the Repository:
   ```bash
   git clone https://github.com/Idrees-28/bulk-mail-sender.git
   ```

#### 2. Navigate to the Project Directory:
   ```bash
   cd bulk-mail-sender
   ```

#### 3. Install Dependencies:

   **For Backend:**
   ```bash
   cd backend
   npm install
   ```

   **For Frontend:**
   ```bash
   cd frontend
   npm install
   ```

#### 4. Configure Environment Variables:
Create a `.env` file in the `backend` directory and add the following:
   ```
   PORT=5000
   DB_URI=your_database_connection_string
   SMTP_HOST=smtp.your-email-provider.com
   SMTP_PORT=587
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_email_password
   JWT_SECRET=your_jwt_secret
   ```

#### 5. Start the Application:

   **Start the Backend:**
   ```bash
   cd backend
   npm start
   ```

   **Start the Frontend:**
   ```bash
   cd frontend
   npm start
   ```

#### 6. Open the App:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## API Endpoints

### Backend REST API
- **POST /auth/login**: Authenticate user credentials.
- **POST /emails/send**: Send bulk emails to recipients.
- **GET /recipients**: Fetch the list of recipients.
- **POST /recipients**: Add new recipients.
- **DELETE /recipients/:id**: Delete a recipient.

---

## Contribution Guidelines
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---
## Acknowledgments
- **React**: For building the interactive frontend.
- **Node.js**: For creating a robust backend server.
- **Express**: For simplifying REST API creation.
- **Nodemailer**: For efficient email handling.
- **MongoDB**: For database management.
- **SMTP Providers**: For email delivery.

---

## Contact
For any inquiries, feel free to reach out:
- **Email**: idreesjee2810@gmail.com
- **GitHub**: [Idrees-28](https://github.com/Idrees-28)

---
