// Create a function named as login that will have thre private variables named 
// count = 0  ,useEmail = "admin@gmail.com",userPassword=12345

// return a funtion which have 2 params (email,password) inside that function use conditions to check if 
// given email and password matched given email,password if not 
// increemnt that count by one and also check if count reaches to 5 no
//  more login accepts, and give error on conlose

function login(){
    let count = 0;
    let useEmail ="admin@gmail.com"
    let userPassword = 12345
    return function(email , password){
        if(count >= 5){
            console.log("no more login accept");
            return
        }if(Email === useEmail , password === userPassword){
            console.log('Login Successfull');
        }else{
            count++
            console.log('wrong Email or password');
            console.log("Attempt" , count);

            if(count === 5){
                console.log("Account locked after 5 attempts");
            }
        }
    }
}











function login(){
    let count = 0;
    let useEmail = "admin@gmail.com"
    let userPassword = 12345
    return function(email , password){
        if(count >=5 ){
            console.log('no more login accept');
            return
        }if(email === useEmail , password === userPassword){
            console.log('login Successful');
        }else{
            count ++
            console.log('wrong Email or password')
            console.log("Attempt" , count);

            if (count === 5){
                console.log("Account Locked after 5 failed attempts");
            }
        }
    }
}