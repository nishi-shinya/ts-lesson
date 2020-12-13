interface human {
  name: string;
  age: number;
  greeting(message: string): void;
}


const human: human = {
  name: 'Quill',
  age: 30,
  greeting (message: string) {
    console.log(message);
  }
}

class Developer implements human {
  constructor(public name: string, public age: number ) {
  }
  greeting(message: string) {
    console.log(message);
  }
}

