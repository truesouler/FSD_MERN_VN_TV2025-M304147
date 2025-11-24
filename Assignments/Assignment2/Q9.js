let delivery1 = 300;
let delivery2 = 500;

let result = (delivery1 > delivery2) ? 
    `Delivery person 1 earns more by ₹${delivery1 - delivery2}` : 
    `Delivery person 2 earns more by ₹${delivery2 - delivery1}`;

console.log(result);
