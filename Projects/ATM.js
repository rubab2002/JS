// function ubl(intBalance) {
//   return {
//     checkBalance() {
//       console.log(intBalance);
//     },
//     withdraw(amount) {
//       intBalance = intBalance - amount;
//       console.log(
//         `You withdraw ${amount} and remiaing balance is ${intBalance}`,
//       );
//     },
//     deposit(amount) {
//       intBalance = intBalance + amount;
//       console.log(`You deposit ${amount} and total balance is ${intBalance}`);
//     },
//   };
// }
// let neha = ubl(10000);
// neha.checkBalance();










// function ubl(intBalance){
//     return{
//         intBalance(){
//             console.log(intBalance);
//         }
//         withdraw(amount){
//             intBalance = intBalance - amount
//             console.log(`you withdraw ${amount} and remaining balance is ${amount}`);
//         }
//         deposit(amount){
//             intBalance = intBalance + amount
//             console.log(`you deposite ${amount} and total balnce is ${amount}`);
//         }

//     }
// }
// let Rubab = ubl(20000)
// Rubab .checkbalance 















// function ubl(checkBalance){
//     return{
//        intBalance(){
//         console.log(this.intBalance);
//        }
//        withdraw(amount){
//         intBalance = this.intBalance - amount
//         console.log(`you withdraw ${amount} and remaining balance is ${amount}`);
//        }
//        deposit(amount){
//         this.intBalance = intBalance + amount
//         console.log(`you deposit ${amount} and total balnce is ${amount}`);
//        }
//     }
// }
// let Rubab = ubl(1000)
// Rubab.checkBalance



// function makeCounter(){
//     let count = 0
//     return function(){
//         count++
//         console.log(count);
//     }
// }
// let count = makeCounter()
// count()
// count()
// count()
// count()


// function greet(username){
//     let message = `Hello ${username}`
//     return function(){
//       console.log(message);
//     }
// }
// let res = greet('tamseela')
// let res1 = greet('Rubab')
// let res2 = greet('Minahil')
// res()
// res1()
// res2()


// function mutli(num){
//   return function(multiplier){
//     console.log(num*multiplier);
//   }
// }

// let double = mutli(3)
// let triple = mutli(3)
// double(5)
// triple(10)

// function mutli(num){
//   return function(multiplier){
//     console.log(num*multiplier);
//   }
// }
// let sinlge = mutli(4)
// sinlge(8)

function createMultiplier(num){
  return function(multiplier){
    console.log(num*multiplier);
  }
}
let res = createMultiplier(5)
let res2 = createMultiplier(9)
let res3 = createMultiplier(5)
res(7)
res(7)
res(4)
