const discountProductsRow = document.querySelector(".discount-products-row");
const newProductsRow = document.querySelector(".new-products-row");
const popularProductsRow = document.querySelector(".popular-products-row");



function getProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  const productCardBody = document.createElement("div");
  productCardBody.className = "product-card-body";

  const productImg = document.createElement("img");
  productImg.src = product.images[0];
  productImg.alt = product.name;

  productCardBody.appendChild(productImg);

  const productCardFooter = document.createElement("div");
  productCardFooter.className = "product-card-footer";

  const productTitle = document.createElement("h3");
  // const productTitleText = document.createTextNode(product.name);

  // productTitle.appendChild(productTitleText);
  productTitle.innerHTML = `<a href="product.html">${product.name}</a>`

  const productPrice = document.createElement("p");
  // productPrice.textContent = "<i> Price </i>";
  productPrice.innerHTML = `<i>${product.price}</i>`;

  const productBtn = document.createElement("button");
  productBtn.innerHTML = "<b> Add to the card </b>";

  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productPrice);
  productCardFooter.prepend(productTitle);

  productCard.append(productCardBody, productCardFooter);
  return productCard;
}

// products.map((product) => {
//   let card = getProductCard(product);
//   productsRow.append(card);
// });


let discountProducts = products.filter((pr) => pr.discount).slice(-4);

discountProducts.map(product => {
  let card = getProductCard(product)
  discountProductsRow.append(card)
})

let newProducts = products.slice(-4);

newProducts.map(product => {
  let card = getProductCard(product)
  newProductsRow.append(card)
})

let popularProducts = products
  .toSorted((a, b) => a.rating - b.rating)
  .slice(-4);

  popularProducts.map(product => {
    let card = getProductCard(product)
    popularProductsRow.append(card)
  })