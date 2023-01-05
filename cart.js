let cartArray=JSON.parse(sessionStorage.getItem("cartData"))
let cartmain=document.querySelector(".cart_main");
let emptybasket = document.querySelector(".empty");
  const paybtnn = document.querySelector(".payment_Checkout_bottom_btn")
  const paybtnn2 = document.querySelector(".payment_Checkout_bottom_paybtn")
  const paymidd1 =document.querySelector(".payment_Checkout_middle1")
  const paymidd2 =document.querySelector(".payment_Checkout_middle2")
  const paymentt_Checkout_top2_1 = document.querySelector(".payment_Checkout_top2_1 ")
  const paymentt_Checkout_top2_2 = document.querySelector(".payment_Checkout_top2_2")
  const clearStorage1 = document.querySelector(".clearStorage")
  const address=document.querySelector(".addressy")
  const summary=document.querySelector(".summaryy")
  const closy = document.querySelector(".closyy")
  const paymentt_Checkout=document.querySelector(".payment_Checkout")
  clearStorage1.addEventListener("click",()=>{
    sessionStorage.clear();
  })
  paybtnn.addEventListener("click",()=>{
      if(paymidd1.style.display="block"){
          paymidd1.style.display="none"
              paymidd2.style.display="block"
      }
      if(paymentt_Checkout_top2_1.style.display="flex"){
          paymentt_Checkout_top2_1.style.display="none";
          paymentt_Checkout_top2_2.style.display="flex"
      }
     if(paybtnn.style.display="block"){
      paybtnn2.style.display="block";
      paybtnn.style.display="none";
     }
   
  })
  
  address.addEventListener("click",()=>{
      if(paymidd1.style.display="block"){
          paymidd1.style.display="none"
              paymidd2.style.display="block"
      }
      if(paymentt_Checkout_top2_1.style.display="flex"){
          paymentt_Checkout_top2_1.style.display="none";
          paymentt_Checkout_top2_2.style.display="flex"
      }
      if(paybtnn.style.display="block"){
          paybtnn2.style.display="block";
          paybtnn.style.display="none";
         }
   
  })
  summary.addEventListener("click",()=>{
      if(paymidd1.style.display="none"){
          paymidd1.style.display="block"
              paymidd2.style.display="none"
      }
      if(paymentt_Checkout_top2_1.style.display="none"){
          paymentt_Checkout_top2_1.style.display="flex";
          paymentt_Checkout_top2_2.style.display="none"
      }
      if(paybtnn.style.display="none"){
          paybtnn2.style.display="none";
          paybtnn.style.display="block";
         }
      
  })
  
  closy.addEventListener("click",()=>{
      paymentt_Checkout.style.display="none"
      aside.style.filter="none"
  })
  
  const payoutt = document.querySelector(".payment_Checkout")
  const check = document.querySelector(".checkyy")
  
  check.addEventListener("click",()=>{
      payoutt.style.display="block"
      aside.style.filter="blur(8px)"
  })
  let total1=0;
  let sum1=0;

  for(let i=0;i<cartArray.length;i++){
    const data = { _id : `${cartArray[i].id._id}` };
    fetch(" https://boat-backend-1ffa.onrender.com/boat/Products", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((datas)=>{
           html = ` 
           <div class="cartWrap" id="cartWrap_${datas[0]._id}" >
           <img src="${datas[0].productImages[0]}" alt="" width="50%" height="50%">
           <div class="cart-right">
           <h5>${datas[0].productName}</h5>
           <div class="price-cart">
           <h4 id="updated_${datas[0]._id}">₹${datas[0].price} </h4>
          <h4 class="strike" id="strike_${datas[0]._id}">₹${datas[0].originalPrice}</h4>
           <i class="fa-solid fa-trash" id="trash_${datas[0]._id}" ></i>
          
           </div>
           <div class="cart-button">
               <i class="fa-solid fa-minus" id="minu_${datas[0]._id}"></i>
               <span id="quantity_${datas[0]._id}">${cartArray[i].item}</span>
               <i class="fa-solid fa-plus" id="plus_${datas[0]._id}" ></i>
               <h5>${datas[0].color[0]}</h5>
           </div>
           
           </div>
           
           </div>
     `;
     html2 = ` 
<div class="cartWraping" >
<img src="${datas[0].productImages[0]}" alt="" width="50%" height="50%">
<div class="cart-right">
<h3>${datas[0].productName}</h3>
<div class="price-cart">
<h3 id="updatedd_${datas[0]._id}">₹${datas[0].price*cartArray[i].item} </h3>
<h5 id="quantityy_${datas[0]._id}">Quantity:  ${cartArray[i].item}</h5>
</div>
</div>

</div>`;
let reloadbas=document.querySelector(".basItem")
let reloadCart=document.querySelector(".updateCart")
let reloadTotal = document.querySelector(".subtotal")
 let tootalItem=JSON.parse(sessionStorage.getItem("totalItems")) 
  let sumdata=JSON.parse(sessionStorage.getItem("sumTotal"))  
  reloadCart.innerText=tootalItem
  reloadbas.innerText=tootalItem
  reloadTotal.innerText=`₹${sumdata}`

     
     cartmain.addEventListener("click", (e) => {
      let updatePricee=document.querySelector(`#updatedd_${datas[0]._id}`)
      let checkoutQuatityy=document.querySelector(`#quantityy_${datas[0]._id}`)
     
      let subtotall = document.querySelector(".subtotal");
      let quantity = document.querySelector(`#quantity_${datas[0]._id}`);
      let basItemm = document.querySelector(".basItem");
      let updatecartt = document.querySelector(".updateCart");
      let originalprice = document.querySelector(
        `#updated_${datas[0]._id}`
      );
      let strikeprice = document.querySelector(`#strike_${datas[0]._id}`);
      let cartwrap = document.querySelector(`#cartWrap_${datas[0]._id}`);
      let checkoutsubtotal= document.querySelector(".checkout_subtotal");

      sum1=0;
      total1=0
      
      for(let i=0;i<cartArray.length;i++){
       let element=cartArray[i];
       total1+=element.total
       sum1+=element.item
       
      }
      if (e.target.id == `minu_${datas[0]._id}`) {
        if(cartArray[i].item > 1){
          cartArray[i].item -= 1;
          quantity.innerText= cartArray[i].item;
          checkoutQuatityy.innerText=cartArray[i].item;
          sum1=0
          total1=0
          for(let i=0;i<cartArray.length;i++){
            let element=cartArray[i];
            total1+=element.total
            sum1+=element.item
            
           }
          updatecartt.innerText = sum1;
          basItemm.innerText = sum1;
          originalprice.innerText = `₹${datas[0].price * cartArray[i].item}`;
          updatePricee.innerText=`₹${datas[0].price * cartArray[i].item}`;
          strikeprice.innerText = `₹${
            datas[0].originalPrice * cartArray[i].item
          }`;
          cartArray[i].total = datas[0].price * cartArray[i].item;
          subtotall.innerText = `₹ ${total1}`;
          checkoutsubtotal.innerText=`₹ ${total1}`
          sessionStorage.setItem("cartData",JSON.stringify(cartArray))
        }
       
      }
      
      if (e.target.id == `plus_${datas[0]._id}`) {
        cartArray[i].item += 1;
        quantity.innerText= cartArray[i].item;
        checkoutQuatityy.innerText=cartArray[i].item;
        total1+=cartArray[i].total
              sum1+=1
        updatecartt.innerText = sum1;
        basItemm.innerText = sum1;
        originalprice.innerText = `₹${datas[0].price * cartArray[i].item}`;
        updatePricee.innerText=`₹${datas[0].price * cartArray[i].item}`;
        strikeprice.innerText = `₹${
          datas[0].originalPrice * cartArray[i].item
        }`;
        
        cartArray[i].total = datas[0].price * cartArray[i].item;
        subtotall.innerText = `₹ ${total1}`;
        checkoutsubtotal.innerText=`₹ ${total1}`
        sessionStorage.setItem("cartData",JSON.stringify(cartArray))
      }
      if (e.target.id == `trash_${datas[0]._id}`) {
        cartArray.splice(i, 1);
        cartwrap.style.display = "none";
        sessionStorage.setItem("cartData",JSON.stringify(cartArray))
      }
    });

     cartmain.innerHTML+=html
     const cart_items=document.querySelector(".cart_items")
cart_items.innerHTML+=html2
        
})


  }