
// for each method--> 
// execute the provided call back once for each array element.

let arr=["yash","ayush","sid"];

arr.forEach(capitalise);

// capitalise is the callback function.

arr.forEach(print);
//  print each item using call back function.

function capitalise(item,index,arr){
arr[index]=item[0].toUpperCase()+item.substring(1);

}

function print(item){
console.log(item);
}
