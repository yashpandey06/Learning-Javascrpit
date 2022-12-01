//arrays.filter creates the new array if the condition returned from the call back function satifies.

let n=[1,2,3,4,5];

let s=n.filter(check);


s.forEach(print);

function check(item,index,n){
return item>2;
}
function print(item){
console.log(item);
}