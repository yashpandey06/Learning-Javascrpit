function FetchTheData(check){
    //  Fetch the data from yash.json file and use it to display on console.

const req=new XMLHttpRequest();
req.open('GET','yash.json');
req.send();
//  addEventListener to check status of your request.
req.addEventListener("readystatechange",function(){
    if(req.status===200){
    console.log(req.status);
    console.log(req.responseText);
    check();
    }

})
}
FetchTheData(function(){
    // console.log(req.status===2);
    console.log("callback fired")
})