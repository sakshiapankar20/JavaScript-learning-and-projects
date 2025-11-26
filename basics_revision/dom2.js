let para=document.querySelector(".para");




console.log(para.setAttribute("class","paragraph"));

let classVal=para.getAttribute("class");
console.log(classVal);
// console.log(classVal);


let div=document.getElementById("box");

div.setAttribute("name","JSDiv");

div.style.backgroundColor="red";

div.style.fontSize="20px";

// div.style.visibility="hidden";

console.log(div);


let  newBtn=document.createElement("button");

newBtn.innerText="Click Me!";

console.log(newBtn);

div.append(newBtn);
div.prepend(newBtn);

div.before(newBtn);
div.after(newBtn);


let newheading=document.createElement("h1");
newheading.innerText="this is my created heading";


div.before(newheading);

let list=document.querySelector("ul");

// list.remove();
