"use strict";
// ジェネリクス
function copy(value, key) {
    console.log(value[key]);
    return value;
}
console.log(copy({ name: 'hello' }, 'name'));
