# Backend Task 2 - Event Registration API

A RESTful API built using **Node.js**, **Express.js**, and **MongoDB** to manage events and user registrations.

## Features

- Create a new event
- Get all events
- Filter events by date
- Filter events by location
- Register a user for an event
- Get all registered users for an event
- Prevent duplicate registrations using email

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## Project Structure

```
project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── eventController.js
│
├── models/
│   └── Event.js
│
├── routes/
│   └── eventRoutes.js
│
├── app.js
├── server.js
├── package.json
├── .env
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate into the project

```bash
cd project-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5. Start the server

```bash
npm run dev
```

or

```bash
node server.js
```

---

## API Endpoints

### 1. Create Event

**POST**

```
/api/events
```

### Request Body

```json
{
  "title": "Node.js Workshop",
  "date": "2026-07-15",
  "location": "Hyderabad"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Event created successfully."
}
```

---

### 2. Get All Events

**GET**

```
/api/events
```

---

### 3. Filter Events by Location

**GET**

```
/api/events?location=Hyderabad
```

---

### 4. Filter Events by Date

**GET**

```
/api/events?date=2026-07-15
```

---

### 5. Register for an Event

**POST**

```
/api/events/:id/register
```

### Request Body

```json
{
  "name": "Bhanu",
  "email": "bhanu@gmail.com"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Registration successful."
}
```

---

### 6. Get Event Registrations

**GET**

```
/api/events/:id/registrations
```

---

## Event Schema

```javascript
{
  title: String,
  date: Date,
  location: String,
  registrations: [
    {
      name: String,
      email: String
    }
  ]
}
```

---

## Bonus Feature

- Duplicate registration prevention using email.
- A user cannot register more than once for the same event.

---

## Error Handling

The API returns appropriate HTTP status codes:

- **200** – Success
- **201** – Resource created
- **400** – Bad request
- **404** – Resource not found
- **500** – Internal server error

---

## Testing

The APIs can be tested using:

- Postman
---

## Author

**Bhanu Aitireddy**