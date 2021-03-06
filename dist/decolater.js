"use strict";
// import { Component } from "react";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// デコレーターファクトリー
function Logging(message) {
    return function (constructor) {
        console.log('Logging...');
        console.log(message);
        console.log(constructor);
    };
}
function Component(template, selection) {
    return function (constructor) {
        const mountedElement = document.querySelector(selection);
        const instance = new constructor(32);
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector('h1').textContent = instance.name;
        }
    };
}
let User = /** @class */ (() => {
    let User = class User {
        constructor() {
            this.name = 'Quill';
            console.log('User was created');
        }
    };
    User = __decorate([
        Component('<h1> {{ name }} </h1>', '#app ')
        // デコレーターはクラスの定義時に決まる。
        ,
        Logging('Logging User')
    ], User);
    return User;
})();
