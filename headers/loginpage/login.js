const forgotpswd=document.querySelector(".forgot_pswd");
const creatAcc=document.querySelector(".create_acc");


forgotpswd.addEventListener("click",function(e){
    e.preventDefault()
    console.log("recover")
    window.location.assign("/headers/loginpage/Recover_pswd/recoverpswd.html","_self");
})

creatAcc.addEventListener("click",function(e){
    e.preventDefault();
    window.location.assign("/headers/loginpage/Create_account/createacc.html","_self");
})

const loginBtn=document.querySelector(".login_btn");

loginBtn.addEventListener("click",validateData)

function validateData(){
    // e.preventDefault();
    const inputEmail=document.querySelector(".input_email").value;
    const userPswd=document.querySelector(".pswd").value;

    let getEmail=localStorage.getItem("email");
    let getPswd=localStorage.getItem("password");

    if(inputEmail==getEmail){
        if(userPswd==getPswd){
            alert("Login Successful");
        }
        else{
            alert("Please enter correct password");
        }
    }
    else{
        alert("Invalid details")
    }

}