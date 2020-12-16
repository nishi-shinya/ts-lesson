interface human {
    name: string;
    age: number;
    greeting(message: string): void;
}
declare const human: human;
declare class Developer implements human {
    name: string;
    age: number;
    constructor(name: string, age: number);
    greeting(message: string): void;
}
