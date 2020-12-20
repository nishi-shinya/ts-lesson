// ジェネリクス
function copy <T extends { name: string}, U extends keyof T>(value: T, key: U) {
  console.log(value[key]);
  return value;
}

console.log(copy({ name: 'hello' }, 'name'));

// keyof演算子
type K = keyof { name: string, age: number }

// classにジェネクリスを使用
class LightDatabase <T extends string | number | boolean> {
  private data: T[] = [];
  add (item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get () {
    return this.data
  }
}

const stringLightDataBase = new LightDatabase<string> ();
stringLightDataBase.add('Apple');
stringLightDataBase.add('Banana');
stringLightDataBase.add('Grape');
console.log(stringLightDataBase.get());

// interfaceにジェネリクスを使用
interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const TmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32]
}

// Utility
interface Todo {
  title: string;
  text: string;
}

type Todoable = Partial<Todo>
type ReadOnlyTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('hello');
  }, 3000);
});
fetchData.then(data => {
  data.toUpperCase();
});
const vegetables: Array<string> = ['Tomado' , 'Broccori', 'Asparagus'];

interface ResponseData <T = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData = {
  data: 'test',
  status: 1
};

// mappedType
type MappedTypes = {
  [P in 'tomato' | 'pumpkin']: P
}

// conditionalType
type ConditionalType = 'tomato' extends string ? number : boolean;

type ConditionalInfer = { tomato: 'tomato'} extends { tomato: infer R } ? R : boolean;
type DistributeConditionalTypes = ( 'tomato' | 'pumpkins' ) extends 'tomato' ? number : boolean;
