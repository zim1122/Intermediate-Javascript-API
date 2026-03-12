const max = Math.max(1, 2, 3, 4, 5,59, 6, 7, 8, 9, 10);
// console.log(max);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const max2 = Math.max(...numbers);
// console.log(max2);
// console.log(...numbers);

const params =[1,2,34];
function add(a,b,c){
    return a+b+c;
}
const result = add(...params);
console.log(result);

const arr1 = [1, 2, 3];
const arr2=[11,...arr1,55,66];
arr2.push(4);
console.log(arr1);
console.log(arr2);

const person = {
    name:'Kamruzzaman',
    age: 30,
}
const person1={...person};
person.salary=50000;
console.log(person);
console.log(person1);
