declare let hello: string;
declare const fruits: string[];
declare const book: [string, number, boolean];
declare enum CoffeeSize {
    SHORT = "SHORT",
    TALL = "TALL",
    GRANDE = "GRANDE"
}
declare const coffee: {
    hot: boolean;
    size: CoffeeSize;
};
declare let unionType: number | string;
declare let unionTypes: (number | string)[];
declare const apple: 'apple';
declare let clothSize: ClothSize;
declare type ClothSize = 'small' | 'medium' | 'large';
declare function sayHello(): void;
declare let tmp: undefined;
declare const doubleNumber: (num: number) => number;
declare function dobleAndHandle(num: number, cb: (num: number) => number): void;
declare let unknownInput: unknown;
declare let anyInput: any;
declare let text: string;
declare function error(message: string): never;
