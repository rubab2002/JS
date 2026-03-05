const url = "https://jsonplaceholder.typicode.com/comments";
const loadBtn = document.getElementById("loadBtn");
const container = document.getElementById("container");

async function fetchComments() {
  try {
    const response = await fetch(url);
    let data = await response.json();

    data= data.slice(0,20)
    console.log(data); // Poora array console me show

    // Container ko clear karo
    container.innerHTML = "";

    // Loop through all comments
    data.forEach((comment) => {
      const card = document.createElement("div");
      card.className = "card";

      const fields = ["postId", "id", "name", "email", "body"];
      fields.forEach((field) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${field.replace(/([A-Z])/g, " $1")}:</strong> ${comment[field]}`;
        card.appendChild(p);
      });

      container.appendChild(card);
    });
  } catch (error) {
    console.log("Error fetching comments:", error);
  }
}

fetchComments()
