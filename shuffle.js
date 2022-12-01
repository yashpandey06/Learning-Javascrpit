let n=["A","B","C","D","E"];
shuffle(n);
 
function shuffle(n){
let curr=n.length;

while(curr!=0){
let random=Math.floor(Math.random()*n.length);

    curr--;
    // swap logic;

    let t=n[random];
    n[random]=n[curr];
    n[curr]=t;
}
console.log(n);
}
