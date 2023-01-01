const best_sellers = document.querySelector(".best_sellers");
const daily_deals = document.querySelector(".daily_deals");
const biggest_launch = document.querySelector(".biggest_launch");
const smart_watches = document.querySelector(".smart_watches");
const trending_wireless = document.querySelector(".trending_wireless");
const top_earbuds = document.querySelector(".top_earbuds");
const trending_wired = document.querySelector(".trending_wired");
const trending_anc = document.querySelector(".trending_anc");
const dc = document.querySelector(".dc");
const marvel = document.querySelector(".marvel");
const home_audio = document.querySelector(".home_audio");
const videoContainer = document.querySelector(".video-container");
const marvelHeading = document.querySelector(".marvel-div");
const dcHeading = document.querySelector(".dc-div");

const main = document.querySelector(".mainSection");

const itemsOfTimer = document.querySelectorAll(".flash-sale-end-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 1, 12, 00, 00);
const date = futureDate.getDate();
const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  let milisecond = Math.floor((t % 100) / 10);

  // putting values in the array to pass inside the timer

  const timerValue = [
    hours + "hr",
    minutes + "mins",
    seconds + " s",
    milisecond,
  ];
  function format(item) {
    return item;
  }
  //For each selects each item  to attach on the count down timer
  itemsOfTimer.forEach(function (item, i) {
    item.innerHTML = format(timerValue[i]);
  });
}
let countdown = setInterval(getRemainingTime, 70);
getRemainingTime();


let basket = [];

function generate() {
  const data1 = { description: "best_sellers" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data1),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
           <div class="best-seller-div">
            <div class="wrapper-of-best-seller-images">
            <div class="flash red">${result[i].tag}</div>
           <img class="best-seller-image-front" src="${
             result[i].productImages[0]
           }  alt="">
           <img class="best-seller-image-back" src="${
             result[i].productImages[1]
           }   alt="">
      </div><div class="inside-best-seller">  <a href="./show.html"><h3 class="productname" id="${
        result[i]._id
      }">${result[i].productName}</h3></a> 
          <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
            result[i].rating
          } ${result[i].noOfReviews} reviews</p>
          <hr>
          <div class="price-and-discount">
              <h5 class = "current-price">${result[i].price} </h5>
              <p class="earlier-price">₹${result[i].originalPrice}</p>
          </div>
          <p class="save-money">You Save: ₹ ${
            result[i].originalPrice - result[i].price
          } (${result[i].offer}%)</p>
          <button class="button-flash-sale red-button" id="${
            result[i].productName
          }">ADD TO CART</button>
      </div></div>  `;
          best_sellers.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
           <div class="best-seller-div">
            <div class="wrapper-of-best-seller-images">
            <div class="flash">🗲${result[i].tag}</div>
           <img class="best-seller-image-front" src="${
             result[i].productImages[0]
           }  alt="">
           <img class="best-seller-image-back" src="${
             result[i].productImages[1]
           }   alt="">
      </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
        result[i]._id
      }">${result[i].productName}</h3></a> 
          <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
            result[i].rating
          } -${result[i].noOfReviews} reviews</p>
          <hr>
          <div class="price-and-discount">
              <h5 class = "current-price">${result[i].price} </h5>
              <p class="earlier-price">₹${result[i].originalPrice}</p>
          </div>
          <p class="save-money">You Save: ₹ ${
            result[i].originalPrice - result[i].price
          } (${result[i].offer}%)</p>
          <button class="button-flash-sale" id="${
            result[i].productName
          }">ADD TO CART</button>
      </div></div>  `;
          best_sellers.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }

    });

  const data2 = { description: "daily_deals" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          daily_deals.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          })
        
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          daily_deals.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
    });

  const data3 = { description: "Biggest_Launches" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data3),
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          biggest_launch.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          biggest_launch.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      // biggest_launch+= `<p>Lorem, ipsum asodnzcoa  ajdis.</p>`
    });
  const data4 = { description: "Smart watches" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data4),
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length ; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          smart_watches.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          smart_watches.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
   
    });
  const data5 = { description: "Trending_Wireless" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data5),
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_wireless.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_wireless.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }

    });
  const data6 = { description: "Top Earbuds" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data6),
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          top_earbuds.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
         
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          top_earbuds.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }

    });
  const data7 = { description: "trending_wired" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data7),
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_wired.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_wired.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
  
    });
  const data8 = { description: "trending_ANC" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data8),
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_anc.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_anc.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
  
    });
  const data9 = { description: "boAt | Superheroes" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data9),
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          dc.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          dc.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }

    });
  const data10 = { description: "Marvel" };
 
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data10),
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          
          html = `
          <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          marvel.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          marvel.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
 
    });
  // ------------------------------------------------------------------------
  const data12 = { description: "video-products" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data12),
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
          <img class="video-div-absolute-image" src="${
            result[i].productImages[1]
          }   alt="">
           <div class="wrapper-of-video">
           <video loop autoplay muted class="video-container-video" src="${
             result[i].productImages[0]
           }  alt="">
     </div><div class="inside-best-seller-video"> <h3 class="productname-video">${
       result[i].productName
     }</h3>
     <hr>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <div class="red-tag-of-video">New Arrival</div>
         <div class="price-and-discount">
             <h5 class = "current-price-video">${result[i].price} </h5>
             <p class="earlier-price-video">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money-video">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
     </div></div>  `;
          videoContainer.innerHTML += html;
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${
       result[i].productName
     }</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          marvel.innerHTML += html;
        }
      }
    });
 

  // -----------------------------------------------------------------------------
  const data11 = { description: "Home Audio" };
  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data11),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag == undefined) {
          html = ` <div class="main" >
        <div class="best-seller-div">
         <div class="wrapper-of-best-seller-images">
          <img class="best-seller-image-front"  src="${
            result[i].productImages[0]
          }  alt="">
       <img class="best-seller-image-back" src="${
         result[i].productImages[1]
       }   alt="">
   </div><div class="inside-best-seller" > <a href="./show.html"><h3 class="productname"  id="${
     result[i]._id
   }">${result[i].productName}</h3></a>
       <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
         result[i].rating
       } -${result[i].noOfReviews} reviews</p>
       <hr>
       <div class="price-and-discount">
           <h5 class = "current-price">${result[i].price} </h5>
           <p class="earlier-price">₹${result[i].originalPrice}</p>
       </div>
       <p class="save-money">You Save: ₹ ${
         result[i].originalPrice - result[i].price
       } (${result[i].offer}%)</p>
       <button class="button-flash-sale" id="${
         result[i].productName
       }"  >ADD TO CART</button>
   </div></div>  `;
          home_audio.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i].productName) {
              let datasTrans = result[i].productName;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          console.log(result[i].productImages[0]);
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
           <img class="best-seller-image-front" src="${
             result[i].productImages[0]
           }  alt="">
          <img class="best-seller-image-back"  src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }" >ADD TO CART</button>
     </div></div>  `;
          home_audio.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
  
    });
}

let marvelDiv = document.querySelector(".marvel-div");
let dcDiv = document.querySelector(".dc-div");

marvelDiv.addEventListener("click", () => {
  console.log("Whuiuuuuuuuuuuuuhukykfuutfyti");
  dc.style.display = "none";
  marvel.style.display = "flex";
  marvelDiv.style.textDecoration = "underline red";
  dcDiv.style.textDecoration = "underline white";
  marvelDiv.style.transition = "1s";
});
dcDiv.addEventListener("click", () => {
  console.log("Whuiuuuuuuuuuuuuhukykfuutfyti");
  marvel.style.display = "none";
  dc.style.display = "flex";
  dcDiv.style.textDecoration = "underline red";
  marvelDiv.style.textDecoration = "underline white";
  dc.style.transition = "1s ease-in";
});

generate();


const paybtn = document.querySelector(".payment_Checkout_bottom_btn")
const paybtn2 = document.querySelector(".payment_Checkout_bottom_paybtn")
const paymid1 =document.querySelector(".payment_Checkout_middle1")
const paymid2 =document.querySelector(".payment_Checkout_middle2")
const payment_Checkout_top2_1 = document.querySelector(".payment_Checkout_top2_1 ")
const payment_Checkout_top2_2 = document.querySelector(".payment_Checkout_top2_2")

const payout1= document.querySelector(".payout")


paybtn.addEventListener("click",()=>{
    if(paymid1.style.display="block"){
        paymid1.style.display="none"
            paymid2.style.display="block"
    }
    if(payment_Checkout_top2_1.style.display="flex"){
        payment_Checkout_top2_1.style.display="none";
        payment_Checkout_top2_2.style.display="flex"
    }
   if(paybtn.style.display="block"){
    paybtn2.style.display="block";
    paybtn.style.display="none";
   }
 
})

const addressy=document.querySelector(".addressy")
const summaryy=document.querySelector(".summaryy")
const closyy = document.querySelector(".closyy")
const payment_Checkout=document.querySelector(".payment_Checkout")
const aside=document.querySelector("aside")
const clearStorage = document.querySelector(".clearStorage")
paybtn2.addEventListener("click",()=>{
  payout1.style.display="block"
  payment_Checkout.style.filter="blur(8px)"
  aside.style.filter="blur(8px)"
})
clearStorage.addEventListener("click",()=>{
  sessionStorage.clear();
})

addressy.addEventListener("click",()=>{
    if(paymid1.style.display="block"){
        paymid1.style.display="none"
            paymid2.style.display="block"
    }
    if(payment_Checkout_top2_1.style.display="flex"){
        payment_Checkout_top2_1.style.display="none";
        payment_Checkout_top2_2.style.display="flex"
    }
    if(paybtn.style.display="block"){
        paybtn2.style.display="block";
        paybtn.style.display="none";
       }
 
})
summaryy.addEventListener("click",()=>{
    if(paymid1.style.display="none"){
        paymid1.style.display="block"
            paymid2.style.display="none"
    }
    if(payment_Checkout_top2_1.style.display="none"){
        payment_Checkout_top2_1.style.display="flex";
        payment_Checkout_top2_2.style.display="none"
    }
    if(paybtn.style.display="none"){
        paybtn2.style.display="none";
        paybtn.style.display="block";
       }
    
})

closyy.addEventListener("click",()=>{
    payment_Checkout.style.display="none"
    aside.style.filter="none"
})

const payout = document.querySelector(".payment_Checkout")
const checkyy = document.querySelector(".checkyy")

checkyy.addEventListener("click",()=>{
    payout.style.display="block"
    aside.style.filter="blur(8px)"
})

const cart_items= document.querySelector(".cart_items")
const cart_main = document.querySelector(".cart_main");
const empty = document.querySelector(".empty");
let total=0;
let sum=0;
main.addEventListener("click", (e) => {
  const cartData = { productName: `${e.target.id}` };

  fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartData),
  })
    .then((response) => response.json())  
    .then((data) => {
      let search = basket.find((y) => y.id.productName == e.target.id);
      const price = data[0].price
      if (search == undefined) {
        basket.push({
          id: data[0],
          item: 1,
          total: price,
        });
        sessionStorage.setItem("cartData",JSON.stringify(basket))
        console.log(basket, "pp");
      } else {
        alert("Item Alread Added! Check Cart!");
        basket.pull(data[0]);
      }

      for (let i = 0; i < basket.length; i++) {
        html = ` 
                    <div class="cartWrap" id="cartWrap_${data[0]._id}">
              <img src="${data[0].productImages[0]}" alt="" width="50%" height="50%">
              <div class="cart-right">
              <h5>${data[0].productName}</h5>
              <div class="price-cart">
              <h4 id="updated_${data[0]._id}">₹${data[0].price} </h4>
              <h4 class="strike" id="strike_${data[0]._id}">₹${data[0].originalPrice}</h4>
              <i class="fa-solid fa-trash" id="trash_${data[0]._id}" ></i>
              </div>
              <h3></h3>
              <div class="cart-button">
              <i class="fa-solid fa-minus" id="minu_${data[0]._id}"></i>
              <span  id="quantity_${data[0]._id}">${basket[i].item}</span>
              <i class="fa-solid fa-plus" id="plus_${data[0]._id}" ></i>
              <h5>${data[0].color[0]}</h5>
              </div>
              </div>
              
              </div>`;
              html2 = ` 
              <div class="cartWraping" >
        <img src="${data[0].productImages[0]}" alt="" width="50%" height="50%">
        <div class="cart-right">
        <h3>${data[0].productName}</h3>
        <div class="price-cart">
        <h3 id="updatedd_${data[0]._id}">₹${data[0].price} </h3>
        <h5 id="quantityy_${data[0]._id}">Quantity:${basket[i].item}</h5>
        </div>
        </div>
        
        </div>`;
              let subtotal = document.querySelector(".subtotal");
              
              let updatecart = document.querySelector(".updateCart");

              let basItem = document.querySelector(".basItem");
      
           sum=0;
           total=0
           for(let i=0;i<basket.length;i++){
            let element=basket[i];
            console.log(element)
            total+=element.total
            sum+=element.item
            
           }
          
           subtotal.innerText = `₹ ${total}`;
           updatecart.innerText = sum;
           basItem.innerText=sum;
        cart_main.addEventListener("click", (e) => {
          
          
          let updatePrice=document.querySelector(`#updatedd_${data[0]._id}`)
          let original_price = document.querySelector(
            `#updated_${data[0]._id}`
          );
          let strike_price = document.querySelector(`#strike_${data[0]._id}`);
          let cart_wrap = document.querySelector(`#cartWrap_${data[0]._id}`);
          let checkout_subtotal= document.querySelector(".checkout_subtotal")    
              let quatity = document.querySelector(`#quantity_${data[0]._id}`);
              let checkoutQuatity=document.querySelector(`#quantityy_${data[0]._id}`)
     

          if (e.target.id == `minu_${data[0]._id}`) {
          
            if( basket[i].item >1){
              e.stopPropagation()
              basket[i].item -= 1;
              quatity.innerText = basket[i].item;
              checkoutQuatity.innerText=basket[i].item;
              console.log(basket, "minus");
              
              original_price.innerText = `₹${data[0].price * basket[i].item}`;
              updatePrice.innerText=`₹${data[0].price * basket[i].item}`
              strike_price.innerText = `₹${
                data[0].originalPrice * basket[i].item
              }`;
              basket[i].total = data[0].price * basket[i].item;
              sum=0
              total=0
              for(let i=0;i<basket.length;i++){
                let element=basket[i];
                console.log(element)
                total+=element.total
                sum+=element.item
                
               }
               updatecart.innerText = sum;
               basItem.innerText=sum;
              subtotal.innerText = `₹ ${total}`;
              checkout_subtotal.innerText=`₹ ${total}`
              sessionStorage.setItem("totalItems",JSON.stringify(sum))
              sessionStorage.setItem("sumTotal",JSON.stringify(total))
              sessionStorage.setItem("cartData",JSON.stringify(basket))
            }
           
          }
          else if (e.target.id == `plus_${data[0]._id}`) {
            e.stopPropagation()
            console.log(basket[i])
            basket[i].item += 1;
            checkoutQuatity.innerText=basket[i].item;
            quatity.innerText= basket[i].item;
            console.log(basket, "plus");
        
            original_price.innerText = `₹${data[0].price * basket[i].item}`;
            updatePrice.innerText=`₹${data[0].price * basket[i].item}`
            strike_price.innerText = `₹${
              data[0].originalPrice * basket[i].item
            }`;
            basket[i].total = data[0].price * basket[i].item;
       
              total+=basket[i].total
              sum+=1
              
             updatecart.innerText = sum;
             basItem.innerText=sum;
            subtotal.innerText = `₹ ${total}`;
            checkout_subtotal.innerText=`₹ ${total}`
            
            sessionStorage.setItem("totalItems",JSON.stringify(sum))
            sessionStorage.setItem("sumTotal",JSON.stringify(total))
            sessionStorage.setItem("cartData",JSON.stringify(basket))
          }
         else if (e.target.id == `trash_${data[0]._id}`) {
            basket.splice(i, 1);
            console.log(basket);
            cart_wrap.style.display = "none";
            sessionStorage.setItem("cartData",JSON.stringify(basket))
          }
      
        });
      }
      cart_main.innerHTML += html;
     
      cart_items.innerHTML+=html2
      sessionStorage.setItem("cartData",JSON.stringify(basket))
    });
});

// -------------------------------------------------

const topArrowBtn=document.getElementById("scroll_to_top_btn");

window.onscroll=function(){
    scrollFunction()
}

function scrollFunction(){
if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topArrowBtn.style.display = "block";
  } else {
    topArrowBtn.style.display = "none";
  }
}

topArrowBtn.addEventListener("click",function(){
    
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
})