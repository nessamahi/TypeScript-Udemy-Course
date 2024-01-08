// let userInput: unknown;
// let user: string;

// userInput = 5;
// userInput = "A";
// if (typeof userInput === "string") {
//   user = userInput;
// }

// //this function never produces a value, crashes the script
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }

// generateError("An error occurred!", 500);

//arrow function
// const add = (a: number, b: number = 1) => {
//   return a + b;
// };

// const show: (a: number | string) => void = (output) => console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// // console.log(add(5));

// //Spread operator
// const hobbies = ["reading", "cooking"];
// const active = ["boxing"];

// active.push(...hobbies);
// console.log(active);

// const person = {
//   fullname: "nessa",
//   age: 26,
// };

// const copy = { ...person };

// const addNumbers = (...numbers: number[]) => {
//   return numbers.reduce((currResult, currValue) => {
//     return currResult + currValue;
//   });
// };

// const result = addNumbers(2, 3, 4, 67);
// console.log(result);

// //array destructuring
// const [hobby1, hobby2, ...remainingArray] = hobbies;
// console.log(hobby1, hobby2, hobbies);

// //object destructuring
// const { fullname: username, age } = person;
// console.log(username, age);

class Department {
  // name: string;
  protected employee: string[] = [];

  //sets the value of the name field to the value you're getting on n when a department object is created
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    // console.log("Department :", this.name);
    console.log(`Department (${this.id}):${this.name}`);
  }

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  printInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); //invokes base class constructor, then sets the data for the id
  }
}

class CSEDepartment extends Department {
  private lastReport: string;
  private static instance: CSEDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a value");
    }
    this.addReports(value);
  }

  private constructor(id: string, private report: string[]) {
    super(id, "CSEDept");
    this.lastReport = report[0];
  }

  static getInstance() {
    if (CSEDepartment.instance) {
      return this.instance;
    }
    this.instance = new CSEDepartment("d2", []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employee.push(name);
  }

  addReports(text: string) {
    this.report.push(text);
  }

  printReport() {
    console.log(this.report);
  }
}

//passing CSE as the argument of the constructor; there we're accepting such string, storing the value in the this.name field
const subject = new Department("1", "CSE");
const it = new ITDepartment("1", ["CSE"]);
// const depart = new CSEDepartment("1", ["went wrong!"]);
// depart.mostRecentReport = "what went wrong?";
// depart.addReports("something went wrong");
// // console.log(depart.mostRecentReport);
// depart.addEmployee("Maxi");
// depart.printReport();
// // console.log(depart.mostRecentReport);
// console.log(depart);
// console.log(subject);
// subject.describe();

// subject.addEmployee("Max");
// subject.addEmployee("Anna");
// subject.printInformation();
