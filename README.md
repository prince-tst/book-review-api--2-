# 📚 Book Review API

## 🚀 Setup

```bash
git clone <repo-url>
cd book-review-api
npm install
```

Create a `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookdb
JWT_SECRET=your_jwt_secret
```

## 🏁 Run Locally

```bash
npm run dev
```

## 🔑 Endpoints

### Auth
- `POST /api/signup`
- `POST /api/login`

### Books
- `POST /api/books`
- `GET /api/books`
- `GET /api/books/:id`
- `GET /api/search?query=`

### Reviews
- `POST /api/books/:id/reviews`
- `PUT /api/reviews/:id`
- `DELETE /api/reviews/:id`

## 📊 Schema

- **User**: name, email, password
- **Book**: title, author, genre, description
- **Review**: user, book, rating, comment

## 📌 Design Decisions

- Used JWT for auth
- MongoDB via Mongoose
- Simple pagination via query params
