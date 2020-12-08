class Todo {

  constructor (public todo: string, public status: number) {
  }
}
type status = [ 'todo', 'doing', 'done'];
class TodoList {
  constructor (public todolist: Array<Todo>) {
  }

  set todoList (todo: Todo) {
    this.todolist.push(todo);
  }

  getTodoList () {
    const html = new Html('js-todo-list');
    html.listRender(this.todolist);
  }
}

class Html {
  private ul: HTMLUListElement ;
  constructor(private id: string) {
    this.id = id;
    this.ul = this.getList();
  }

  getList () {
    const ul = <HTMLUListElement>document.getElementById(this.id);
    return ul;
  }

  listRender (todolist: TodoList) {

    todolist.forEach(element => {

    });

    if (this.ul) {
      this.ul.insertAdjacentHTML('beforeend', `<li>${todo.todo}${todo.status}</li>`);
    }
  }
}

const todo = new Todo('掃除', 1);
const todo_1 = new Todo('洗濯', 2);
const todo_2 = new Todo('手洗い', 3);
const todo_3 = new Todo('うがい', 4);
const todolist = new TodoList([]);
todolist.todoList = todo;
todolist.todoList = todo_1;
todolist.todoList = todo_2;
todolist.todoList = todo_3;
todolist.getTodoList();
