// question 1

let newbtn=document.createElement("button");

newbtn.innerText="click me";

newbtn.style.backgroundColor="red";
newbtn.style.color="white";

let body=document.querySelector("body");

body.prepend(newbtn);

// question 2

let para=document.querySelector("p");

console.log(para.getAttribute("class"));

// para.setAttribute("class","newClass");


console.log(para.classList);
para.classList.add("newClass");

para.classList.add("boxpadding");