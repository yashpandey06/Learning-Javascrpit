
let b={};
//  a is the object
let a={
    "yash":"web dev",
    "ayush":"app dev",
    "vaibhav":"block dev"
       }
    let key="kaka"
    a[key]="react_js";
    // a new value pair can be added like this.
// console.log(a);
// <----------------------------------------question-------------------------------------------->
delete a.kaka;
// console.log(a);
if(isEmpty(a)==false){
    // console.log("fill");
}
else{
    // console.log("empty");
}
function isEmpty(obj){
    for(let key in obj){
        return false; 
    }
    return true;
}
// <----------------------------------------question-------------------------------------------->
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

// console.log(sum(salaries));
function sum(obj){
    let sum=0;
    for (let key in obj){
        sum+=obj[key];
    }
    return sum;
}
//<----------------------------------------question-------------------------------------------->

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
multiply(menu);
// console.table(menu);
// used table for arranging the key value pairs in the table.
function multiply(obj){
    for(let key in obj){
        if(typeof obj[key]=='number'){
            obj[key]*=2;
        }
    }
}
//<----------------------------------------question-------------------------------------------->
// Arrays.prototype.map();
//  using the constructor.


  function Food(width,height,title){
    this.width=width;
    this.height=height;
    this.title=title;
    this.greet=function(){
        // console.log("hello");
    }

  }

  const l=new Food(23,22,"hello");
//   object.
//   console.log(l.width);
//   console.log(l.height);
//   using the constructors.
l.greet();

//<----------------------------------------question-------------------------------------------->

function info(title,author,pages,cond){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.cond=cond;
    this.check= function(){
        if(this.cond){
            console.log("Read");
        }
        else{
            console.log("Not Read")
        }
    }
}
const book=new info("hell","yash",206,true);
// book.check();
// console.log(book.title);
// console.log(book.author);
// console.log(book.pages);

//<----------------------------------------question-------------------------------------------->
// what are prototypes in js.(Later--on);
// prtotypes are the shareable objects ,its saves alots of memory. Can be accessed by any number of instances.

function Apple(type,price){
    this.type=type;
    this.price=price;
}
// Apple is the blue-print.--having the general properties.

const apple1=new Apple("Russian",330);
const apple2=new Apple("American",456);
// Sysntaxof making the prototype objects.

Apple.prototype.welcome=function(){
    console.log("welcome to the store");
}
Apple.prototype.Leave=function(){
    console.log("Bye..bye");
}
apple1.welcome();
console.log(apple1.type);
console.log(apple1.price);
apple1.Leave();
apple1.welcome();
console.log(apple2.type);
console.log(apple2.price);
apple1.Leave();

// object.create.



 







































