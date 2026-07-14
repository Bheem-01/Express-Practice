# Person Query Parameters

## Objective

Learn how to read **multiple query parameters** in Express using `req.query`.

---

## Route

```text
GET /person
```

---

## Example URL

```text
http://localhost:3000/person?name=Bheem&age=25
```

---

## Expected Response

```text
Name: Bheem
Age: 25
```

---

## How It Works

The URL contains two query parameters:

```text
name=Bheem
age=25
```

Express automatically stores them inside the `req.query` object.

```javascript
req.query
```

becomes:

```javascript
{
    name: "Bheem",
    age: "25"
}
```

You can access each value individually:

```javascript
req.query.name
req.query.age
```

---

## Code

```javascript
app.get("/person", (req, res) => {

    const { name, age } = req.query;

    res.send(`Name: ${name}\nAge: ${age}`);

});
```

---

## Request Flow

```text
Browser
   │
   ▼
GET /person?name=Bheem&age=25
   │
   ▼
Express matches "/person"
   │
   ▼
req.query
   │
   ▼
{
    name: "Bheem",
    age: "25"
}
   │
   ▼
Extract values
   │
   ▼
name = "Bheem"
age = "25"
   │
   ▼
Send Response

Name: Bheem
Age: 25
```

---

## Key Concepts Learned

* Multiple Query Parameters
* `req.query`
* Object Destructuring
* Dynamic Responses
* GET Routes

---

## Summary

In this exercise, I learned how to retrieve multiple query parameters from the URL. Express stores all query parameters inside the `req.query` object, allowing me to access values like `name` and `age` to generate dynamic responses.

app.get("/person", (req, res) => {

    // Extract values from req.query using object destructuring
    const { name, age } = req.query;

    // Send the response
    res.send(`Name: ${name}\nAge: ${age}`);

});
This is called object destructuring and is the style you'll see in most professional Express projects.