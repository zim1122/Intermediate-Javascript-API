const king = {
    name: 'King Arthur',
    age: 35,
    kingdom: 'Camelot',
    title: 'The Once and Future King'
}; 
// Object.freeze(king);
delete king.age;
king.queen = 'Queen Guinevere';
console.log(king);