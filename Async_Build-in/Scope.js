//Global

// let a = 10;

// // Functional Scope
// function add() {
//   let a = 20;
//   console.log(a);
// }

// // Block Scoped
// if (a) {
//   let b = 30;
//   console.log(b);
// }

// console.log(a);
// let a = 10;
// function abcd() {
//   console.log(a);
// }
// function bbc() {
//   let a = 13;
//   abcd(); // JS output: 10, not 13
// }
// bbc();

// global use
console.log(this);

function thisis(){
    console.log(this);
}
thisis()

let mySelf ={
    name:"Mustansar",
    fn:function(){
        console.log(this.name);
    }
}
mySelf.fn()