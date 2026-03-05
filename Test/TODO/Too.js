// Todo Data
let url = "https://jsonplaceholder.typicode.com/todos"
const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
};

// Select card div
const card = document.querySelector(".card");

// Clear existing static content (optional)
card.innerHTML = "";

// Create heading
const heading = document.createElement("h2");
heading.textContent = "Todo Item";
card.appendChild(heading);

// User ID
const userId = document.createElement("p");
userId.innerHTML = `<strong>User ID:</strong> ${todo.userId}`;
card.appendChild(userId);

// ID
const id = document.createElement("p");
id.innerHTML = `<strong>ID:</strong> ${todo.id}`;
card.appendChild(id);

// Title
const title = document.createElement("p");
title.innerHTML = `<strong>Title:</strong> ${todo.title}`;
card.appendChild(title);

// Completed
const completed = document.createElement("p");
completed.innerHTML = `<strong>Completed:</strong> ${todo.completed}`;
completed.style.fontWeight = "bold";

// Color change based on true/false
if (todo.completed) {
    completed.style.color = "green";
} else {
    completed.style.color = "red";
}

card.appendChild(completed);

async function fetchdata(url){
    try {
    let response = await fetch(url) {
        let data = await response.json();

        data.forEach((user)=>{
            console.log(user);
            makecard(user);
        })
    }
} catch (error) {
    console.log(error);
}
}

fetchdata(url)

