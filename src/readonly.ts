export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('yashiro');
// myVisaCard.owner = 'kentaro';
