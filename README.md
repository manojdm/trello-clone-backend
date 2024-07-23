# Trello Clone

A full-stack Trello clone application with authentication, Google login, and drag-and-drop functionality.

## Problem Statement

The goal of this project is to create a Trello-like task management application with the following key features:
- User authentication (sign up and sign in)
- Google login integration
- Drag-and-drop functionality for task management

## Live Demo

Visit the live application: [https://trello-clone-omega-two.vercel.app/](https://trello-clone-omega-two.vercel.app/)

## Tech Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Styled Components
- NextAuth.js for authentication

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose ORM
- JWT for authentication

### CI/CD
- Frontend: Vercel
- Backend: AWS ECS (Elastic Container Service)

## Repositories

- Frontend: [https://github.com/manojdm/trello-clone/](https://github.com/manojdm/trello-clone/)
- Backend: [https://github.com/manojdm/trello-clone-backend](https://github.com/manojdm/trello-clone-backend)

## Setup and Installation

### Frontend

1. Clone the repository:
```
git clone https://github.com/manojdm/trello-clone.git
cd trello-clone
```

2. Install dependencies:
```
npm install
```

3. Run the development server:
```
npm run dev
```

### Backend

1. Clone the repository:
```
git clone https://github.com/manojdm/trello-clone-backend.git
cd trello-clone-backend
```

2. Install dependencies:
```
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add necessary environment variables (e.g., MongoDB connection string, JWT secret, etc.)

4. Run the development server:

```
npm run dev
```

## Features

- User authentication (sign up, sign in)
- Google login integration
- Create, read, update, and delete boards
- Create, read, update, and delete lists within boards
- Create, read, update, and delete tasks within lists
- Drag-and-drop functionality for tasks between lists
- Responsive design for various screen sizes

## Dependencies

### Frontend

```
{
"@reduxjs/toolkit": "^2.2.6",
"@types/node": "20.14.11",
"@types/react": "18.3.3",
"@types/react-dom": "18.3.0",
"autoprefixer": "10.4.19",
"axios": "^1.7.2",
"eslint": "8.57.0",
"eslint-config-next": "14.2.5",
"next": "14.2.5",
"next-auth": "^4.24.7",
"postcss": "8.4.39",
"react": "18.3.1",
"react-dom": "18.3.1",
"react-icons": "^5.2.1",
"react-redux": "^9.1.2",
"styled-components": "^6.1.12",
"tailwindcss": "3.4.6",
"typescript": "5.5.3"
}
```

### Backend
```
{
"axios": "^1.7.2",
"bcryptjs": "^2.4.3",
"colors": "^1.4.0",
"cors": "^2.8.5",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"express-async-handler": "^1.2.0",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.5.1",
"nodemon": "^3.1.4"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
