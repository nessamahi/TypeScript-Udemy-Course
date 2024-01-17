type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Nessa",
  priviledges: ["admin", "fulltime"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  //type guard, we can't use our own created type for the type guard check
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmp = Employee & Admin;

function printEmployeeIntersection(emp: UnknownEmp) {
  console.log("Name: ", emp.name);
  console.log("Priviledges: ", emp.priviledges);
  console.log("Start date", emp.startDate);
}

type UnknownEmployee = Employee | Admin;

function printEmployeeUnion(emp: UnknownEmployee) {
  console.log("Name: ", emp.name);

  //type guard
  if ("priviledges" in emp) {
    console.log("Priviledges: ", emp.priviledges);
  }

  //type guard
  if ("startDate" in emp) {
    console.log("Start date", emp.startDate);
  }
}

printEmployeeIntersection(e1);
printEmployeeUnion(e1);

// Example 1 of type cast
// const userInput = <HTMLInputElement> document.getElementById("user-input")!;

// //one error is for being the object possibly null (adding ! takes care of it)
// userInput.value = "Hi there!"

// Example 2
const userInput = document.getElementById("user-input")! as HTMLInputElement;
userInput.value = "Hi there!";

interface ErrorContainer {
  //don't know the exact propert name, the exact property count
  //every propery that will be added to this object, which is based on ErrorContainer; must have a property name which can be interpreted as a string and the value of the property has to be string as well
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
};
