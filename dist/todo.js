"use strict";
class Todo {
    constructor(todo, status) {
        this.todo = todo;
        this.status = status;
    }
}
class Html {
    constructor(id) {
        this.id = id;
        this.ul = document.querySelector('.ul');
    }
    getList() {
        const ul = document.getElementById(this.id);
        if (ul) {
            console.log(ul);
            this.ul = ul;
        }
    }
    listRender(todo) {
        if (this.ul) {
            this.ul.insertAdjacentHTML('beforeend', `<li>${todo.todo}</li>`);
        }
    }
}
const todo = new Todo('うんち', 1);
const html = new Html('js-todo-list');
console.log(html);
html.listRender(todo);
