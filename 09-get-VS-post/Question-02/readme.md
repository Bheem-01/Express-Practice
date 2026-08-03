# 📘 Express.js - GET vs POST Forms

This project demonstrates how HTML forms communicate with an Express server using **GET** and **POST** requests.

It covers:

- HTML Forms
- GET Requests
- POST Requests
- req.query
- req.body
- express.urlencoded() middleware
- Sending Responses

---

# 📁 Project Structure

```
GET-POST-Forms/
│
├── app.js
├── index.html
└── README.md
```

---

# 🎯 Objective

Understand the difference between GET and POST requests.

Learn:

- How browsers send form data
- Where Express stores GET and POST data
- How middleware works
- How to access submitted data

---

# GET Request

Example Form

```html
<form method="GET" action="/registration">

    <input name="name">

    <input name="rollno">

    <input name="course">

</form>
```

When the user submits:

```
Name : Bheem

Roll No : 101

Course : MCA
```

Browser automatically creates

```
/registration?name=Bheem&rollno=101&course=MCA
```

Notice:

The data becomes part of the URL.

---

## Express Route

```javascript
app.get("/registration",(req,res)=>{

});
```

The submitted data is available inside

```javascript
req.query
```

Example

```javascript
console.log(req.query);
```

Output

```javascript
{
    name:"Bheem",
    rollno:"101",
    course:"MCA"
}
```

Individual values

```javascript
req.query.name

req.query.rollno

req.query.course
```

---

# POST Request

Example Form

```html
<form method="POST" action="/registration">

    <input name="name">

    <input name="rollno">

    <input name="course">

</form>
```

Browser sends

```
POST /registration
```

Unlike GET,

the submitted data is **NOT visible in the URL**.

---

## Middleware

Before using POST data, Express must understand HTML form data.

```javascript
app.use(express.urlencoded({ extended:true }));
```

Without this middleware

```javascript
req.body
```

is

```javascript
undefined
```

After middleware

```javascript
req.body
```

becomes

```javascript
{
    name:"Bheem",
    rollno:"101",
    course:"MCA"
}
```

---

## Express Route

```javascript
app.post("/registration",(req,res)=>{

});
```

Access values

```javascript
req.body.name

req.body.rollno

req.body.course
```

---

# Complete Request Flow

## GET Request

```
User fills form

↓

Clicks Submit

↓

Browser creates

/registration?name=Bheem&rollno=101&course=MCA

↓

Express receives request

↓

req.query

↓

Route Handler

↓

res.send()

↓

Browser receives response
```

---

## POST Request

```
User fills form

↓

Clicks Submit

↓

Browser sends POST request

↓

Express

↓

express.urlencoded()

↓

req.body created

↓

Route Handler

↓

res.send()

↓

Browser receives response
```

---

# Understanding app.use()

```javascript
app.use(express.urlencoded({ extended:true }));
```

Think of middleware as a translator.

Browser sends

```
name=Bheem&rollno=101
```

Middleware converts it into

```javascript
{
    name:"Bheem",
    rollno:"101"
}
```

Now Express can access

```javascript
req.body
```

---

# Understanding req.query

Used for

GET Requests

Example URL

```
/registration?name=Bheem&rollno=101
```

Express stores

```javascript
req.query
```

Example

```javascript
req.query.name
```

Output

```
Bheem
```

---

# Understanding req.body

Used for

POST Requests

Express stores submitted form data inside

```javascript
req.body
```

Example

```javascript
req.body.name
```

Output

```
Bheem
```

---

# res.send()

Every request must receive exactly one response.

Correct

```javascript
res.send("Form Submitted");
```

Wrong

```javascript
res.send("Success");

res.send("Again");
```

Error

```
Cannot set headers after they are sent
```

---

# GET vs POST

| GET | POST |
|------|------|
| Retrieves data | Sends data |
| Data visible in URL | Data hidden from URL |
| Uses req.query | Uses req.body |
| Bookmarkable | Not bookmarkable |
| Limited length | Can send large data |

---

# Important Express Methods

| Method | Purpose |
|----------|----------|
| app.use() | Register middleware |
| app.get() | Handle GET requests |
| app.post() | Handle POST requests |
| req.query | Access GET data |
| req.body | Access POST data |
| res.send() | Send response |
| app.listen() | Start server |

---

# Common Mistakes

❌ Forgetting

```javascript
app.use(express.urlencoded())
```

Result

```
req.body = undefined
```

---

❌ Sending two responses

```javascript
res.send("Hello");

res.send("Again");
```

Result

```
Cannot set headers after they are sent
```

---

❌ Wrong action attribute

HTML

```html
<form action="/register">
```

Express

```javascript
app.post("/registration")
```

These must match exactly.

---

# Key Takeaways

✔ GET data → req.query

✔ POST data → req.body

✔ HTML Forms send data

✔ Middleware parses POST data

✔ Every request needs one response

✔ app.listen() starts the server

---

# Revision Formula

```
Browser

↓

HTML Form

↓

method

↓

action

↓

Express Route

↓

req.query OR req.body

↓

Process Data

↓

res.send()

↓

Browser
```

---

# Interview Questions

### Where is GET form data stored?

```
req.query
```

---

### Where is POST form data stored?

```
req.body
```

---

### Why do we need express.urlencoded()?

To convert HTML form data into a JavaScript object.

---

### Why is GET not suitable for passwords?

Because the password becomes visible in the URL.

---

### Which is safer?

POST

---

### Can one request have two res.send()?

No.

One request → One response.

---

# Conclusion

This project demonstrates the complete lifecycle of HTML forms in Express.

By completing this project, you understand:

- HTML Forms
- GET Requests
- POST Requests
- Middleware
- req.query
- req.body
- Response handling
- Express routing

These concepts form the foundation for authentication systems, REST APIs, login forms, registration forms, and full-stack web applications.

🔄 Complete Flow (Revision Notes)
Step 1: User fills the HTML form

Example:

Name : Bheem

Roll No : 101

Course : MCA
Step 2: User clicks Submit

The browser checks:

<form method="GET" action="/registration">

or

<form method="POST" action="/registration">

It decides:

How to send the data → method
Where to send the data → action
Step 3: Browser sends the request
If GET

The browser creates:

/registration?name=Bheem&rollno=101&course=MCA

The data travels in the URL.

If POST

The browser sends:

POST /registration

The data travels in the request body, not the URL.

Step 4: Express receives the request

Express looks for a matching route.

For GET:

app.get("/registration")

For POST:

app.post("/registration")
Step 5: Express stores the data
GET
req.query

contains

{
  name: "Bheem",
  rollno: "101",
  course: "MCA"
}
POST

After

app.use(express.urlencoded({ extended: true }));

Express creates

req.body

which contains

{
  name: "Bheem",
  rollno: "101",
  course: "MCA"
}
Step 6: You use the data

Examples:

req.query.name

or

req.body.name
Step 7: Send a response

Every request must end with exactly one response.

Examples:

res.send("Success");

or

res.json({...});

or

res.render("home");
📌 One-line memory trick
app.use() → Prepare or process every incoming request (middleware).
app.get() → Handle GET requests.
app.post() → Handle POST requests.
req.query → Read data from the URL (GET).
req.body → Read data from the request body (POST).
res.send() → Send one response back to the client.
app.listen() → Start the server and wait for requests.
-------------------------------------------------------------------------------------------
| `res.send()`                             | `res.json()`                   |
| ---------------------------------------- | ------------------------------ |
| Sends plain text, HTML, or other content | Sends JSON data                |
| Used for web pages or simple messages    | Used for APIs                  |
| Example: `"Welcome"`                     | Example: `{ "name": "Bheem" }` |
------------------------------------------------------------------------------------------
How to log GET query

Suppose the URL is

http://localhost:3000/registration?name=Bheem&rollno=101&course=MCA

Then

console.log(req.query);

Output

{
    name: 'Bheem',
    rollno: '101',
    course: 'MCA'
}

To print each value separately:

console.log(req.query.name);
console.log(req.query.rollno);
console.log(req.query.course);
How to log POST body

Suppose the user submits

Name : Bheem

Roll No : 101

Course : MCA

Then

console.log(req.body);

Output

{
    name: 'Bheem',
    rollno: '101',
    course: 'MCA'
}

Individual values:

console.log(req.body.name);
console.log(req.body.rollno);
console.log(req.body.course);