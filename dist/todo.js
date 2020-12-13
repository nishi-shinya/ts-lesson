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
        html.listRender(this.todolist);
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
    listRender(todolist) {
        const status = ['todo', 'doing', 'done'];
        todolist.forEach(todo => {
            if (status[todo.status] === undefined) {
                return;
            }
            if (this.ul) {
                this.ul.insertAdjacentHTML('beforeend', `<li>Todo:${todo.todo} 状態:${status[todo.status]}</li>`);
            }
        });
    }
}
const todolist = new TodoList([]);
todolist.todoList = new Todo('掃除', 0);
todolist.todoList = new Todo('洗濯', 1);
todolist.todoList = new Todo('手洗い', 2);
todolist.todoList = new Todo('うがい', 3);
todolist.getTodoList();
