//  setInterval ()-->invokes the function after certain intervals.
// doesnt pause the execution of the program.

//  making self counter of seconds.

setInterval(counter,1000);
let count=0;
function counter(){
count+=1;
document.getElementById("time").innerHTML=count;
}
