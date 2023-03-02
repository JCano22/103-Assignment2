console.log("Assignment 2");

//declaring and initializing variables
let productName = prompt("Enter the name of the product: ");
let productPrice = prompt("Enter the price of the product: ");
let productQty = prompt("Enter the quantity of products: ");
let subtotal = productPrice * productQty;
let taxAmount = subtotal * .07;
//displaying info in console
console.log(`Product name is ${productName}.  It has a cost of ${productPrice}, and the total quantity is ${productQty}.`);
console.log(`The subtotal is ${subtotal}, and the final price with 7% tax is ${subtotal + taxAmount}`);

//displaying to HTML
document.getElementById("productTransaction").innerHTML =
        `<div class="student">
            <h2>Product Purchase Information </h2>
            <p>Product Name: ${productName} </p>
            <p>Product Cost: ${productPrice} </p>
            <p>Quantity Purchased: ${productQty} </p>
            <p>Subtotal: ${subtotal} </p>
            <p>Grand Total: ${subtotal + taxAmount} </p>
        </div>`;