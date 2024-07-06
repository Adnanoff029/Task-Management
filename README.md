# Task Management App

This is a task management application built with Vue.js for the frontend, NestJS for the backend, Vuex for global state management, and MongoDB for the database. It also includes JWT authentication for secure user access.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## Demo

You can see a live demo of the application [here](#).

## Features

- User authentication with JWT
- Create, read, delete tasks
- Real-time updates with Vuex
- Responsive design

## Tech Stack

**Frontend:**
- Vue.js
- Vuex
- Vue Router
- Axios

**Backend:**
- NestJS
- MongoDB
- Mongoose
- JWT

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Azuredragon1947/Task-Management.git
    cd Task-Management
    ```

2. **Install frontend dependencies:**
    ```bash
    cd task-management-frontend
    npm install
    ```

3. **Install backend dependencies:**
    ```bash
    cd ../task-management-backend
    npm install
    ```
## Usage

1. **Start the backend server:**
    ```bash
    cd backend
    npm run start:dev
    ```

2. **Start the frontend development server:**
    ```bash
    cd ../frontend
    npm run dev
    ```

3. **Open the app in your browser:**
    ```plaintext
    http://localhost:5173
    ```

## API Documentation

The backend API documentation can be accessed at:
```plaintext
http://localhost:5000/auth (for authentication)
http://localhost:5000/task (for task management)

