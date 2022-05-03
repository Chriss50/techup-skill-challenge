const item = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000}, 
]

// ALL PRODUCTS

console.log("All products: ", item)


// 1. Filter and show the product that will be bought when you don't have much money I mean Cheap one

// The cheapest product will be:
var minimum = Math.min.apply(Math, item.map(function(e) {
    return e.price;
}))

console.log("Cheaper product cost: ", minimum)

// 2 . Filter and show the product that will be expensive in the array

// The expensive product will be:
var maximum = Math.max.apply(Math, item.map(function(e) {
    return e.price;
}))

console.log("Expensive product cost: ", maximum);

// 3 . Calculate the full price of all product combined

var sum = 0;
item.forEach(function(e) {
    sum += e.price;
});

console.log("Total price: ", sum)

// 4 . Calculate the full price of all product combined and remove product that are under the 10 dollar

// Products that cost not less than $10
collection = item.filter(function(e) {
    return e.price >= 10;
});
console.log("Items >= $10: ", collection)

// Sum of products' price not less than $10

sum = 0;
collection.forEach(function(e) {
    sum += e.price;
});
console.log("The total price for items >= 10 is ", sum)