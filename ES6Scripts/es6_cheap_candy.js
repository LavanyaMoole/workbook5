let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    
    // TODO: fill the array with 10 candies of various
    //	price ranges
    ];
// Which candies costs less than $4.00?

let candeieslessthan4=products.filter(p=>p.price<4);
// console.log(candeieslessthan4)
// Which candies has "M&M" its name?
let mandms=products.filter(p=>p.product.includes("M&Ms"));
// console.log(mandms)

// Do we carry "Swedish Fish"?
let swedishFish=products.find(p=> p.product=="Swedish Fish")
console.log(swedishFish)
    