"use strict";
// ジェネリクス
function copy(value, key) {
    console.log(value[key]);
    return value;
}
console.log(copy({ name: 'hello' }, 'name'));
// classにジェネクリスを使用
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDataBase = new LightDatabase();
stringLightDataBase.add('Apple');
stringLightDataBase.add('Banana');
stringLightDataBase.add('Grape');
console.log(stringLightDataBase.get());
const TmpDatabase = {
    id: 3,
    data: [32]
};
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetables = ['Tomado', 'Broccori', 'Asparagus'];
