function gettodo( callback){
    const r=new XMLHttpRequest();
r.open('GET','https://jsonplaceholder.typicode.com/todos/');
r.send();
r.addEventListener('readystatechange',function(){
    // console.log("request form server is made.");
    // console.log(r.readyState,r);
    if(r.readyState===4 && r.status===200){
        const data=JSON.parse(r.responseText);
        console.log(data);
        console.log(r.responseText);
        console.log(r);
        console.log(r.status);
    }
    else{
        callback('could not fetch data',undefined);
    }
})

}
gettodo(function(err,data){
if(err){
    console.log();
}
else{
    console.log();
}
})
// understand the logic of the call back function.

// try to make your own json file .