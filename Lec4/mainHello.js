const person ={
    name:'Anirach',
    weight: 85
}
function sayHello(){
    console.log("Hello, World");
}
function cube(x){
    return x*x*x;
}

const add = (a,b) => a+b;

const status = true;

module.exports = {person,sayHello,cube,add,status}
const hello = require('./ibHello')

hello.sayHello();
console.log(hello.person.name);
console.log(hello.cube(3));
console.log(hello.add(5,4));
console.log(hello.status);