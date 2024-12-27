// DOM Elements
const exploreBlogBtn = document.querySelector(".explore_blog_btn");
const boatBlogRow = document.querySelector(".boat_blogs_row");
const contentRow = document.querySelector(".content_row");
const mainContainer = document.querySelectorAll(".main_container_");
const rightBtn = document.querySelector(".arrow_right");
const leftBtn = document.querySelector(".arrow_left");

// Constants
// var API_URL = "https://boat-backend-1ffa.onrender.com/api/products";
let counter = 0;

// Blog Links
const BLOG_LINKS = {
  earphone: "/body/Earphones_buying_Guide/index.html",
  smartwatch: "/body/Smartwatch_guide/index.html",
  groomingKit: "/body/Grooming_kit/index.html",
};

// Helper Functions
async function fetchData(description) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    });
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${description}:`, error);
    return [];
  }
}

function createBlogCard(item, linkPath) {
  return `
    <div class="boat_blogs_imgDiv" id="${item._id}">
      <a href="${linkPath}">
        <img src="${item.productImages[0]}" class="boat_blogs_img" alt="${
    item.productName || "Blog Image"
  }">
        <div class="buying_guide">
          <h3 class="baot_blogs_imgtxt">${item.img_belowtxt || ""}</h3>
        </div>
      </a>
    </div>
  `;
}

function createContentCard(item) {
  return `
    <div class="img_box">
      <div class="img_divs">
        <img src="${item.productImages[0]}" class="device_img" alt="${
    item.productName || "Product Image"
  }" />
      </div>
      <div class="img_content">
        <p class="img_description">${item.content || ""}</p>
        <button class="shop_now_btn shop_btn" data-id="${
          item._id
        }">SHOP NOW</button>
      </div>
    </div>
  `;
}

// Slider Functions
function initializeSlider() {
  if (!mainContainer.length) return;

  mainContainer.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
  });
}

function slideMainContainer() {
  mainContainer.forEach((item) => {
    item.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// Blog Generation Functions
async function generateBlogSection(description, linkPath) {
  if (!boatBlogRow) return;

  const data = await fetchData(description);
  const blogContent = data
    .map((item) => createBlogCard(item, linkPath))
    .join("");
  boatBlogRow.insertAdjacentHTML("beforeend", blogContent);
}

// Content Generation Function
async function generateContent() {
  if (!contentRow) return;

  const data = await fetchData("What They Say About Us");
  const content = data.map(createContentCard).join("");
  contentRow.innerHTML = content;

  // Add click handlers for shop now buttons
  const shopButtons = contentRow.querySelectorAll(".shop_now_btn");
  shopButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      handleShopNowClick(id, data);
    });
  });
}

// Event Handlers
function handleShopNowClick(id, data) {
  const sections = {
    [data[0]?._id]: "#best_sound_home_audio",
    [data[1]?._id]: "#trending_wireless_earphones",
    [data[2]?._id]: "#top_earbuds_amazing_product",
  };

  const targetSection = sections[id];
  if (targetSection) {
    window.location.assign(targetSection);
  }
}

// Initialize Everything
async function initializeContent() {
  try {
    // Initialize slider
    initializeSlider();

    // Generate blog sections
    await Promise.all([
      generateBlogSection("boAt Blogs 1", BLOG_LINKS.earphone),
      generateBlogSection("boAt Blogs 2", BLOG_LINKS.smartwatch),
      generateBlogSection("boAt Blogs 3", BLOG_LINKS.groomingKit),
    ]);

    // Generate content section
    await generateContent();
  } catch (error) {
    console.error("Error initializing content:", error);
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initialize content
  initializeContent();

  // Blog explore button
  exploreBlogBtn?.addEventListener("click", () => {
    window.open("https://www.boat-lifestyle.com/blogs/blog", "_self");
  });

  // Slider controls
  rightBtn?.addEventListener("click", () => {
    counter = Math.min(counter + 1, mainContainer.length - 1);
    slideMainContainer();
  });

  leftBtn?.addEventListener("click", () => {
    counter = Math.max(counter - 1, 0);
    slideMainContainer();
  });
});
