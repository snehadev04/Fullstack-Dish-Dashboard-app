
# Full Stack Dish Dasboard Management App

This project is a full-stack application for managing and displaying dish information. 
It includes a database setup, API development with Flask, and a front-end dashboard built with React.js.

## Project Overview

The Full Stack Dish Management App consists of the following components:

1. **Backend (Flask)**:
   - Provides RESTful APIs to manage dishes.
   - Stores dish data in-memory (for demo purposes).
   - Allows toggling the publish status of dishes.

2. **Frontend (React.js)**:
   - Displays a dashboard listing all dishes.
   - Allows users to toggle the publish status of dishes.
   - Utilizes Axios for making API calls to the Flask backend.

## Features

- **Dish Dashboard**: View all dishes with their details and publish status.
- **Toggle Publish Status**: Change the publish status of a dish with a click.
- **Real-Time Updates**: Automatically reflects changes made directly to dishes via the backend.

## Technologies Used

- **Frontend**:
  - React.js
  - Axios
  
- **Backend**:
  - Flask
  - Flask-CORS
  
- **Database**:
  - In-memory storage (Python list)

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/snehadev04/Fullstack-Dish-Dashboard-app.git
   cd FullStackDishApp
   ```

2. **Run Frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```
   - The frontend will run on `http://localhost:3000`.

3. **Run Backend**:
   - Navigate to the `backend` directory:
     ```bash
     cd ../backend
     ```
   - Install Flask (if not already installed):
     ```bash
     pip install Flask
     ```
   - Run the Flask backend:
     ```bash
     python app.py
     ```
   - The backend will run on `http://localhost:5000`.

4. **Open the Application**:
   - Open your web browser and go to `http://localhost:3000` to view the application.

## API Endpoints

- **GET /api/dishes**: Retrieves a list of dishes.
- **POST /api/dishes/<dish_id>/toggle**: Toggles the publish status of a dish.

## Screenshots

screenshots of the application to visually demonstrate its functionality.
  - suceessfully Running Flask Backend: This screenshot shows the output of running the Flask backend server with the command "python app.py".
  - suceessfully Running React Frontend: This screenshot shows the output of running the React frontend server with the command "npm start".

## Support

For any issues or questions regarding this project, please open an issue - https://github.com/snehadev04/Fullstack-Dish-Dashboard-app/issues - here on GitHub.

## Author

- Sneha - https://github.com/snehadev04

This project is for personal use and not licensed.

```

### Customization Tips:
- Replace `<repository_url>` with the actual URL of your GitHub repository.
- Update links in the "Author" section with your profile and GitHub repository.
- Add screenshots by placing them in a `screenshots` directory within your project and referencing them in the README.md file.

This README.md file provides a detailed overview of your project, setup instructions, and customization tips for others who might want to use or contribute to your project.
