export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this.secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('yashiro', 1234567890);
// card.owner = 'ken';
console.log(card.owner);
// card.secretNumber;
// card._secretNumber;
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
