
//  arrays.map() -->
//  creates the array after performing function using call back techniques.

//  program to find square of each number of an array  and diplay using the call back function.

//  (item,index,array);

let n=[1,2,3,4,5,6,7,8,9];
let sq=n.map(square);
console.log(sq);

sq.forEach(print);

function square(item,index,n){
    return Math.pow(item,2);
}
function print(item){
    console.log(item);
}
