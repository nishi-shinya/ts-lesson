"use strict";
const human = {
    name: 'Quill',
    age: 30,
    greeting(message) {
        console.log(message);
    }
};
class Developer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting(message) {
        console.log(message);
    }
}
