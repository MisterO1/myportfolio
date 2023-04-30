// switch to register/login form
const btnRegister = document.querySelector(".register a");
const btnLogin = document.querySelector(".login a");
const registerForm = document.querySelector('.register-box');
const loginForm = document.querySelector('.login-box') ;

btnRegister.addEventListener("click",() => {
    loginForm.classList.toggle("inactive")
    registerForm.classList.toggle("active")
})
btnLogin.addEventListener("click",() => {
    loginForm.classList.toggle("inactive")
    registerForm.classList.toggle("active")
})

// open and close wrapper via login button & close icon
const btn = document.querySelector(".navbar button.btn");
const closeWrapper = document.querySelector(".wrapper > div.close");
const wrapper = document.querySelector(".wrapper");

btn.addEventListener("click",() => {
    wrapper.classList.toggle("active")
})
console.log(closeWrapper)
closeWrapper.addEventListener("click",() => {
    wrapper.classList.remove("active")
})
