const Btn_500=document.querySelector(".cost_btn_500")
const Btn_1000=document.querySelector(".cost_btn_1000")
const Btn_2000=document.querySelector(".cost_btn_2000")
const Btn_5000=document.querySelector(".cost_btn_5000")
const costTag=document.querySelector(".cost_tag")
const Denomination=document.querySelector(".denomination_cost");
const giftcardImg1=document.querySelector(".gift_card_big_img1")
const giftcardImg2=document.querySelector(".gift_card_big_img2")
const giftcardImg3=document.querySelector(".gift_card_big_img3")
const giftcardImg4=document.querySelector(".gift_card_big_img4")
const smallGiftCardCont1=document.querySelector(".small_giftcard_img_containers1")
const smallGiftCardCont2=document.querySelector(".small_giftcard_img_containers2")
const smallGiftCardCont3=document.querySelector(".small_giftcard_img_containers3")
const smallGiftCardCont4=document.querySelector(".small_giftcard_img_containers4")


// ---------------onclick-----------------

Btn_500.addEventListener("click",function(){
    costTag.textContent="₹ 500"
    Denomination.textContent="₹ 500";
    giftcardImg1.style.display="block";
    giftcardImg2.style.display="none";
    giftcardImg3.style.display="none";
    giftcardImg4.style.display="none";

})

Btn_1000.addEventListener("click",function(){
    costTag.textContent="₹ 1000"
    Denomination.textContent="₹ 1000";
    giftcardImg1.style.display="none";
    giftcardImg2.style.display="block";
    giftcardImg3.style.display="none";
    giftcardImg4.style.display="none";
})

Btn_2000.addEventListener("click",function(){
    costTag.textContent="₹ 2000"
    Denomination.textContent="₹ 2000"
    giftcardImg1.style.display="none";
    giftcardImg2.style.display="none";
    giftcardImg3.style.display="block";
    giftcardImg4.style.display="none";
})

Btn_5000.addEventListener("click",function(){
    costTag.textContent="₹ 5000"
    Denomination.textContent="₹ 5000"
    giftcardImg1.style.display="none";
    giftcardImg2.style.display="none";
    giftcardImg3.style.display="none";
    giftcardImg4.style.display="block";
    // giftcardImg4.style.transistion="1s"
})


// --------------onmouseover-------------

smallGiftCardCont1.addEventListener("mouseover",function(){
    giftcardImg1.style.display="block";
    giftcardImg2.style.display="none";
    giftcardImg3.style.display="none";
    giftcardImg4.style.display="none";
})

smallGiftCardCont2.addEventListener("mouseover",function(){
    giftcardImg1.style.display="none";
    giftcardImg2.style.display="block";
    giftcardImg3.style.display="none";
    giftcardImg4.style.display="none";
})

smallGiftCardCont3.addEventListener("mouseover",function(){
    Denomination.textContent="₹ 2000"
    giftcardImg1.style.display="none";
    giftcardImg2.style.display="none";
    giftcardImg3.style.display="block";
    giftcardImg4.style.display="none";
})

smallGiftCardCont4.addEventListener("mouseover",function(){
    giftcardImg1.style.display="none";
    giftcardImg2.style.display="none";
    giftcardImg3.style.display="none";
    giftcardImg4.style.display="block";
})