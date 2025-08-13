// explicit type annotation
let num: number = 1;
let str: string = "1";
let bool: boolean = true;
let u: undefined = undefined;
let n: null = null;

// array
let numberArra: number[] = [1, 2, 3, 4, 5];

// object

// anonymous, inline
let person: { name: string; age: number } = {
  name: "alice",
  age: 18,
};

// union type
type Age = string | number;

// literal type
type Direction = "north" | "south" | "east" | "west";

// type alias
type Person = { name: string; age: Age; direction: Direction };
type AnimalName = string;

let person2: Person = {
  name: "bob",
  age: "18",
  direction: "north",
};

// interface
interface IPerson {
  name: string;
  age: number;
}

enum Direction2 {
  North = "north",
  South = "south",
  East = "east",
  West = "west",
}

let direction: Direction2 = Direction2.North;
console.log(direction);

// inline
function add(x: number, y: number): number {
  // any - disabling typescript
  return x + y;
}

// unknown
function foo(data: unknown): void {
  if (typeof data === "number") data.toFixed(2);
  else if (typeof data === "function") {
    data();
  }
}

type AddFn = (x: number, y: number) => number;

const add2: AddFn = (x, y) => x + y;

const add3: typeof add2 = (x, y) => x + y;

/**
 *
 * type alias
 * for primitives
 * no declaration merging
 * extend (&)
 *
 * interface
 * for objects
 * declaration merging
 * extend(extends keyword)
 *
 */

interface IPerson {
  contact: string;
}

type Student = Person & {
  studentId: number;
};

interface IStudent extends IPerson {
  studentId: number;
}

// generic type
function toNumberArray(x: number, y: number): number[] {
  return [x, y];
}

function toStringArray(x: string, y: string): string[] {
  return [x, y];
}

function toArray<T>(x: T, y: T): T[] {
  return [x, y];
}

toArray<number>(1, 2);
toArray(true, false);

// tuple - an array with defined length and type of elements
let arr: [number, string, boolean] = [1, "2", true];

arr[0].valueOf();
arr[1].charAt(0);
