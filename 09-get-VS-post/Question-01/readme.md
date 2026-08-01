#Important questions are below in the readme file.
# Express.js Forms - GET vs POST

## Objective

Understand the difference between GET and POST requests while submitting HTML forms using Express.js.

---

# GET Request

## What is a GET Request?

A GET request is used to retrieve data from the server.

When a form is submitted using:

```html
<form method="GET">
```

the browser sends the form values as **query parameters** in the URL.

Example:

```
http://localhost:3000/register?user=Bheem&password=12345
```

Notice that the data is visible in the URL.

---

## Accessing GET Data

Express stores GET form data inside:

```javascript
req.query
```

Example:

```javascript
app.get("/register", (req, res) => {

    console.log(req.query.user);

    console.log(req.query.password);

});
```

Output:

```
Bheem

12345
```

---

# POST Request

## What is a POST Request?

A POST request is used to send data to the server.

Unlike GET, the data is **not visible in the URL**.

The URL remains:

```
http://localhost:3000/register
```

The form data is sent inside the request body.

---

# Why do we use express.urlencoded()?

HTML forms send data in a format called URL Encoded.

Express cannot understand that format automatically.

Therefore we write:

```javascript
app.use(express.urlencoded({ extended: true }));
```

This middleware converts

```
user=Bheem&password=12345
```

into

```javascript
{
    user: "Bheem",
    password: "12345"
}
```

which becomes available through

```javascript
req.body
```

---

# Accessing POST Data

Example:

```javascript
app.post("/register", (req, res) => {

    console.log(req.body);

});
```

Output:

```javascript
{
    user: "Bheem",
    password: "12345"
}
```

Individual values:

```javascript
req.body.user

req.body.password
```

---

# Flow of GET Request

```
User fills form

↓

Browser

↓

URL becomes

/register?user=Bheem&password=12345

↓

Express

↓

req.query

↓

Response
```

---

# Flow of POST Request

```
User fills form

↓

Browser

↓

POST Request

↓

URL remains

/register

↓

express.urlencoded()

↓

req.body

↓

Response
```

---

# GET vs POST

| Feature | GET | POST |
|---------|------|------|
| Purpose | Retrieve data | Send data |
| Data Location | URL | Request Body |
| Visible in URL | Yes | No |
| Express Object | req.query | req.body |
| Middleware Needed | No | Yes (`express.urlencoded()`) |
| Secure | Less | More secure than GET (but still use HTTPS for sensitive data) |

---

# Important Notes

## GET

- Data is visible in the URL.
- Easy to bookmark.
- Suitable for searches and filters.
- Not recommended for passwords.

---

## POST

- Data is hidden from the URL.
- Used for login forms.
- Used for registration forms.
- Used for sending large amounts of data.

---

# Common Mistakes

## Forgetting express.urlencoded()

Wrong:

```javascript
app.post("/register", (req, res) => {

    console.log(req.body);

});
```

Output:

```javascript
{}
```

Correct:

```javascript
app.use(express.urlencoded({ extended: true }));
```

---

## Sending Two Responses

Wrong:

```javascript
res.send("Hello");

res.send("Again");
```

This causes:

```
Cannot set headers after they are sent
```

Correct:

```javascript
res.send("Hello Again");
```

---

# Summary

GET → Data goes into the URL → Access using `req.query`

POST → Data goes into the request body → Access using `req.body`

For POST requests, always remember to use:

```javascript
app.use(express.urlencoded({ extended: true }));
```

to enable Express to read HTML form data.
---------------------------------------------------------------------------------------
# Express Forms (GET & POST) - Interview Questions

---

# 🟢 Basic Level

## 1. What is a GET request?

**Answer:**

A GET request is used to retrieve data from the server.

When an HTML form uses:

```html
<form method="GET">
```

the browser sends the form data as query parameters in the URL.

Example:

```
/register?user=Bheem&password=12345
```

The data is available in Express through:

```javascript
req.query
```

---

## 2. What is a POST request?

**Answer:**

A POST request is used to send data to the server.

Unlike GET, the submitted data is not visible in the URL.

The data is stored in the request body.

Express accesses it using:

```javascript
req.body
```

---

## 3. What is the difference between GET and POST?

| GET | POST |
|------|------|
| Retrieves data | Sends data |
| Data is visible in URL | Data is hidden from URL |
| Uses req.query | Uses req.body |
| Can be bookmarked | Cannot be bookmarked |
| Limited data size | Can send much larger data |

---

## 4. Which Express object stores GET form data?

**Answer**

```javascript
req.query
```

---

## 5. Which Express object stores POST form data?

**Answer**

```javascript
req.body
```

---

## 6. Why doesn't req.body work automatically?

**Answer**

Because Express does not automatically parse HTML form data.

We must use middleware.

```javascript
app.use(express.urlencoded({ extended: true }));
```

This middleware converts the form data into a JavaScript object.

---

## 7. What is middleware?

**Answer**

Middleware is a function that executes before the final route handler.

It can:

- Read request data
- Modify requests
- Perform authentication
- Log requests
- Parse incoming data

Example:

```javascript
app.use(express.urlencoded({ extended: true }));
```

---

## 8. What does app.use() do?

**Answer**

`app.use()` registers middleware.

Every request passes through this middleware before reaching the route.

---

## 9. Why do we use name="" inside input fields?

Example:

```html
<input name="user">
```

**Answer**

The value of the name attribute becomes the key.

Example:

```html
<input name="user">
```

User enters:

```
Bheem
```

Express receives:

```javascript
req.body.user
```

---

## 10. What does action="/register" do?

**Answer**

It tells the browser where to send the form after clicking Submit.

```html
<form action="/register">
```

means

Send this form to

```
/register
```

---

# 🟡 Moderate Level

## 11. Why should passwords never be sent using GET?

**Answer**

Because GET places the password inside the URL.

Example:

```
/login?user=Bheem&password=12345
```

The password becomes visible in:

- Browser history
- Server logs
- Shared URLs

POST is preferred for login forms.

---

## 12. Why is POST considered safer than GET?

**Answer**

POST keeps data out of the URL.

Although the data is not encrypted by POST itself, it is less exposed.

For true security, POST should always be used together with HTTPS.

---

## 13. What happens if you forget express.urlencoded()?

**Answer**

`req.body` will be empty.

Example:

```javascript
{}
```

because Express cannot understand HTML form data without parsing it.

---

## 14. What is the purpose of express.urlencoded()?

**Answer**

It parses URL-encoded form data and converts it into a JavaScript object stored inside:

```javascript
req.body
```

---

## 15. Explain the flow of a POST request.

**Answer**

```
Browser

↓

User fills form

↓

Clicks Submit

↓

Browser sends POST request

↓

Express receives request

↓

express.urlencoded()

↓

req.body created

↓

Route Handler

↓

Response sent
```

---

## 16. Can GET requests modify data?

**Answer**

Technically they can, but they should not.

GET should only retrieve data.

POST, PUT, PATCH and DELETE should modify data.

---

## 17. Why can't we send two res.send() calls?

Example:

```javascript
res.send("Hello");

res.send("Again");
```

**Answer**

Because one HTTP request can have only one response.

The second response causes:

```
Cannot set headers after they are sent
```

---

## 18. Difference between req.params, req.query and req.body?

### req.params

Comes from URL parameters.

Example

```
/users/101
```

```javascript
req.params.id
```

---

### req.query

Comes from query string.

```
/search?name=Bheem
```

```javascript
req.query.name
```

---

### req.body

Comes from POST form data.

```javascript
req.body.user
```

---

# 🔴 Advanced Level

## 19. What is URL Encoding?

**Answer**

HTML forms send data in URL-encoded format.

Example

```
user=Bheem&city=New+Delhi
```

Express converts it into

```javascript
{
    user:"Bheem",
    city:"New Delhi"
}
```

---

## 20. What does extended: true mean?

**Answer**

It allows Express to parse nested objects and richer form data.

For beginners, it is standard practice to use:

```javascript
app.use(express.urlencoded({ extended: true }));
```

---

## 21. What happens internally when a POST form is submitted?

**Answer**

1. Browser collects input values.
2. Converts them into URL-encoded format.
3. Sends HTTP POST request.
4. Express receives the request.
5. express.urlencoded() parses the body.
6. Data becomes available inside req.body.
7. Route handler executes.
8. Server sends response.

---

## 22. Why does GET use req.query instead of req.body?

**Answer**

GET requests do not have a request body.

The browser sends the data inside the URL.

Therefore Express stores it in:

```javascript
req.query
```

---

## 23. Can POST requests also have query parameters?

**Answer**

Yes.

Example

```
POST /login?remember=true
```

Then:

```javascript
req.query.remember
```

and

```javascript
req.body.user
```

can both exist in the same request.

---

## 24. Why is req.body undefined sometimes?

**Answer**

Possible reasons:

- express.urlencoded() middleware is missing.
- The middleware is written after the routes.
- The request is not actually sending a body.
- Incorrect Content-Type header.

---

## 25. Which HTTP methods are commonly used in REST APIs?

**Answer**

| Method | Purpose |
|---------|----------|
| GET | Retrieve data |
| POST | Create new data |
| PUT | Replace existing data |
| PATCH | Update part of existing data |
| DELETE | Delete data |

---

# ⭐ Senior-Level Interview Questions

## 26. Why is GET considered idempotent?

**Answer**

An idempotent request produces the same result no matter how many times it is repeated.

Calling:

```
GET /users/1
```

ten times does not change the server's data.

---

## 27. Is POST idempotent?

**Answer**

Usually no.

Submitting the same POST request multiple times can create duplicate records, such as duplicate orders or users.

---

## 28. Why should server-side validation always be used even if client-side validation exists?

**Answer**

Client-side validation can be bypassed by modifying requests using tools like Postman or browser developer tools.

Server-side validation ensures that only valid and safe data is accepted.

---

## 29. Why is Express called unopinionated?

**Answer**

Express provides the basic tools for building web applications but does not force a specific project structure, database, template engine, or architecture. Developers are free to choose how they organize their application.

---

## 30. If you were building a Login API today, would you use GET or POST?

**Answer**

POST.

Reasons:

- Credentials should not appear in the URL.
- Request bodies are more appropriate for sensitive data.
- Login creates a session or token, making POST the correct semantic choice.
- Combined with HTTPS, POST provides a much safer approach than GET.