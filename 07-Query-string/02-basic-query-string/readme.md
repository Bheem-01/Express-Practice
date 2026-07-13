# Student Query Parameter

## Objective

Learn how to read a single query parameter using `req.query` in Express.

---

# Route

```text
GET /student
```

---

# Example URL

```text
http://localhost:3000/student?rollNo=101
```

---

# Expected Response

```text
Student Roll Number: 101
```

---

# How It Works

When the user visits:

```text
/student?rollNo=101
```

Express separates the URL into two parts.

### Route

```text
/student
```

This determines which route should handle the request.

### Query Parameter

```text
rollNo=101
```

Express automatically stores query parameters inside the `req.query` object.

```javascript
req.query
```

becomes

```javascript
{
    rollNo: "101"
}
```

The value can be accessed using:

```javascript
req.query.rollNo
```

---

# Code Used

```javascript
app.get("/student", (req, res) => {
    res.send(`Student Roll Number: ${req.query.rollNo}`);
});
```

---

# Request Flow

```
Browser
   │
   ▼
GET /student?rollNo=101
   │
   ▼
Express Route
   │
   ▼
req.query
   │
   ▼
{
    rollNo: "101"
}
   │
   ▼
req.query.rollNo
   │
   ▼
101
   │
   ▼
Response Sent

Student Roll Number: 101
```

---

# Key Concepts Learned

* Express GET Route
* Query Parameters
* `req.query`
* Dynamic Response
* Client-Server Communication

---

# Summary

In this exercise, I learned how to retrieve a query parameter from the URL using `req.query`. Express automatically converts query parameters into a JavaScript object, making it easy to access values such as `rollNo` and use them to generate dynamic responses.


User visits URL
        │
        ▼
/student?rollNo=101
        │
        ▼
Express matches

app.get("/student")
        │
        ▼
Reads Query Parameters

req.query
        │
        ▼
{
    rollNo: "101"
}
        │
        ▼
req.query.rollNo
        │
        ▼
101
        │
        ▼
res.send()
        │
        ▼
Student Roll Number: 101