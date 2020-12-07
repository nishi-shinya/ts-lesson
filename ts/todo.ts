class Todo {
  constructor (public todo: string, public status: number) {
  }
}

class Html {
  private ul: HTMLUListElement ;
  constructor(private id: string) {
  }

  getList (id: HTMLUListElement) {
    const ul = <HTMLUListElement>document.getElementById(this.id);
    if (ul) {
      this.ul = ul;
    }
  }

  render (todo: Todo) {
    if (this.ul) {
      this.ul.insertAdjacentHTML('beforeend', `<li>${todo.todo}</li>`);
    }
  }
}

const todo = new Todo('うんち', 1);

const html = new Html('js-todo-list');

html.render(todo);
