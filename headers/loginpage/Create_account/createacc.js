
const createAccountBtn=document.querySelector(".creat_account_btn");

createAccountBtn.addEventListener("click",storeInfo);

function storeInfo(){
    const fName=document.querySelector(".input_fname").value;
    const lName=document.querySelector(".input_lname").value;
    const email=document.querySelector(".input_email").value;
    const pswd=document.querySelector(".input_pswd").value;
    
    localStorage.setItem("fname",fName);
    localStorage.setItem("lname",lName);
    localStorage.setItem("email",email);
    localStorage.setItem("password",pswd);
}