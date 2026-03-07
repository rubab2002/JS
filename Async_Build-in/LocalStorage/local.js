// Local Storage

// 0 -15 MB
let userObj = {
  name: "Rubab",
  age: 19,
  skills: ["Web", "video", "communication"],
};
// localStorage.setItem("User", JSON.stringify(userObj));

localStorage.removeItem("item_name") // for single item

localStorage.clear() // for all localStorage data

let data = localStorage.getItem("User");
console.log(data);

// let data2 = sessionStorage.setItem("Login", "Mustansar");


// Simple cookie set karna (Session cookie - browser band hone par delete ho jayegi)
document.cookie = "username=Ali";

// Expiry date ke sath cookie set karna (e.g., 7 din ke liye)
let date = new Date();
date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days in milliseconds
let expires = "expires=" + date.toUTCString();

// path=/ ka matlab hai ke cookie puri website par available hogi
document.cookie = "username=Ali; " + expires;