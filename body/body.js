const exploreBlogBtn = document.querySelector(".explore_blog_btn");
const earPhoneImg = document.querySelector(".earphone_imgDiv");
const smartWatchImg = document.querySelector(".smartwatch_imgDiv");
const groomKitImg = document.querySelector(".groomkit_imgDiv");
const newTab = document.getElementById("new_tab").href;

exploreBlogBtn.addEventListener("click", function () {
  window.open("https://www.boat-lifestyle.com/blogs/blog", "_self");
});

// -------------------------------------------------
const mainContainer = document.querySelectorAll(".main_container_");
const rightBtn = document.querySelector(".arrow_right");
const leftBtn = document.querySelector(".arrow_left");

let counter = 0;

mainContainer.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});

rightBtn.addEventListener("click", function () {
  counter++;
  if (counter == 4) {
    counter = 3;
  }
  slideMainContainer();
});

leftBtn.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = 0;
  }

  slideMainContainer();
});

const slideMainContainer = () => {
  mainContainer.forEach((item) => {
    item.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// -----------------------Explore blogs
const boatBlogRow = document.querySelector(".boat_blogs_row");

function generateEarphoneGuide() {
  const data = { description: "boAt Blogs 1" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      for (let i = 0; i < result.length; i++) {
        let finalresult = `<div class="boat_blogs_imgDiv1" id="${result[i]._id}">
                          <a href="/body/Earphones_buying_Guide/index.html"><img src="${result[i].productImages[0]}" class="boat_blogs_img" alt=""></a>
                          <div class="buying_guide">
                          <a href="/body/Earphones_buying_Guide/index.html"><h3 class="baot_blogs_imgtxt">${result[i].img_belowtxt}</h3></a>
                          </div>
                        </div>`;
        boatBlogRow.innerHTML += finalresult;
      }
    });
}
generateEarphoneGuide();
// ----------------------------------

function smartWatchGuide() {
  const data = { description: "boAt Blogs 2" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      for (let i = 0; i < result.length; i++) {
        let finalresult = `<div class="boat_blogs_imgDiv2" id="${result[i]._id}">
              <a href="/body/Smartwatch_guide/index.html"> <img src="${result[i].productImages[0]}" class="boat_blogs_img" alt=""></a>
                          <div class="buying_guide">
                          <a href="/body/Smartwatch_guide/index.html"><h3 class="baot_blogs_imgtxt">${result[i].img_belowtxt}</h3></a>
                          </div>
                        </div>`;
        boatBlogRow.innerHTML += finalresult;
      }
    });
}
smartWatchGuide();

function groomingKit() {
  const data = { description: "boAt Blogs 3" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      for (let i = 0; i < result.length; i++) {
        let finalresult = `<div class="boat_blogs_imgDiv3" id="${result[i]._id}">
              <a href="/body/Grooming_kit/index.html">  <img src="${result[i].productImages[0]}" class="boat_blogs_img" alt=""></a>
                          <div class="buying_guide">
                          <a href="/body/Grooming_kit/index.html"><h3 class="baot_blogs_imgtxt">${result[i].img_belowtxt}</h3></a>
                          </div>
                        </div>`;
        boatBlogRow.innerHTML += finalresult;
      }
    });
}
groomingKit();

// -------------WHat They Say About Us

const ContentRow = document.querySelector(".content_row");

function whatTheySayAboutUs() {

const data = { description: "What They Say About Us" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((shopOutput) => {
      console.log(shopOutput);
      for (let i = 0; i < shopOutput.length; i++) {
        let finalresult = `<div class="img_box">
            <div class="img_divs">
              <img src=${shopOutput[i].productImages[0]} class="device_img" alt="" />
            </div>
            <div class="img_content">
              <p class="img_description">${shopOutput[i].content}</p>
              <button class="shop_now_btn shop_btn" id="${shopOutput[i]._id}">SHOP NOW</button>
            </div>
          </div>`;

        ContentRow.innerHTML += finalresult;

        let shopNowBtn=document.querySelector(".shop_now_btn");
       
      }
      ContentRow.addEventListener("click",(e)=>{
        if(e.target.id==shopOutput[0]._id){
         window.location.assign("#best_sound_home_audio","_self")
        }
        if(e.target.id==shopOutput[1]._id){
          window.location.assign("#trending_wireless_earphones")
        }
        if(e.target.id==shopOutput[2]._id){
          window.location.assign("#top_earbuds_amazing_product")
        }
      })
    });
}

whatTheySayAboutUs();
