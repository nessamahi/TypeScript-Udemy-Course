//Anon function as an interface, you can name it anything
interface AddFn {
  (a: number, b: number): number;
}
// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

interface Greetable {
  name: string;
  output?: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 26;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1 = new Person("Nessa");

user1.greet("Hello");
