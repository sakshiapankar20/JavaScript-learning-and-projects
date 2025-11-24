function changeBackground(){
   document.body.style.backgroundColor = "white";

   document.body.childNodes[5].style.color="maroon";
   
 let topics = document.querySelectorAll(".topic");

topics.forEach((topic)=>{
   topic.style.backgroundColor="pink";
})


}


let heading=document.getElementById("heading");
console.log(heading);