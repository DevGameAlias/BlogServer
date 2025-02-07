# Blog Server

## Overview
The **Blog Server** is a full-stack backend application built with **Node.js, Express, and MongoDB**. It provides a secure and scalable environment for managing user authentication, blog posts, comments, newsletters, and event creation.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT, bcrypt, bcryptjs
- **Middleware:** cors, body-parser, cookie-parser, dotenv
- **Email Support:** Nodemailer
- **Validation:** Validator

## Features
- Secure **JWT-based authentication**
- **Blog post management** with comment system
- **User profiles** with customizable information
- **Newsletter subscription and email notifications**
- **Event creation and management**
- **CORS enabled** for cross-origin resource sharing

## Installation & Setup
### Prerequisites
- Install **Node.js** (>=14.x)
- Install **MongoDB** (local or cloud-based using MongoDB Atlas)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/capstone-blog-server.git
   cd capstone-blog-server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
4. Start the server:
   ```sh
   npm start
   ```
5. The server will run at `http://localhost:5000`

## API Endpoints
### Authentication
| Method | Endpoint           | Description               |
|--------|-------------------|---------------------------|
| POST   | `/auth/register`  | Register a new user       |
| POST   | `/auth/login`     | Login and receive a token |

### Blog Management
| Method | Endpoint         | Description               |
|--------|-----------------|---------------------------|
| GET    | `/blogs`        | Retrieve all blog posts   |
| POST   | `/blogs`        | Create a new blog post    |
| GET    | `/blogs/:id`    | Get a specific blog post  |
| PUT    | `/blogs/:id`    | Update a blog post       |
| DELETE | `/blogs/:id`    | Delete a blog post       |

### Comments
| Method | Endpoint               | Description                  |
|--------|-----------------------|------------------------------|
| POST   | `/comments/:blogId`   | Add a comment to a blog post |
| GET    | `/comments/:blogId`   | Get comments for a blog post |

### Events & Newsletters
| Method | Endpoint             | Description                       |
|--------|---------------------|---------------------------------|
| POST   | `/events`           | Create an event                 |
| GET    | `/events`           | Fetch all events                |
| POST   | `/newsletter`       | Subscribe to the newsletter     |

## Future Enhancements
- **Admin panel for user and content moderation**
- **Role-based authentication** (Admin, Editor, User)
- **GraphQL integration for optimized data fetching**
- **File uploads for blog images**

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under the **MIT License**.



Can only see the title and some of the story you can see a continue reading tab when clicked you see the full story 

At the bottom of story there is comments section 
