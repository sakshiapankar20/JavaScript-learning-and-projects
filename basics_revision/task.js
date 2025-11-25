let heading=document.querySelector("h2");

heading.innerText=heading.textContent + " from apna College students";


let divtxt=document.querySelectorAll(".box");

// divtxt[0].innerText="hello I'm Sakshi Apankar";
// divtxt[1].innerText="I'm a software developer";

// divtxt[2].innerText="I'm learning java and webdevlopment"

let index=1;
for(let div of divtxt){
    div.innerText=`this is new div ${index}`;

    index++;
}
