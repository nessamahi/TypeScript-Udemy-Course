function add(n1: number, n2: number) {
  return n1 + n2;
}

function show(num: number): undefined {
  console.log("Result is : " + num);
  return;
}

// giving callback function void return type, we are saying this function will ignore anything that will be returned by the callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = 0;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response1) => {
  console.log(response1);
  return true;
});

show(add(1, 2));

//function as a type
// let combineValue: Function;
//Function type value that accepts any function which has 2 parameters with number type and return type is number
let combineValue: (a: number, b: number) => number;
combineValue = add;
console.log(combineValue(8, 8));
