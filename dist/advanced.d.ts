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
declare function toUpperCase(x: string | number): string | number;
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
