class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
}

const user = new Person('Quill');

console.log(user);
