// DOM Elements
const bestSellers = document.querySelector(".best_sellers");
const dailyDeals = document.querySelector(".daily_deals");
const biggestLaunch = document.querySelector(".biggest_launch");
const smartWatches = document.querySelector(".smart_watches");
const trendingWireless = document.querySelector(".trending_wireless");
const topEarbuds = document.querySelector(".top_earbuds");
const trendingWired = document.querySelector(".trending_wired");
const trendingAnc = document.querySelector(".trending_anc");
const dc = document.querySelector(".dc");
const marvel = document.querySelector(".marvel");
const homeAudio = document.querySelector(".home_audio");
const videoContainer = document.querySelector(".video-container");
const mainSection = document.querySelector(".mainSection");
const cartItems = document.querySelector(".cart_items");
const cartMain = document.querySelector(".cart_main");
const empty = document.querySelector(".empty");

const API_URL = "https://boat-backend-1ffa.onrender.com/api/products";

// Cart state - Changed to localStorage
let basket = JSON.parse(localStorage.getItem("cartData")) || [];
let total = 0;
let sum = 0;

// Timer setup
function setupTimer() {
  const timerElements = document.querySelectorAll(".flash-sale-end-format h4");
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 1);
  futureDate.setHours(12, 0, 0, 0);

  function updateTimer() {
    const timeLeft = futureDate.getTime() - new Date().getTime();

    const hours = Math.floor(
      (timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
    const milliseconds = Math.floor((timeLeft % 1000) / 10);

    const values = [
      `${hours}hr`,
      `${minutes}mins`,
      `${seconds}s`,
      milliseconds,
    ];
    timerElements.forEach(
      (element, index) => (element.innerHTML = values[index])
    );
  }

  updateTimer();
  return setInterval(updateTimer, 70);
}

// Product card generation
function generateProductHTML(product, isVideo = false) {
  if (isVideo && product.tag?.length > 5) {
    return `
            <div class="main">
                <div class="best-seller-div">
                    <img class="video-div-absolute-image" src="${
                      product.productImages[1]
                    }" alt="">
                    <div class="wrapper-of-video">
                        <video loop autoplay muted class="video-container-video" src="${
                          product.productImages[0]
                        }"></video>
                    </div>
                    <div class="inside-best-seller-video">
                        <h3  class="productname-video">${
                          product.productName
                        }</h3>
                        <hr>
                        <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
                          product.rating
                        } ${product.noOfReviews} reviews</p>
                        <div class="red-tag-of-video">New Arrival</div>
                        <div class="price-and-discount">
                            <h5 class="current-price-video">${
                              product.price
                            }</h5>
                            <p class="earlier-price-video">₹${
                              product.originalPrice
                            }</p>
                        </div>
                        <p class="save-money-video">You Save: ₹${
                          product.originalPrice - product.price
                        } (${product.offer}%)</p>
                    </div>
                </div>
            </div>`;
  }

  const tagClass = product.tag?.length > 5 ? "red" : "";
  const buttonClass = tagClass ? "red-button" : "";

  return `
        <div class="main" data-product='${JSON.stringify(product)}'>
            <div class="best-seller-div">
                <div class="wrapper-of-best-seller-images">
                    <div class="flash ${tagClass}">${tagClass ? "" : "🗲"}${
    product.tag || ""
  }</div>
                    <img class="best-seller-image-front" src="${
                      product.productImages[0]
                    }" alt="">
                    <img class="best-seller-image-back" src="${
                      product.productImages[1]
                    }" alt="">
                </div>
                <div class="inside-best-seller">
                    <a href="./show.html" class="heading-link"><h3 class="productname" id="${
                      product._id
                    }">${product.productName}</h3></a>
                    <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
                      product.rating
                    } ${product.noOfReviews} reviews</p>
                    <hr>
                    <div class="price-and-discount">
                        <h5 class="current-price">${product.price}</h5>
                        <p class="earlier-price">₹${product.originalPrice}</p>
                    </div>
                    <p class="save-money">You Save: ₹${
                      product.originalPrice - product.price
                    } (${product.offer}%)</p>
                    <button class="button-flash-sale ${buttonClass}" data-product-id="${
    product._id
  }">ADD TO CART</button>
                </div>
            </div>
        </div>`;
}

// API calls
async function fetchProducts(category) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: category }),
    });
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${category}:`, error);
    return [];
  }
}

// Updated Cart Functions
function handleAddToCart(product) {
  console.log(product," this is clincked");
  // Check if product already exists in cart
  const existingProduct = basket.find((item) => item._id === product._id);

  if (existingProduct) {
    alert("Item already in cart!");
    return;
  }

  // Add product to basket
  basket.push({
    ...product,
    quantity: 1,
    total: product.price,
  });

  // Save to localStorage
  localStorage.setItem("cartData", JSON.stringify(basket));

  // Update UI
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const subtotal = document.querySelector(".subtotal");
  const updateCart = document.querySelector(".updateCart");
  const basItem = document.querySelector(".basItem");
  const checkoutSubtotal = document.querySelector(".checkout_subtotal");

  // Calculate totals
  sum = basket.reduce((acc, item) => acc + (item.quantity || 1), 0);
  total = basket.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  // Update UI elements
  if (subtotal) subtotal.innerText = `₹ ${total}`;
  if (updateCart) updateCart.innerText = sum;
  if (basItem) basItem.innerText = sum;
  if (checkoutSubtotal) checkoutSubtotal.innerText = `₹ ${total}`;

  // Save to localStorage
  localStorage.setItem("cartData", JSON.stringify(basket));
  localStorage.setItem("totalItems", JSON.stringify(sum));
  localStorage.setItem("sumTotal", JSON.stringify(total));
}

function renderCartItems() {
  if (!cartMain) return;

  if (basket.length === 0) {
    cartMain.innerHTML = `
      <h5>Your cart is empty</h5>
      <button class="strtbtn">START SHOPPING</button>
    `;
    return;
  }

  cartMain.innerHTML = basket
    .map(
      (item) => `
    <div class="cartWrap" id="cartWrap_${item._id}">
      <img src="${item.productImages[0]}" alt="" width="50%" height="50%">
      <div class="cart-right">
        <h5>${item.productName}</h5>
        <div class="price-cart">
          <h4 id="updated_${item._id}">₹${
        item.price * (item.quantity || 1)
      }</h4>
          <h4 class="strike" id="strike_${item._id}">₹${
        item.originalPrice * (item.quantity || 1)
      }</h4>
          <i class="fa-solid fa-trash" onclick="removeFromCart('${
            item._id
          }')"></i>
        </div>
        <div class="cart-button">
          <i class="fa-solid fa-minus" onclick="updateQuantity('${
            item._id
          }', 'decrease')"></i>
          <span id="quantity_${item._id}">${item.quantity || 1}</span>
          <i class="fa-solid fa-plus" onclick="updateQuantity('${
            item._id
          }', 'increase')"></i>
          <h5>${item.color?.[0] || ""}</h5>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Update checkout items if they exist
  if (cartItems) {
    cartItems.innerHTML = basket
      .map(
        (item) => `
      <div class="cartWraping">
        <img src="${item.productImages[0]}" alt="" width="50%" height="50%">
        <div class="cart-right">
          <h3>${item.productName}</h3>
          <div class="price-cart">
            <h3 id="updatedd_${item._id}">₹${
          item.price * (item.quantity || 1)
        }</h3>
            <h5 id="quantityy_${item._id}">Quantity:${item.quantity || 1}</h5>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }
}

function removeFromCart(productId) {
  basket = basket.filter((item) => item._id !== productId);
  localStorage.setItem("cartData", JSON.stringify(basket));
  updateCartUI();
  renderCartItems();
}

function updateQuantity(productId, action) {
  const item = basket.find((item) => item._id === productId);
  if (!item) return;

  if (action === "increase") {
    item.quantity = (item.quantity || 1) + 1;
  } else if (action === "decrease" && item.quantity > 1) {
    item.quantity = item.quantity - 1;
  }

  localStorage.setItem("cartData", JSON.stringify(basket));
  updateCartUI();
  renderCartItems();
}

// Initialize application
async function initializeApp() {
  setupTimer();

  const categories = [
    { element: bestSellers, category: "best_sellers" },
    { element: dailyDeals, category: "daily_deals" },
    { element: biggestLaunch, category: "Biggest_Launches" },
    { element: smartWatches, category: "Smart watches" },
    { element: trendingWireless, category: "Trending_Wireless" },
    { element: topEarbuds, category: "Top Earbuds" },
    { element: trendingWired, category: "trending_wired" },
    { element: trendingAnc, category: "trending_ANC" },
    { element: dc, category: "boAt | Superheroes" },
    { element: marvel, category: "Marvel" },
    { element: homeAudio, category: "Home Audio" },
    { element: videoContainer, category: "video-products" },
  ];

  for (const { element, category } of categories) {
    if (element) {
      const products = await fetchProducts(category);
      const isVideo = element === videoContainer;
      element.innerHTML += products
        .map((product) => generateProductHTML(product, isVideo))
        .join("");
    }
  }

  // Add event listener for add to cart buttons using event delegation
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("button-flash-sale")) {
      const productContainer = e.target.closest(".main");
      if (productContainer) {
        try {
          const product = JSON.parse(productContainer.dataset.product);
          handleAddToCart(product);
        } catch (error) {
          console.error("Error parsing product data:", error);
        }
      }
    }
  });

  // Initialize cart UI
  renderCartItems();

  // Marvel/DC toggle
  const marvelDiv = document.querySelector(".marvel-div");
  const dcDiv = document.querySelector(".dc-div");

  marvelDiv?.addEventListener("click", () => {
    dc.style.display = "none";
    marvel.style.display = "flex";
    marvelDiv.style.textDecoration = "underline red";
    dcDiv.style.textDecoration = "underline white";
    marvelDiv.style.transition = "1s";
  });

  dcDiv?.addEventListener("click", () => {
    marvel.style.display = "none";
    dc.style.display = "flex";
    dcDiv.style.textDecoration = "underline red";
    marvelDiv.style.textDecoration = "underline white";
    dc.style.transition = "1s ease-in";
  });
}

// Start application when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeApp);

// Scroll to top functionality
const topArrowBtn = document.getElementById("scroll_to_top_btn");
window.onscroll = function () {
  topArrowBtn.style.display =
    document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
      ? "block"
      : "none";
};

topArrowBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
