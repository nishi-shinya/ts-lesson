declare function copy<T extends {
    name: string;
}, U extends keyof T>(value: T, key: U): T;
declare type K = keyof {
    name: string;
    age: number;
};
declare class LightDatabase<T extends string | number | boolean> {
    private data;
    add(item: T): void;
    remove(item: T): void;
    get(): T[];
}
declare const stringLightDataBase: LightDatabase<string>;
interface TmpDatabase<T> {
    id: number;
    data: T[];
}
declare const TmpDatabase: TmpDatabase<number>;
interface Todo {
    title: string;
    text: string;
}
declare type Todoable = Partial<Todo>;
declare type ReadOnlyTodo = Readonly<Todo>;
declare const fetchData: Promise<string>;
declare const vegetables: Array<string>;
