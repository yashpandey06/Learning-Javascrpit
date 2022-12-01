//  Call back functions is the function which is passed as an argument,
// which is called back as  the result.


sum(2,8,Change);


function sum(x,y,Change){
res=x+y;
Change(res);
}

function Change(res){
    document.getElementById("h").innerHTML=res;
    document.getElementById("h").style.color="blue"
}