//  spread operator gives you dircet access to the contents of the iterable objects
//  represented by "...val"
// its kinda unpack sthe elements, taking out one by one.

let num=[1,2,3,4,5,6,7,8,9];

console.log(Math.min(...num));


//  rest parameter.
// case of using varibale arguments in the functions.

let a=8;
let b=8;
let c=8;
let d=8;
let e=8;

console.log(sum(a,b,c,d,));
function sum(...nums){
// console.log(nums)
// here nums is the list of all variable arguments passsed
 let total=0;
for(let num of nums){
     total+=num;
}
console.log(total);
}

// function sum(x,y,...nums)