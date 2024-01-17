//generic type : following both indicates the same thing

// const names: Array<string> = ["nessa"];
// // const names: string[] = ["nessa"];
// names[0].split(" ");

// //promise takes one argument, which is a function
// // that function gets 2 arguments

// // const promise = new Promise((resolve, reject) => {
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   //set a timer and resolved the promise inside the timer function
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function mergeObject<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = mergeObject({ name: "Nessa" }, { age: 26 });
console.log(mergeObj.age);

interface Lengthy {
  length: number;
}

function countDescription<T extends Lengthy>(element: T) {
  let description = "Got no value";

  if (element.length === 1) {
    description = "Got 1 element";
  } else if (element.length > 1) {
    description = "Got " + element.length + " element";
  }
  return [element, description];
}

const result = countDescription(["abcd efg hjk", "asdsd"]);
console.log(result);
