const arr = [1, 2, 3, 4, 5];
const double = [];
for (let i = 0; i < arr.length; i++) {
    double.push(arr[i] * 2);
}
console.log(double);

const doubleit=num=>num*2;
const double2=arr.map(doubleit);
console.log(double2);

const square=num=>num*num;
const squares=arr.map(square);
console.log(squares);


const freinds = ['Alice', 'Bob', 'Charlie'];
const firstLetters = freinds.map(friend => friend[0]);
console.log(firstLetters);

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },  
    { name: 'Tablet', price: 300 }
];
const productNames = products.map(product => product.name);
console.log(productNames);