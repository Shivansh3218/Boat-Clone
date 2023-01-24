const mainX = document.querySelector(".mainX");
let headingProductShow = document.querySelector(".Heading-product-show")
let productDescription = document.querySelector(".product-description-show")
let productrating = document.querySelector(".rating-of-product-show")
let productpriceshow = document.querySelector(".price-of-product-show")
let productoriginalpriceshow = document.querySelector(".price-of-product-show-old")
const containerX = document.querySelector(".containerX");
let wrapper_container_of_show = document.querySelector(".wrapper-of-two-container")
let  productsavedamt = document.querySelector(".save_your_money_para")


let tranferData = JSON.parse(sessionStorage.getItem("transferdata"));

console.log(tranferData);
const showData = { _id: `${tranferData}` };

fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(showData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].productImages[0], "opp");
    html2 = ` <img class ="main-photo-of-show" src="${data[0].productImages[0]}" alt="">`
    containerX.innerHTML+=html2
    headingProductShow.innerHTML+= data[0].productName
    productrating.innerHTML+= `${data[0].rating} || ${data[0].noOfReviews} reviews`
    productpriceshow.innerHTML+= data[0].price
    productoriginalpriceshow.innerHTML+= data[0].originalPrice
    productsavedamt.innerHTML+= `You Save: ₹ ${
        data[0].originalPrice - data[0].price
      } (${data[0].offer}%)`



  });
let incre = document.getElementById("increment-of-show")
let display = document.getElementById("display-of-counter")
let decrement = document.getElementById("decrement-of-show")
let count = 0
display.innerText = count
function bomb() {
  count++
  display.innerText = count
}
function bomb2() {
  if(count>=1){
   count--
  display.innerText = count
  }
 
}
