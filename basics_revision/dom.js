let heading=document.getElementsByClassName("heading");

console.log(heading[0].innerText);
console.log(heading[1].innerHTML);

console.log(heading[0]);

let para=document.getElementsByTagName("p");

console.log(para[0].innerText);
console.log(para);


let btn=document.getElementById("btn");
console.log(btn.innerHTML="login");



console.log(btn.tagName);

console.log(heading[0].tagName);

let paragraph=document.querySelector("p");
paragraph.innerText="hello i'm sakshi apankar";


let headings=document.querySelectorAll(".heading");
headings[0].innerText="DOM manipulation"




function changeColor(){
    document.body.style.backgroundColor="lightblue";

}
