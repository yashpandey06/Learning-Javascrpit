//  to avoid call back hell we use promises.
const get=()=>{
    return new Promise((resolve,reject)=>{
        // fetch something.
        // resolve('something')
        reject('error is found')
    });
};
// get().then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err);
// });


//  or we can use then and catch methods
get().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

// -----------------------------------------------------------------------------------------------------

// chaining Promises.
// q-1-->create three json files and print error and data of three using promises.
