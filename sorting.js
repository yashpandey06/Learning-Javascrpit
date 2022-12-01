let grades=[1,2,3,4,5,6,7,8,9];
// using call back;

let sw=grades.sort(descendingSort)
// descendingSort(grades);

sw.forEach(print);
// console.log(sw);

// function descendingSort(grades){
// grades.reverse();
// }
// console.log(grades);

function descendingSort(x,y){
return y-x;
// console.log(x);
// console.log(y);
}

function ascendingSort(x,y){
    return x-y;
}
function print(item){
// console.log(item);
}