const person = {
    name: 'Nick',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// const copiedPerson = {...person};
// console.log(copiedPerson);

// destructuring syntax for Array
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2)

// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// hobbies.push('Programming');
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1, 2, 3, 4, 5));