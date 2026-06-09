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

//type conversion --> is the process of hard coding the value to Number(x) or String(x)

//type coersion --> is the process where + is added as operation the value become string if - is added then it becomes number

// let a = "Pranith";
// console.log(Number(a)); //return Nan

// // console.log(typeof NaN); // returns number

// let b = 11;
// console.log(typeof b);

// console.log(String(b), b);
// console.log(typeof b); //return number even when converted only the scope is in the console.log in prev command not in the whole val;

// const val = "11" + 1;

// const ans = val - 1;

// console.log(val, ans);
// console.log(typeof val, typeof ans);

// // until - we get the number as the type if we use (+) we get it as format of string

// console.log("11" - "4" - "3" - 3 + "5");

//truthy and falsy values

// the falsy values are :    undefined , NaN , 0 , '' , null

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(""));

// //now check for anything other than that it becomes true

// console.log(Boolean("Pranith"));
// console.log(Boolean(3));

//comapring between == and ===

// const age = 18;
// if (age === 18) {
//   console.log(
//     " strict equality operator both are numbers and check for the type if same only then true",
//   );
// } else {
//   console.log(
//     " either the number is not equal or the value might not be number",
//   );
// }

// const myAge = 18;
// if (myAge == 18) {
//   console.log(
//     " loose equality operator both are numbers only check the value not the type",
//   );
// } else {
//   console.log(" only the number is not equal then false");
// }

// const gage = 19;
// if (gage === 18) {
//   console.log(" strict equality operator both are numbers and same type");
// } else {
//   console.log(
//     " either the number is not equal or the value might not be number",
//   );
// }

// const sage = 19;
// if (sage == 18) {
//   console.log(" loose equality operator both are numbers");
// } else {
//   console.log(" only the number is not equal ");
// }

// const hasDriverLicense = false;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(!hasDriverLicense);
// console.log(hasDriverLicense || hasGoodVision);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("I should drive");
// } else {
//   console.log("someone should drive");
// // }
// if(day === 'monday'){
//     console.log("today is monday");
// }

const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("today is monday");
    break;
  case "tuesday":
    console.log("today is tuesday");
    break;
  case "wednesday":
    console.log("today is wednesday");
    break;
  case "thursday":
    console.log("today is thursday");
    break;
  case "friday":
    console.log("today is friday");
    break;
  case "saturday":
    console.log("today is saturday");
    break;
  case "sunday":
    console.log("today is weekend");
    break;
  default:
    console.log("Invalid day");
}
