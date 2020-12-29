// import { Component } from "react";

// デコレーターファクトリー
function Logging (message: string) {
  return function (constructor: Function) {
    console.log('Logging...');
    console.log(message)
    console.log(constructor);
  }
}

function Component(template: string, selection: string) {
  return function (constructor: { new(age: number ): { name: string }}) {
    const mountedElement = document.querySelector(selection);
    const instance = new constructor(32);
    if (mountedElement) {
      mountedElement.innerHTML = template;
      mountedElement.querySelector('h1')!.textContent = instance.name;
    }
  }
}

@Component('<h1> {{ name }} </h1>', '#app ')
// デコレーターはクラスの定義時に決まる。
@Logging('Logging User')
class User {
  name = 'Quill';
  constructor () {
    console.log('User was created');
  }
}
