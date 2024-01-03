let userInput: unknown;
let user: string;

userInput = 5;
userInput = "A";
if (typeof userInput === "string") {
  user = userInput;
}

//this function never produces a value, crashes the script
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
