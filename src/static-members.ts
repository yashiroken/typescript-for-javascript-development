export {};

class Me {
  isProgrammer: boolean = true;
  static isProgrammer: boolean = true;
  static firstName: string = 'Kentaro';
  static lastName: string = 'Yashiro';

  static work() {
    // return "Hey, guys! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());
