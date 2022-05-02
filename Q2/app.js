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

var collection = item.filter(function(e) {
    return e.price < 100;
});

console.log("Cheaper products: ", collection)

// 2 . Filter and show the product that will be expensive in the array

collection = item.filter(function(e) {
    return e.price >= 100;
});

console.log("Expensive products: ", collection)

// 3 . Calculate the full price of all product combined

var sum = 0;
item.forEach(function(e) {
    sum += e.price;
});

console.log("Total price: ", sum)

// 4 . Calculate the full price of all product combined and remove product that are under the 10 dollar

sum = 0;
collection = item.filter(function(e) {
    return e.price >= 10;
});
console.log("Items >= $10: ", collection)

collection.forEach(function(e) {
    sum += e.price;
});
console.log("The total price for items >= 10 is ", sum)