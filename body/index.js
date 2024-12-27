const exploreBlogBtn = document.querySelector(".explore_blog_btn");
const earPhoneImg = document.querySelector(".earphone_imgDiv");
const smartWatchImg = document.querySelector(".smartwatch_imgDiv");
const groomKitImg = document.querySelector(".groomkit_imgDiv");
const newTab = document.getElementById("new_tab").href;

exploreBlogBtn.addEventListener("click", function () {
  window.open("https://www.boat-lifestyle.com/blogs/blog", "_self");
});

// -------------------------------------------------
const mainContainer = document.querySelectorAll(".main_container");
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
const boat_blogs = document.querySelector(".boat_blogs");

function generateBoatBlogs() {
  const data = { description: "boAt Blogs" };
  fetch(" https://boat-backend-1ffa.onrender.com/api/products", {
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
        let finalresult = `

            <div class="boat_blogs_imgDiv" id="${result[i]._id}">
            <a href="${result[i].link}">
            <img src="${result[i].productImages[0]}" class="boat_blogs_img" alt=""></a>
            <div class="buying_guide">
              <h3 class="baot_blogs_imgtxt">${result[i].img_belowtxt}</h3>
            </div>
          </div>`;
        boatBlogRow.innerHTML += finalresult;
      }

      const boatImgDiv = document.querySelector(".boat_blogs_imgDiv");
      boatBlogRow.addEventListener("click", (e) => {
        console.log("hai");
        if (e.target._id == "631788f97a61f8fe908a3528") {
          let datas = result[i];
          console.log(datas);
          let anchor = document.createElement("a");
          anchor.setAttribute("href", "./Earphones_Buying_Guide/index1.html");
          let BoatBlogImg = document.querySelector(".boat_blogs_img");
          BoatBlogImg.append(anchor);
          // boatImgDiv.addEventListener("click",function(){
          //     console.log(boatImgDiv)
          //     window.location.href("./Earphones_Buying_Guide/index1.html")
          // })
        } else if (e.target._id == "63178a7c7a61f8fe908a3529") {
          let datas = result[i];
          console.log(datas);
          let anchor = document.createElement("a");
          anchor.setAttribute("href", "./index1.html");
          let BoatBlogImg = document.querySelector(".boat_blogs_img");
          BoatBlogImg.append(anchor);
        } else if (e.target._id == "63178ae97a61f8fe908a352a") {
          let datas = result[i];
          // console.log(datas);
          let anchor = document.createElement("a");
          anchor.setAttribute("href", "./index1.html");
          let BoatBlogImg = document.querySelector(".boat_blogs_img");
          BoatBlogImg.append(anchor);
        }
      });
    });
}

generateBoatBlogs();

// -------------WHat They Say About Us

const ContentRow = document.querySelector(".content_row");

function whatTheySayAboutUs() {
  const data = { description: "What They Say About Us" };
  fetch(" https://boat-backend-1ffa.onrender.com/api/products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((output) => {
      console.log(output);
      for (let i = 0; i < output.length; i++) {
        let finalresult = `<div class="img_box">
            <div class="img_divs">
              <img src=${output[i].productImages[0]} class="device_img" alt="" />
            </div>
            <div class="img_content">
              <p class="img_description">${output[i].content}</p>
              <button class="shop_now_btn">SHOP NOW</button>
            </div>
          </div>`;

        ContentRow.innerHTML += finalresult;
      }
    });
}

whatTheySayAboutUs();
