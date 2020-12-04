"use strict";
let hello = 'hello';
const fruits = ['Apple', 'Banana', 'Grape'];
const book = ['Jack', 20, true];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
let unionType = 10;
let unionTypes = [10, 'hello'];
const apple = 'apple';
let clothSize = 'small';
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
let tmp;
const doubleNumber = num => num * 2;
function dobleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
dobleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('this is an error'));
