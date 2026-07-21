# What are Query Parameters?

Query parameters are values passed in the URL after the `?`.

Example:

```
/products?category=laptop&brand=HP
```

Everything after the `?` is called the **query string**.

Each query parameter follows this format:

```
key=value
```

Example:

```
category=laptop
brand=HP
```

Keys:

```
category
brand
```

Values:

```
laptop
HP
```

---

# How Express Reads Query Parameters

Express automatically stores all query parameters inside:

```javascript
req.query
```

Example:

URL

```
/products?category=laptop&brand=HP
```

Express creates:

```javascript
req.query = {
    category: "laptop",
    brand: "HP"
}
```

Now you can access them using:

```javascript
req.query.category
```

returns

```
laptop
```

and

```javascript
req.query.brand
```

returns

```
HP
```

---

# Program Workflow

The program checks which query parameters are present.

Depending on the values provided, it sends different responses.

---

## Case 1

Visit

```
http://localhost:3000/products
```

No query parameters are present.

Response

```
No filters provided.
```

---

## Case 2

Visit

```
http://localhost:3000/products?category=mobile
```

Express creates

```javascript
req.query = {
    category: "mobile"
}
```

Response

```
Category: mobile
```

---

## Case 3

Visit

```
http://localhost:3000/products?category=laptop&brand=HP
```

Express creates

```javascript
req.query = {
    category: "laptop",
    brand: "HP"
}
```

Response

```
Category: laptop
Brand: HP
```

---

## Case 4

Visit

```
http://localhost:3000/products?category=shoes&brand=Nike&size=9
```

Express creates

```javascript
req.query = {
    category: "shoes",
    brand: "Nike",
    size: "9"
}
```

Response

```
Category: shoes
Brand: Nike
Size: 9
```

---

## Case 5

Visit

```
http://localhost:3000/products?category=watch&brand=Titan&price=5000
```

Express creates

```javascript
req.query = {
    category: "watch",
    brand: "Titan",
    price: "5000"
}
```

Response

```
Category: watch
Brand: Titan
Price: 5000
```

---

# Understanding the if...else if Flow

The conditions are checked from top to bottom.

```
if (category && brand && size)
```

↓

If false

↓

```
else if (category && brand && price)
```

↓

If false

↓

```
else if (category && brand)
```

↓

If false

↓

```
else if (category)
```

↓

If false

↓

```
No filters provided.
```

Only the **first true condition** executes.

After `res.send()` runs, Express immediately sends the response and stops checking the remaining conditions.

---

# Why the Most Specific Conditions Come First

Suppose the URL is:

```
/products?category=shoes&brand=Nike&size=9
```

If the program checked only

```javascript
if(category)
```

first,

it would immediately send

```
Category: shoes
```

and stop.

It would never display Brand or Size.

Therefore, the most specific conditions must always appear first.

---

# Concepts Practiced

- Express.js
- Node.js
- Routes
- GET Requests
- Query Parameters
- req.query
- if...else if
- Logical AND (&&)
- Template Literals
- res.send()
- Starting an Express Server

---

# Real-World Example

Shopping websites such as Amazon, Flipkart, and Myntra use query parameters for filters.

Example:

```
https://shop.com/products?category=mobile&brand=Samsung&price=50000
```

The backend receives:

```javascript
req.query = {
    category: "mobile",
    brand: "Samsung",
    price: "50000"
}
```

Then it searches the database and returns matching products.

This project demonstrates the first step of that process—reading filter values from the URL using `req.query`.

---

# Sample URLs

```
http://localhost:3000/products
```

```
http://localhost:3000/products?category=mobile
```

```
http://localhost:3000/products?category=laptop&brand=HP
```

```
http://localhost:3000/products?category=shoes&brand=Nike&size=9
```

```
http://localhost:3000/products?category=watch&brand=Titan&price=5000