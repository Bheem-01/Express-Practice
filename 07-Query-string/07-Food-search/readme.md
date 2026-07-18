🌐 Test the Application

Open your browser and visit:

http://localhost:3000/order?restaurant=Dominos&item=Farmhouse%20Pizza&quantity=2
✅ Expected Output
Restaurant: Dominos
Item: Farmhouse Pizza
Quantity: 2

🧠 How It Works

The browser sends the following URL:

/order?restaurant=Dominos&item=Farmhouse%20Pizza&quantity=2

Express automatically stores everything after ? inside the req.query object.

For this URL:

req.query

becomes

{
  restaurant: "Dominos",
  item: "Farmhouse Pizza",
  quantity: "2"
}

The server then reads these values and sends them back to the client using res.send().

📖 Key Learning
? starts a query string.
& separates multiple query parameters.
Query parameters are accessed using req.query.
res.send() sends the response back to the browser.
Query strings are commonly used for searching, filtering, and sorting data.
👨‍💻 Author

Bheem

Learning Backend Development with Node.js and Express.js.