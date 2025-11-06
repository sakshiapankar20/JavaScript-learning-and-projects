for(let i=0; i<5; i++){
    console.log("sakshi you are best and you can do it");
    
}


let fruits=["mango","banana","apple"];
let str1="sakshi apankar";


for(let i of str1){
    console.log(i);
    
}

for(let i of fruits){
    console.log(i);
    
}

for(let i in fruits){
    console.log(fruits[i]);
    
}


let profile={
    name:"sakshi",
    age:20
};


let str2="    java  script   ";

console.log(str2.length);

console.log(str2[0]);

// string methods

console.log(str2.toUpperCase());
console.log(str2);
console.log(str2.trim());
let name="SakshiApankar";
console.log(name.slice(0,6));

console.log(name.concat(" hello!"));



let heroes=["ironman","thor","spiderman","loki"];

for(let hero of heroes){

    hero[0].toUpperCase()
    console.log(hero);
    
}

for(let i=0; i<heroes.length; i++){
    heroes[i]=heroes[i][0].toUpperCase()+heroes[i].slice(1);
    console.log(heroes[i]);
}


let exp="hello everyone sakshi here";

exp=exp.split(" ");
console.log(exp);

let sen="";

for(let i=0; i<exp.length; i++)
{
    exp[i]=exp[i][0].toUpperCase()+exp[i].slice(1);
    sen+=exp[i]+" ";
}
console.log(exp);
sen=sen.trim();

console.log(sen);


let arr=[85,97,44,37,76,60];

let avg=0;
let sum=0;

for(let i of arr){

    sum+=i;
   
}

//  console.log(sum);
// avg=sum/arr.length;
// console.log(avg);


let prices=[250,65,300,900,50];



for(let i of prices){
    i-=i*(10/100);
    console.log(i);
}

//here original array 


let ele=[250,65,300,900,50];
ele.push(2);
console.log(ele);
ele.pop();
console.log(ele);

ele.toString();
console.log(ele);
console.log(ele.toString());