
# 📦 Table Manager Backend API

This is a secure backend system for a table management application built with **Express.js**, **MongoDB (Mongoose)**, **JWT** authentication, and **Multer** for image uploads.

---

## 🚀 Features

- ✅ User Signup & Login with JWT
- ✅ Secure protected routes
- ✅ CRUD operations for Records
- ✅ Image upload & storage with UUID filenames
- ✅ RESTful API architecture
- ✅ Input validation & file size/type restriction
- ✅ Rate limiting (100 req / 10 min)

---

## 🛠 Tech Stack

| Component      | Technology       |
|---------------|------------------|
| Backend        | Node.js + Express |
| Database       | MongoDB + Mongoose |
| Authentication | JWT              |
| File Uploads   | Multer           |

---

## 📁 Project Structure

```
table-manager-backend/
├── controllers/
├── middleware/
├── models/
├── routes/
├── uploads/
├── .env
├── app.js
├── server.js
└── README.md
```

---

## 🔐 Authentication Endpoints

### `POST /auth/signup`

Registers a new user.

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

### `POST /auth/login`

Logs in an existing user and returns a JWT.

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here"
}
```

---

### `POST /auth/logout`

Client-side logout (deletes token).

**Headers:**
```
Authorization: Bearer <token>
```

---

## 📦 Record Management (Protected)

All endpoints below require JWT:

**Headers:**
```
Authorization: Bearer <token>
```

---

### `GET /api/records`

Returns all records.

---

### `POST /api/records`

Creates a new record (with image).

**form-data Body:**

- `item`: string (required)
- `status`: string (required)
- `remark`: string (optional)
- `image`: image file (PNG/JPG/WEBP ≤ 5MB)

---

### `PUT /api/records/:id`

Updates a record by ID.

```json
{
  "item": "Updated Item",
  "status": "Closed",
  "remark": "Updated"
}
```

---

### `DELETE /api/records/:id`

Deletes a record by ID.

---

## 🖼 Image Upload

### `POST /api/upload`

Uploads an image and returns a URL.

**form-data Body:**

- `image`: image file (PNG/JPG/WEBP ≤ 5MB)

**Response:**
```json
{
  "imageUrl": "/uploads/uuid-file.jpg"
}
```

---

## 🧪 Validation & Security

- ✅ JWT protected routes (`/api/*`)
- ✅ File type: PNG/JPG/WEBP only
- ✅ Max file size: 5MB
- ✅ Rate limiting: 100 requests / 10 minutes
- ✅ Uploaded filenames renamed using `uuidv4()`

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/tablemanager
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Locally

```bash
git clone https://your-repo-url](https://github.com/Mo7hamed-el3adany/table-manager-backend
cd table-manager-backend
npm install
npm run dev
```

---

## 📮 Contact

For questions or contributions, reach out to **Mohamed Ali**.
