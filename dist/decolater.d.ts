declare function Logging(message: string): (constructor: Function) => void;
declare function Component(template: string, selection: string): (constructor: new (age: number) => {
    name: string;
}) => void;
declare class User {
    name: string;
    constructor();
}
