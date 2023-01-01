const backToLogin=document.querySelector(".back_to_login")

backToLogin.addEventListener("click",function(e){
    e.preventDefault();
    console.log("click");
    window.location.assign("/headers/loginpage/login.html","_self")
})