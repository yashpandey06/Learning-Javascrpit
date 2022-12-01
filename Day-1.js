// Hyptenuse formula calculation

let h=document.getElementById("y").value;
let b=document.getElementById("z").value;
document.querySelector(".click").addEventListener("click",function(){
    let c=Math.sqrt(Math.pow(h,2)+Math.pow(b,2));
   
    document.querySelector(".three").innerHTML="Side c:" + c;
})