let btn=document.getElementById("btn");
let isDark=false;

const darkMode=()=>{
    
        document.body.style.backgroundColor="black";
        isDark=true;
    
    

}

const lightMode=()=>{
    
         document.body.style.backgroundColor="white";
         isDark=false;
   
}



btn.addEventListener("click",()=>{
     if(isDark===false){
        darkMode();
    }
    else{
        lightMode();
    }
}
   
);


// let currMode="white";

// const changeMode=()=>{
//     if(currMode==="white"){
//         currMode="black";
//         document.querySelector("body").style.backgroundColor="black";
        
//     }
//     else{
//         currMode="white";
//         document.querySelector("body").style.backgroundColor="white";
        
//     }
// }

// btn.addEventListener("click",changeMode);