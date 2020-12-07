class Todo {
  constructor (public todo: string, public status: number) {
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
    if (ul) {
      return ul;
    }
    return;
  }

  listRender (todo: Todo) {
    if (this.ul) {
      this.ul.insertAdjacentHTML('beforeend', `<li>${todo.todo}</li>`);
    }
  }
}

const todo = new Todo('うんち', 1);

const html = new Html('js-todo-list');

console.log(html);

html.listRender(todo);
