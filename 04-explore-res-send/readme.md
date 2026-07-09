# 04 - Exploring res.send()

## 📌 Objective

Understand how the `res.send()` method works in Express and learn how it can send different types of responses to the client.

---

# 📚 Concepts Learned

- Sending plain text
- Sending HTML
- Sending JavaScript objects
- Automatic JSON conversion
- Difference between `console.log()` and `res.send()`

---

# 📂 Routes Implemented

| Route | Response Type |
|--------|---------------|
| `/` | Plain String |
| `/html` | HTML |
| `/object` | JavaScript Object (JSON) |

---

# ▶️ Run the Application

```bash
node app.js
```

---

# 🌐 Test in Browser

### Plain Text

```
http://localhost:3000/
```

Output

```
This is a string response.
```

---

### HTML

```
http://localhost:3000/html
```

Output

```
Welcome to Express
This is an HTML response.
```

The browser renders the HTML tags.

---

### Object

```
http://localhost:3000/object
```

Output

```json
{
  "name": "Bheem",
  "course": "Express"
}
```

Express automatically converts the JavaScript object into JSON.

---

# 🔄 Execution Flow

1. Import Express.
2. Create an Express application.
3. Start the server using `app.listen()`.
4. Register three routes.
5. Browser sends a GET request.
6. Express checks which route matches.
7. The matching callback function executes.
8. `res.send()` sends the response back to the browser.

---

# 🧠 Key Concepts

## What is `res.send()`?

`res.send()` is used to send a response from the server to the client.

Syntax

```javascript
res.send(data);
```

The data can be:

- String
- HTML
- JavaScript Object
- Array
- Boolean
- Buffer

---

## Sending a String

```javascript
res.send("Hello");
```

Browser Output

```
Hello
```

---

## Sending HTML

```javascript
res.send("<h1>Hello</h1>");
```

The browser renders the HTML instead of showing the tags as plain text.

---

## Sending an Object

```javascript
res.send({
    name: "Bheem"
});
```

Express automatically converts the object into JSON before sending it.

Browser Output

```json
{
  "name": "Bheem"
}
```

---

# Difference Between console.log() and res.send()

| console.log() | res.send() |
|---------------|------------|
| Prints data in the terminal | Sends data to the browser |
| Used for debugging | Used to respond to client requests |
| Client cannot see it | Client receives and sees the response |

---

# Summary

This program demonstrates that `res.send()` can return different kinds of data. Depending on what is passed to it, Express sends plain text, renders HTML, or automatically converts JavaScript objects into JSON before sending them to the client.