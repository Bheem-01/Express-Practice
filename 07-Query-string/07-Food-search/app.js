/*Question 12 (Food Delivery)
Visit: localhost:3000/order?restaurant=Dominos&item=Farmhouse%20Pizza&quantity=2
Expected Response:
Restaurant: Dominos
Item: Farmhouse Pizza
Quantity: 2*/ 
// ---------------------------------------------------------------------------

const express = require("express");


const app = express();


const PORT = 3000;


app.get("/order", (req, res) =>{
    res.send(`Restaurant: ${req.query.restaurant}\n Item: ${req.query.item}\n Quantity: ${req.query.quantity}`);
});


app.listen(PORT, ()=>{
     console.log(`Server running on http://localhost:${PORT}`);
})