// aync code is inordered , fetching a file , or the tasks which can take time.
//  sync code is ordered

// 1 sync code example.
console.log("hello");
console.log("start");
console.log("end");

// 2 async code
console.time("res");
console.log("start of the async code");
setTimeout(function(){console.log("i am printed after some time.")},5000)
console.log("end of the async code");
console.timeEnd("res");

// under
