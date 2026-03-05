// JSON Data
let url = "https://jsonplaceholder.typicode.com/todos";
let container = document.querySelector(".container");
function makecard(todo) {
  // Create card div
  const card = document.createElement("div");
  card.classList.add("card");

  // Create h2
  const heading = document.createElement("h2");
  heading.textContent = "Todo Item";
  card.appendChild(heading);

  // Create User ID p
  const userIdP = document.createElement("p");
  userIdP.innerHTML = `<strong>User ID:</strong> ${todo.userId}`;
  card.appendChild(userIdP);

  // Create ID p
  const idP = document.createElement("p");
  idP.innerHTML = `<strong>ID:</strong> ${todo.id}`;
  card.appendChild(idP);

  // Create Title p
  const titleP = document.createElement("p");
  titleP.innerHTML = `<strong>Title:</strong> ${todo.title}`;
  card.appendChild(titleP);

  // Create Completed p
  const completedP = document.createElement("p");
  completedP.innerHTML = `<strong>Completed:</strong> ${todo.completed}`;
//   completedP.classList.add(todo.completed ? "completed" : "not-completed");
  card.classList.add(todo.completed ? "done" : "pending");
  card.appendChild(completedP);

  // Append card to container
  container.appendChild(card);
}

async function fetchdata(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    data.forEach((user) => {
      console.log(user);
      makecard(user);
    });
  } catch (error) {
    console.error(error);
  }
}
fetchdata(url);
