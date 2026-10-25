const URL = "https://dummyjson.com/products";

fetch(URL)
  .then((response) => {
    console.log(response.status); 
    return response.json();      
  })
  .then((data) => {
    console.log(data.products);     
    console.log(data.products[0].brand); 
  })
  .catch((err) => console.error(err));

//receipes API get data 
// https://dummyjson.com/recipes

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "My First Post",
    body: "Hello students!",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Created:", data)); 


  

