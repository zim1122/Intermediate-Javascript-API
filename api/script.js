// const person = {
//     name: 'John',
//     fruit: 'Apple',
//     dish:'halim',
//     friends: ['Alice', 'Bob', 'Charlie'],
//     isRich:false,
//     money:34000,
// };
// console.log(person);

// //JSON means JavaScript Object Notation. It is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used to transmit data between a server and a web application as text. It is based on a subset of the JavaScript programming language and is commonly used in web development for data exchange.
// const personJSON = JSON.stringify(person);
// console.log(personJSON);

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data))
}

const loadPost = () => {
    const url ="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}
