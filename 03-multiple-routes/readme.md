## 📌 Objective

Learn how to create multiple routes in an Express application using `app.get()`.

## 🔄 Execution Flow

1. Import the Express framework.
2. Create an Express application.
3. Define the port number.
4. Start the server using `app.listen()`.
5. Register all routes using `app.get()`.
6. Browser sends an HTTP GET request.
7. Express checks each route.
8. If a matching route is found, its callback function executes.
9. `res.send()` sends the response to the browser.
10. The browser displays the response.

Test in Browser

Visit the following URLs:

```
http://localhost:3000/
http://localhost:3000/contact
http://localhost:3000/services
http://localhost:3000/help
---

## 🧠 Key Concepts to Remember

### What is a Route?

A route is a URL path that determines which function should execute when a client makes a request.

Example:

```javascript
app.get("/about", (req, res) => {
    res.send("About Us");
});
```

When the browser visits:

```
http://localhost:3000/about
```

Express matches the `/about` route and executes its callback function.

---

### What is `app.get()`?

`app.get()` is used to handle **HTTP GET requests**.

Syntax:

```javascript
app.get(path, callback);
```

- **path** → URL to match
- **callback** → Function executed when the route is requested

---

### What is `req`?

`req` (Request Object) contains information sent by the client, such as:

- URL
- Headers
- Query Parameters
- Route Parameters

---

### What is `res`?

`res` (Response Object) is used to send data back to the client.

Common methods:

- `res.send()`
- `res.json()`
- `res.status()`
- `res.redirect()`

---

## 📖 Summary

This program demonstrates how Express handles multiple routes by matching the requested URL with the corresponding route and sending an appropriate response to the client.