let isDark=false;

function changeMode(){
    if(isDark==false){
        document.body.style.backgroundColor="#010B13";
        document.body.style.color="white";
        document.getElementById("heading").innerHTML="Dark Mode";
        isDark=true;
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        document.getElementById("heading").innerHTML="Light Mode";
        isDark=false;
    }
}