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
interface ResponseData<T = any> {
    data: T;
    status: number;
}
declare let tmp2: ResponseData;
declare type MappedTypes = {
    [P in 'tomato' | 'pumpkin']: P;
};
declare type ConditionalType = 'tomato' extends string ? number : boolean;
declare type ConditionalInfer = {
    tomato: 'tomato';
} extends {
    tomato: infer R;
} ? R : boolean;
declare type DistributeConditionalTypes = ('tomato' | 'pumpkins') extends 'tomato' ? number : boolean;
