export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'ken', underTwenty: false };

// How to write index signatures
// { [ index: tyoeForIndex ]: typeForValue }
profile.name = 'ken';
profile.age = 27;
profile.nationality = 'Japan';
