"use strict";
class Todo {
    constructor(todo, status) {
        this.todo = todo;
        this.status = status;
    }
}
class Html {
    render(todo) {
        const ul = document.getElementById('js-todo-list');
        if (ul) {
            ul.insertAdjacentHTML('beforeend', `<li>${todo.todo}</li>`);
        }
    }
}
const todo = new Todo('うんち', 1);
const html = new Html();
html.render(todo);
