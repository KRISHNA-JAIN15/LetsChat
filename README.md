# Real-Time Chat Application

A modern real-time chat application built with React, Node.js, Socket.IO, and MongoDB.

## Features

- 🔐 User authentication (signup/login)
- 👤 User profiles with avatars
- 💬 Real-time messaging
- 🟢 Online user status
- 🎨 Beautiful UI with dark theme
- 📱 Responsive design

## Tech Stack

### Frontend

- React
- Zustand (State Management)
- Socket.IO Client
- TailwindCSS
- DaisyUI
- React Icons
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB & Mongoose
- Socket.IO
- JWT Authentication
- bcryptjs
- Cookie Parser

## Getting Started

1. Clone the repository:

```sh
git clone <repository-url>
cd chatapp
```

2. Install dependencies:

```sh
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

3. Create a `.env` file in the root directory with:

```
PORT=5000
MONGO_DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Run the development server:

```sh
# Run backend
npm run dev

# Run frontend (in a separate terminal)
cd frontend
npm run dev
```

## Development Scripts

- `npm run dev` - Start backend development server
- `npm start` - Start backend production server
- `npm run build` - Build frontend and install dependencies

## Project Structure

```
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── pages/
│       ├── utils/
│       └── zustand/
└── package.json
```

## Features in Detail

### Authentication

- Secure signup and login with JWT
- Password hashing with bcrypt
- Protected routes
- Persistent sessions with cookies

### Real-time Communication

- Instant messaging with Socket.IO
- Online/offline user status
- Message delivery status
- Typing indicators

### User Interface

- Clean and modern design
- Dark theme
- Responsive layout
- Toast notifications
- Loading states and animations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

