console.log("hey hello again after a lot of days");

console.log("yes i think i love javascrit than other coding languages");

const heading = (document.getElementById("heading").innerHTML =
  "Sakshi Apanakr|Software Engineer");

name = "Sakshi";
let age = 23;
const follower = BigInt("335");
console.log(follower);
const img = Symbol("img");
console.log(img);
const num1 = null;
console.log(num1);
const num2 = undefined;
console.log(num2);
console.log(name);
console.log(age);

const profile = {
  username: "@shradhakhapra",
  isFollow: true,
  posts: 195,
  followers: 5690000,
  following: 4,
  description: "entrepreneur",
};

console.log(profile);

console.log(typeof profile["description"]);

let a = 123;
let b = "123";
console.log(a == b);
console.log(a === b);
console.log(a === 123);

3 > 2 ? console.log("3 is greater") : console.log("3 is lesser");

let expr = "ORANGE";
switch (expr.toLowerCase()) {
  case "mango":
    console.log("mango are for rs 120");
    break;

  case "orange":
    console.log("oranges are for 70 rs");
    break;

  default:
    console.log(`sry we are out of stock of ${expr}`);
}

// let userInput =parseInt(prompt("enter a number: ")) ;



// console.log(typeof (userInput));


// if (userInput % 5 == 0) {
//   console.log(`${userInput} is a multiple of 5`);
// }
// else{
//     console.log(`${userInput} is not a multiple of 5`); //string interpolatin
    
// }


let score=parseInt(prompt("enter your score: "));
let grade;

if(score>=90 && score<=100){
    grade="A";
    
}
else if(score>=70 && score<=89){
    grade="B";
}
else if(score>=60 && score<=69){
    grade="C";
}
else if(score>=50 && score<=59){
    grade="D";
}
else if(score>=0 && score<=49){
    grade="F";
}
else{
    grade="Invalid score";
}

console.log("Grade: ",grade);