# Notification System – Design Logic & Workflow

Repository: [https://github.com/snehanvitha/22MIS7191](https://github.com/snehanvitha/22MIS7191)

## Project Overview

In this project, I developed a Notification Dashboard System using frontend and middleware integration.

### Modules

* `notification_app_fe` → Frontend application
* `logging middleware` → Middleware for request logging

---

# Design Logic

## 1. Requirement Analysis

I planned the system to:

* Display notifications
* Fetch API data
* Handle errors
* Add middleware logging
* Maintain responsive UI

---

## 2. Frontend Logic

I designed the frontend to:

* Load dashboard
* Fetch notifications from API
* Store data in state
* Render notifications dynamically
* Update UI automatically

### Technologies Used

* HTML
* CSS
* JavaScript

---

## 3. API Integration Flow

```text
User Opens App
      ↓
Frontend Sends Request
      ↓
Middleware Logs Request
      ↓
Backend/API Response
      ↓
Frontend Updates UI
```

---

## 4. Middleware Logic

I used middleware for:

* Request logging
* Response tracking
* Error handling
* Debugging support

---

## 5. State Management

I managed:

* notifications
* loading
* error states

### Workflow

```text
API Call → Loading → Response → Update State → Render UI
```

---

## 6. Dynamic Rendering

I used dynamic rendering for notification cards.

```javascript
notifications.map((item) => {
   // render notification
})
```

---

## 7. Error Handling

I handled:

* API failures
* Network issues
* Empty responses

---

## 8. Responsive Design

I made the UI responsive using:

* Flexbox
* Grid
* Media Queries
