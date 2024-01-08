// const person = {
//   name: "abc",
//   age: 20,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "abc",
//   age: 20,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

//push is an exception and TS can't catch this error. Even though we declared that the tuple is length 2, by using push, we make it a length 3 tuple.
// person.role.push("admin");
// // person.role[1] = 10;
// console.log(person);

// let favoriteActivities: (string | number)[]; //this is called union type
// let favoriteActivities1: any[];
// favoriteActivities = ["abc", 0];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// const ADMIN = 0;
// const READONLY = 1;
// const RW = 2;

enum Role {
  ADMIN = 5,
  READONLY,
  RW,
}

const person = {
  name: "abc",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
