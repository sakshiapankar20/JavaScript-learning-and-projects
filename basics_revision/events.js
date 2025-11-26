// const { createElement } = require("react");

let btn=document.createElement("button");
btn.innerText="click me";

btn.style.backgroundColor="blue";
btn.style.color="white";
btn.style.padding="20px";
btn.style.borderRadius="10px";

document.body.append(btn);


// btn.onclick= (e) => {
    

//     document.body.style.backgroundColor="orange";
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX, e.clientY);
    
// }

const bgChange=(e)=>{
    document.body.style.backgroundColor="orange";
     console.log(e.target);
    console.log(e.type);
};

const addPara=(e)=>{
    let para=document.createElement("p");
    para.innerText="hello this is sakshi apankar";
    document.body.prepend(para);
}
btn.addEventListener("click",bgChange);
btn.addEventListener("click",addPara);

btn.removeEventListener("click",addPara);
