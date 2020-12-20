declare function copy<T extends {
    name: string;
}, U extends keyof T>(value: T, key: U): T;
declare type K = keyof {
    name: string;
    age: number;
};
