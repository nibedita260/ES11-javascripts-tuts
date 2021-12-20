//Nullish coalescing operator (??) is a new JS operator allowing basically to provide a "default value" when the accessed one is either null or undefined.
const basicValue = "test";
const nullishValue = null;
const firstExample = basicValue ?? "example"; // "test"
const secondExample = nullishValue ?? "example"; // "example"

console.log(firstExample)
console.log(secondExample)