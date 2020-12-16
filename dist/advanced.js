"use strict";
const quiil = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
// タイプガード
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
