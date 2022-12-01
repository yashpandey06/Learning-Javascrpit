// //  arrays in js
// let fr=["a","b"];
// console.log(fr);
// // using the push method to insert the elemnt inside array.
// fr.push("y")

// console.log(fr);
// // remove the last element using the pop function.
// fr.pop();
// console.log(fr);
// // we can add at the beginning of the list or the array using unshift method.
// fr.unshift("w");
// console.log(fr);
// fr.shift();
// console.log(fr);

// let f=[1,2,3,4,5,6,7];
// for(let nums of f){
//     console.log(nums);
// }

//  sorting the list in js.

let f=[7,6,5,4,3,2,1];
f.sort().reverse();
for(let n of f){
    console.log(n);
} 
l=["k","j"];
m=["h","d"]
o=[l,m];
for(let items of o){
    console.log(items);
    for(let b of items){
        console.log(b);
    }
}