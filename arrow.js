function add (a, b) {
    return a + b;
}
// console.log(add2(2, 3));
//function expression
const add2 = function (a, b) {
    return a + b;
}
console.log(add(2, 3));
console.log(add2(5, 6));

//arrow function
const add3 =(num1,num2) =>num1+num2;
console.log(add3(10,20));

const multiple = (a,b)=>a*b;
console.log(multiple(5,6));

const tenTimes = num=>num*10
const getpi = () => 3.1416;
const addAll = (a,b,c,d,e) => a+b+c+d+e;
const subtract=(a,b) =>a-b;
console.log(tenTimes(5));
console.log(getpi());
console.log(addAll(1,2,3,4,5));
console.log(subtract(10,4));