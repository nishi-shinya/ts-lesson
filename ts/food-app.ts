class Score {
  get totalScore () {
    const foods = new Foods();
    return foods.activeElementsScore.reduce((total, current) => total + current, 0);
  }
}

class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    this.element.classList.toggle('food--active');
  }
}

class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food');

  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];

  get activeElements () {
    this._activeElements = [];
    this.elements.forEach(el => {
      if(el.classList.contains('food--active')) {
        this._activeElements.push(el);
      };
    })
    return this._activeElements;
  }

  get activeElementsScore () {
    this._activeElementsScore = [];
    this._activeElements.forEach(el => {
      const foodScore = el.querySelector('.food__score');
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent));
      }
    });
    return this._activeElementsScore;
  }

  constructor() {
    this.elements.forEach(el => {
      new Food(el);
    });
  };
}

const foods = new Foods();
