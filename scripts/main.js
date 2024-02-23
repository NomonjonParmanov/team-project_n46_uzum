const categoriesMenu = document.querySelector(".categories-menu");
const cartTotal = document.querySelector(".cart");

const categoryMenuToggleBtn = document.querySelector("header button");
const categoryMenuDropdown = document.querySelector(".categories-menu");

categoryMenuToggleBtn.addEventListener("click", () => {
  categoryMenuDropdown.classList.toggle("hidden");
});

categories.map((category) => {
  categoriesMenu.innerHTML += `<a href="category.html?category=${category.name}">${category.name}</a>`;
});

let cartJson = localStorage.getItem("cart");

let cart = JSON.parse(cartJson) || [];

function getCartTotal() {
  cartTotal.textContent = cart.length;
}

getCartTotal();
