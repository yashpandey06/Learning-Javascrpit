
let count=0;

document.getElementById("increase").addEventListener("click",inc);
document.getElementById("decrease").addEventListener("click",dec);
document.getElementById("reset").addEventListener("click",res);

function inc(){
    count++;
  document.getElementById("counter").innerHTML=count;
}
function dec(){
    count--;
    document.getElementById("counter").innerHTML=count;
}
function res(){
count=0; 
document.getElementById("counter").innerHTML=count;
}