let loginSection = document.querySelector(".login");
let signupSection = document.querySelector(".signup");
let btnSignup = document.querySelectorAll(".btn-signup");
let btnLogin = document.querySelectorAll(".btn-login");
let btnCloseLoginSignupPopup = document.querySelector(".btn-close-login-signup-popup");
let loginSignupSection = document.querySelector(".login-signup-section");
let navBtnLogin = document.querySelector(".list-item-login");

navBtnLogin.addEventListener("click",()=>{
    loginSignupSection.style.display = "flex";
})

btnLogin.forEach(login => login.addEventListener("click",()=>{
    loginSection.style.display = "flex";
    signupSection.style.display = "none"
}));
btnSignup.forEach(signup => signup.addEventListener("click",()=>{
    signupSection.style.display = "flex";
    loginSection.style.display = "none";
}));
btnCloseLoginSignupPopup.addEventListener("click",()=>{
  loginSignupSection.style.display = "none";
})