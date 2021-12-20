//Optional Chaining, known to babel users, is now supported natively by Javascript

const user = {
  "name": "Aryclenio Barros",
  "age": 22,
  "alive": true,
  "address": {
    "street": "Hyrule street",
    "number": 24,
  }
}
// Without optional chaining
const number = user.address && user.address.number
console.log(number)
// With optional chaining
const numberWithChain = user.address?.number
console.log(numberWithChain)