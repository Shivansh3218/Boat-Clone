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

let tranferData = JSON.parse(sessionStorage.getItem("transferdata")) 
        console.log(tranferData)
