class Todo {

  constructor (public todo: string, public status: number) {
  }
}
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

  listRender (todolist: Array<Todo>) {
    const status = ['todo', 'doing', 'done'];
    todolist.forEach(todo => {
      if (status[todo.status] === undefined) {
        return;
      }
      if (this.ul) {
        this.ul.insertAdjacentHTML('beforeend', `<li>${todo.todo}${status[todo.status]}</li>`);
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
