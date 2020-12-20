interface Enginner {
    name: string;
    role: string;
}
interface Blogger {
    name: string;
    follower: number;
}
declare type EnginnerBlogger = Enginner & Blogger;
declare const quiil: EnginnerBlogger;
declare function toUpperCase(x: string): string;
declare type NomadWorker = Enginner | Blogger;
declare function describeProfile(nomadWorker: NomadWorker): void;
declare class Dog {
    kind: 'dog';
    speak(): void;
}
declare class Bird {
    kind: 'bird';
    speak(): void;
    fly(): void;
}
declare type Pet = Dog | Bird;
declare function havePet(pet: Pet): void;
declare const input: HTMLInputElement;
declare const asInput: HTMLInputElement;
declare const noneInput: HTMLElement;
interface Desiner {
    name: string;
    [index: string]: string;
}
declare const desiner: Desiner;
declare function toUpperCaseOver(x: string): string;
declare const upperHello: string;
interface DownloadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        };
    };
}
declare const downloadedData: DownloadedData;
declare const userData: string | {
    name?: {
        first: string;
        last: string;
    } | undefined;
};
declare type id = DownloadedData["id"];
