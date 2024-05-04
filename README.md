# Realtime Chat App

Talk-a-tive is a Full Stack Chatting App. 
Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.
---

## Tech Stack

Client: 
- React
- zustand
- socket.io-client
- tailwindcss

Server: 
- Node JS
- Express
- socket.io
- jsonwebtoken
- mongoose
- bcryptjs

## How to run locally

Clone this repository:
```bash
git clone https://github.com/1Ness1/chat-app.git

or

git clone git@github.com:1Ness1/chat-app.git
```

Install dependencies:
```bash
npm install
```

```bash
cd frontend
npm install
```

Enviroment variables:
```bash
PORT=

MONGO_DB_URI=

appName=

JWT_SECRET=

NODE_ENV=
```

Start the project

server from root:
```bash
npm run server
```

from root/frontend:
```bash
npm run dev
```

## Features
---

- Authentication
- Real Time Chatting
- One to One chat
- Search Users

Its a good example of learning react and creating something production ready!