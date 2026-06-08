// let js = "amazing";

// console.log(40 + 8 + 23 - 10);

// console.log("Pranith");

// let firstName = "Reddy";
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Coder";
// let myCurrentJob = "Programmer";

// console.log(myFirstJob);

// console.log(typeof null);

// const firstName = "Pranith";
// const job = "Programmer";
// const birthYear = 2000;
// const year = 2024;

// const pranith =
//   "I'm" +
//   firstName +
//   " a " +
//   job +
//   " born in " +
//   birthYear +
//   " today is " +
//   year;
// console.log(pranith);

// const pranithNew = ` I'm ${firstName} a ${year - birthYear} old ${job}!`;

// console.log(pranithNew);

// console.log(
//   "this is \n\
//     string with \n\
//     multiple lines",
// );

// console.log(
//   `this is
//     string with
//     multiple lines`,
// );

// const age = 15;

// if (age >= 18) {
//   console.log("sarah is of age and can go to apply license 🚗");
// } else {
//   const years = 18 - age;

//   console.log(`sarah is still ${years} years young :) `);
// }

// const birth = 2004;

// let century;
// if (birth <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//type conversion and coersion

let a = "Pranith";
console.log(Number(a)); //return Nan

// console.log(typeof NaN); // returns number

let b = 11;
console.log(typeof b);

console.log(String(b), b);
console.log(typeof b); //return number even when converted only the scope is in the console.log in prev command not in the whole val;

const val = "11" + 1;

const ans = val - 1;

console.log(val, ans);
console.log(typeof val, typeof ans);

// until - we get the number as the type if we use (+) we get it as format of string

console.log("11" - "4" - "3" - 3 + "5");
