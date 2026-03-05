// apka fn ya to koi fun return kry ya apny parameter main aik fn accept kry to aisy fn HOF(Higher Order FN) kehlaty hain

// function add(fn){
// return function(){

// }
// }

// add(function(){

// })

// function outer(x) {
//   return function (y) {
//     console.log(x * y);
//   };
// }

// let res = outer(5);
// let res1 = outer(5);
// res(10);
// res1(5);

// function outer() {
//   let a = 10;
//   return function () {
//     console.log(a);
//   };
// }
// let newFn = outer();
// newFn();

function outer(){
    let a = 10
    return function(){
        console.log(a);
    }
}
let newFn = outer()
newFn()