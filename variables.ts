// type annotations

// number and strings
const apples: number = 5;
const speed: String = "fast";

// null and undefined
let nothingness: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();
// type inference will come in when we type 'now.' as typesceript will give us methods that go wil the Date types

// Arrays
// array of strings
let colors: string[] = ["red", "green", "blue"];
// array of numbers
let ages: number[] = [20, 21, 22];
// array of booleans
let bools: boolean[] = [true, false, true];

// Objects
// object initiator
class Persons {}

const john: Persons = new Persons();
console.log(john);

// object literals
let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20,
};

// Annotation for a function
// a function is expected to take in a value and also return a value. When annotating a function in TS, those are our concern
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// type inference
// since declaration and initialization happened on same line, TS can easily infer the type of value myName will hold
let myName = "Jay";
// however in the case of below, TS will have no idea, thus will infer any type
let myCity;

// When to use annotations
// 1. When we have a function that returns the 'any' type; JSON.parse(), e.g returns an any type but if we want to place the type of value w are expecting, we annotate the variable holding the value it returns
const json = "{'x': 10, 'y': 5}";
const coordinate = JSON.parse(json); //coordinate is any
const myCoord: { x: number; y: number } = JSON.parse(json); // we annotate the result we are expecting now

// 2. When we declare a variable in one line and initialize later
let words = ["red", "green", "blue"];
let foundWord;
let seenWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
    seenWord = true;
  }
}

// 3. When we have a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
// let numberAboveZero = false
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  // TS won't guess correctly here because of declaration and initialization in 72 above, however, 73 is much better
  numberAboveZero = numbers[i];
}
