"use strict";
class Score {
    get totalScore() {
        const foods = Foods.getInstance();
        return foods.activeElementsScore.reduce((total, current) => total + current, 0);
    }
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}
class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('food--active');
        const score = Score.getInstance();
        score.render();
    }
}
class Foods {
    constructor() {
        this.elements = document.querySelectorAll('.food');
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(el => {
            new Food(el);
        });
    }
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(el => {
            if (el.classList.contains('food--active')) {
                this._activeElements.push(el);
            }
            ;
        });
        return this._activeElements;
    }
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(el => {
            const foodScore = el.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
    ;
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}
const foods = Foods.getInstance();
