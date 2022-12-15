//  Map in js is used to store the key value pair of any datatype.

let shopping_store=new Map([
    ["jeans",20 +`$`],["shirt",10 +`$`],["socks",30 +`$`]
    // key,value
]);
shopping_store.set("hat",50+`$`);
shopping_store.forEach(print);
// you have to pass like value,key
function print(item1,item2){
console.log(item2,item1);
}