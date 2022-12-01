var count=0;
document.querySelector("#decreasebut").onclick=function(){
    count-=1;
    document.getElementById("counter").textContent=count;
}
document.querySelector("#increase").onclick=function(){
    count+=1;
    document.getElementById("counter").textContent=count;
}

document.querySelector("#reset").onclick=function(){
    count=0;
    document.getElementById("counter").textContent=count;
}

// switch(true){
// case condition1:
//     break;
// case condition2:
//     break;

// case condition3:
//     break;
// default:
//     break;


// }