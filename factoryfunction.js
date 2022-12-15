//  factory function creates the object. and return the object. we dont use new keyword.

//  very general function, which shortens the code.

function createCircle(radius){
    return {
        radius:radius,
        draw(){
            // console.log("drawn");
            console.log(radius);
        }
    }

}
const c1=createCircle(2);
const c2=createCircle(5);
console.log(c1);
console.log(c2);

// turning the varibales into objects.
const v="Yash"; 
const q="yy"; 
const e="ash"; 
console.log({v,q,e});

// scope and closure.
//  window object which has the root scope. All the global variables,functions,methods become part of window
// object.

var a=2;
// parent scope
function change(){
    // child scope.
   var a=3;
   console.log(a);

}
change();

//  var variables are function scope.
// let and const are blocked scope. scoped to the closest set of curly braces.
// closures are functions inside functions .

