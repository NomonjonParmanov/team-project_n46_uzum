const category = new URLSearchParams(location.search).get("category");

let categoryProducts = products.filter((pr) => pr.category == category);

console.log(categoryProducts)