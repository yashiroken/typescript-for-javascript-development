export {};

let name: string = 'Kentaro';

name = 'Ken';

let nickname = 'Ken' as const;
nickname = 'Ken';

let profile = {
  name: 'Ken',
  height: 177,
} as const;

profile.name = 'kenchan';
profile.height = 180;
