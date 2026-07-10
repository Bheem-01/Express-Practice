# 05 - Personal Profile Routes

## 📌 Objective

Learn how to create multiple custom routes in Express.js by building a simple personal profile application.

Each route returns different information about the user.

---

# 📚 Concepts Learned

- Creating multiple routes using `app.get()`
- Handling HTTP GET requests
- Returning different responses using `res.send()`
- Understanding how Express matches URL paths

---

# 📂 Routes Implemented

| Route | Description |
|--------|-------------|
| `/` | Welcome Page |
| `/name` | Displays the user's name |
| `/city` | Displays the user's city |
| `/favorite-language` | Displays the favorite programming language |
| `/hobby` | Displays the user's hobby |

---

# ▶️ Run the Application

```bash
node app.js
```

---

# 🌐 Test in Browser

Visit the following URLs:

```
http://localhost:3000/
http://localhost:3000/name
http://localhost:3000/city
http://localhost:3000/favorite-language
http://localhost:3000/hobby
http://localhost:3000/goal
```

---

# 🔄 Execution Flow

1. Node.js starts executing the application.
2. Express is imported using `require()`.
3. An Express application is created using `express()`.
4. The server starts listening on port **3000**.
5. All routes are registered using `app.get()`.
6. A browser sends an HTTP GET request.
7. Express compares the requested URL with all registered routes.
8. When a matching route is found, its callback function executes.
9. `res.send()` sends the response back to the browser.
10. The browser displays the returned message.

---

# 🧠 Key Concepts

## What is a Route?

A route is a URL path that tells Express which function should execute for a specific request.

Example:

```javascript
app.get("/name", (req, res) => {
    res.send("Hi, my name is Bheem.");
});
```

When the browser visits:

```
http://localhost:3000/name
```

Express executes the callback function and sends the response.

---

## What is `app.get()`?

`app.get()` is used to handle **HTTP GET requests**.

Syntax:

```javascript
app.get(path, callback);
```

- **path** → The URL to match.
- **callback** → The function executed when the route is requested.

---

## What is `req`?

The **Request Object (`req`)** contains information sent by the client, such as:

- URL
- Headers
- Query parameters
- Route parameters

---

## What is `res`?

The **Response Object (`res`)** is used to send data back to the client.

Common methods include:

- `res.send()`
- `res.json()`
- `res.status()`
- `res.redirect()`

---

# 📖 Summary

This project demonstrates how Express.js can handle multiple routes in a single application. Each route is associated with a unique URL path and returns a different response, helping you understand the basics of routing and request handling in Express.