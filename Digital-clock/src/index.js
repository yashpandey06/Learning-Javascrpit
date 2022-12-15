let h=document.getElementById("hours");
let m=document.getElementById("minutes");
let s=document.getElementById("secs");
setInterval(update,1000);
update();
 function update(){
    //  we need to create the date object before updating
    let date=new Date();
    formate();
    function formate(){
        let hr=date.getHours();
        let mi=date.getMinutes();
        let secs=date.getSeconds();
        h.innerHTML=hr;
        m.innerHTML=mi;
        s.innerHTML=secs;
    }
    
 }