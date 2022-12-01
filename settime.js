//  set Timeout() method is used to invoke the function after the number of milliseconds.

const l=setTimeout(greet,3000);

function greet(){
    document.getElementById("Greet").innerHTML="Welcome to my page !!"
}

document.querySelector("button").addEventListener("click",function(){
    clearTimeout(l);
    // cancel the stored timer  if clicked within the time.
})