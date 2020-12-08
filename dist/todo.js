"use strict";
class Todo {
    constructor(todo, status) {
        this.todo = todo;
        this.status = status;
    }
}
class TodoList {
    constructor(todolist) {
        this.todolist = todolist;
    }
    set todoList(todo) {
        this.todolist.push(todo);
    }
    getTodoList() {
        const html = new Html('js-todo-list');
        this.todolist.forEach(todo => {
            html.listRender(todo);
        });
    }
}
class Html {
    constructor(id) {
        this.id = id;
        this.id = id;
        this.ul = this.getList();
    }
    getList() {
        const ul = document.getElementById(this.id);
        return ul;
    }
    listRender(todo) {
        if (this.ul) {
            this.ul.insertAdjacentHTML('beforeend', `<li>${todo.todo}${todo.status}</li>`);
        }
    }
}
const todo = new Todo('うんち', 1);
const todo_1 = new Todo('うんち', 2);
const todo_2 = new Todo('うんち', 3);
const todo_3 = new Todo('うんち', 4);
const todolist = new TodoList([]);
todolist.todoList = todo;
todolist.todoList = todo_1;
todolist.todoList = todo_2;
todolist.todoList = todo_3;
todolist.getTodoList();
