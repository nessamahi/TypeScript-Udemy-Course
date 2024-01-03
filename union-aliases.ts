type Combine = number | string;
type Descriptor = "as-number" | "as-string";

function combine(n1: Combine, n2: Combine, resultCoversion: Descriptor) {
  let result;
  //if-else is the extra runtime check for union types, but won't be required always
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultCoversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinedAges = combine(30, 25, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "25", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-string");
console.log(combinedNames);
