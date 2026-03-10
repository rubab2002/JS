let input = document.querySelector("input");

let add = document.querySelector(".add");

add.addEventListener("click", (det) => {
  addTask();
  // localStorage.setItem('Items',addTask())
});

function addTask() {
  let results = document.querySelector(".result");

  let div = document.createElement("div");
  div.classList.add("card");
  let p = document.createElement("p");
  p.textContent = input.value;

  let btn = document.createElement("div");
  btn.classList.add("btn");
  let del = document.createElement("button");
  del.textContent = "Delete";
  let edit = document.createElement("button");
  edit.textContent = "Edit";

  btn.append(del, edit);
  div.append(p, btn);
  let cards = [];
  cards.push(p)
  results.appendChild(div);
  localStorage.setItem("item", JSON.stringify(cards));
}
