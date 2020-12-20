"use strict";
var _a, _b;
const quiil = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    // in演算子でプロパティが存在するか調べられる
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    // instanceof演算子でクラスを絞り込める
    if (pet instanceof Bird) {
        pet.fly();
    }
    // タグ付きユニオン
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
}
// 型アサーション
const input = document.getElementById('input');
input.value = 'initial input value';
const asInput = document.getElementById('asInput');
input.value = 'intial input value';
// none Null assertion operator
const noneInput = document.getElementById('noneInput');
const desiner = {
    name: 'Quill',
    role: 'web'
};
function toUpperCaseOver(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
// 関数のオーバーロード
const upperHello = toUpperCaseOver('hello');
const downloadedData = {
    id: 1
};
console.log((_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name);
// NullishCoallesceing
const userData = (_b = downloadedData.user) !== null && _b !== void 0 ? _b : 'no-user';
