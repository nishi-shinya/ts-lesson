interface Scoreable {
    readonly totalScore: number;
    render(): void;
}
interface Foodable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}
interface Foodsable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}
declare class Score implements Scoreable {
    private static instance;
    get totalScore(): number;
    render(): void;
    static getInstance(): Score;
}
declare class Food implements Foodable {
    element: HTMLDivElement;
    constructor(element: HTMLDivElement);
    clickEventHandler(): void;
}
declare class Foods implements Foodsable {
    private static instance;
    elements: NodeListOf<HTMLDivElement>;
    private _activeElements;
    private _activeElementsScore;
    get activeElements(): HTMLDivElement[];
    get activeElementsScore(): number[];
    private constructor();
    static getInstance(): Foods;
}
declare const foods: Foods;
