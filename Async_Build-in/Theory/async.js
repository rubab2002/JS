let url = "https://jsonplaceholder.typicode.com/users";

let fetchData = async (websiteUrl) => {
  try {
    let res = await fetch(websiteUrl);
    res = await res.json();

    res.forEach((user) => {
      console.log(user);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData(url);
