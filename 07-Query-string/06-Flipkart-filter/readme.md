Real-world Example (Flipkart)

Imagine Flipkart has a filter:

Category: Laptop
Maximum Price: ₹60000

When the user clicks search, the frontend sends:

/products?category=laptop&price=60000

Your backend receives:

{
 category: "laptop",
 price: "60000"
}

Then backend can:

Read these values
Search database
Return matching products

Example:

User:
localhost:3000/products?category=laptop&price=60000


Server:
Find laptops under 60000


Response:
HP Laptop
Dell Laptop
Lenovo Laptop
In one line:

This program creates a /products API that reads category and price from the URL and sends them back as a response.