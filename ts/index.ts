let hello: string = 'hello';

const fruits = ['Apple', 'Banana', 'Grape'];

const book: [string, number, boolean] = ['Jack', 20, true];


enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE'
}

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT
}

let unionType: number | string = 10;

let unionTypes: (number | string)[] = [10,'hello'];

const apple: 'apple' = 'apple'

let clothSize: ClothSize = 'small';

type ClothSize = 'small' | 'medium' | 'large';

function sayHello (): void {
  console.log('Hello');
}

console.log(sayHello());

let tmp: undefined;


const doubleNumber: (num: number) => number = num => num * 2

function dobleAndHandle(num: number, cb: (num: number) => number ): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}

dobleAndHandle(21, doubleNum => {
  return doubleNum;
})

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';

if (typeof unknownInput === 'string') {
  text = unknownInput
}

function error (message: string): never {
  throw new Error(message);
}

console.log(error('this is an error'));
