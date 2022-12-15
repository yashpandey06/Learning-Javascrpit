console.log("get and set");
let v={
    fullname:"yash",
    surname:"pandey",
    // return the fullname.
    get Fullname(){
        return `${v.fullname} ${v.surname}`;
    },
    set Fullname(value){

    }
}
console.log(v.Fullname);

