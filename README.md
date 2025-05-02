# User Management API with Prisma ORM

A robust user management API built using Node.js, TypeScript, Express, and
Prisma ORM. This project facilitates CRUD operations for users and their
associated posts, leveraging PostgreSQL for data storage.

## 🚀 Features

- **User Management**: Create, read, update, and delete user profiles.
- **Post Management**: Associate posts with users, enabling one-to-many
  relationships.
- **Prisma ORM**: Utilizes Prisma for type-safe database interactions.
- **RESTful API**: Implements REST principles for API endpoint design.
- **TypeScript Support**: Ensures type safety and improved developer experience.
- **Environment Configuration**: Manages environment variables using `.env`
  files.

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 📁 Project Structure

```
User-management-PrismaORM/
├── prisma/                 # Prisma schema and migrations
│   └── schema.prisma
├── src/                    # Source code
│   ├── controllers/        # Request handlers
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── index.ts            # Entry point
├── .env                    # Environment variables
├── package.json            # Project metadata and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [PostgreSQL](https://www.postgresql.org/) database setup

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/addyxx-h4ck1/User-management-PrismaORM.git
   cd User-management-PrismaORM
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the root directory and add your database URL:

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```

4. **Run Prisma migrations**:

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Generate Prisma client**:

   ```bash
   npx prisma generate
   ```

6. **Start the development server**:

   ```bash
   npm run dev
   ```

   The API will be accessible at `http://localhost:3000`.

## 📦 API Endpoints

### Users

- `GET /users`: Retrieve all users.
- `GET /users/:id`: Retrieve a user by ID.
- `POST /users`: Create a new user.
- `PUT /users/:id`: Update an existing user.
- `DELETE /users/:id`: Delete a user.

### Posts

- `GET /posts`: Retrieve all posts.
- `GET /posts/:id`: Retrieve a post by ID.
- `POST /posts`: Create a new post.
- `PUT /posts/:id`: Update an existing post.
- `DELETE /posts/:id`: Delete a post.

## 🧪 Running Tests

To be implemented.

## 📄 License

This project is licensed under the MIT License.
