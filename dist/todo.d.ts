declare class Todo {
    todo: string;
    status: number;
    constructor(todo: string, status: number);
}
declare class TodoList {
    todolist: Array<Todo>;
    constructor(todolist: Array<Todo>);
    set todoList(todo: Todo);
    getTodoList(): void;
}
declare class Html {
    private id;
    private ul;
    constructor(id: string);
    getList(): HTMLUListElement;
    listRender(todolist: Array<Todo>): void;
}
declare const todolist: TodoList;
