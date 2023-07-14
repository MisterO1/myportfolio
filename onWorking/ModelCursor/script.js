const btn =  document.getElementById("btn")
const v1 = document.querySelector(".v1")
const v2 = document.querySelector(".v2")
btn.addEventListener("click",()=>{
    if (btn.textContent == "Version 2"){
        btn.textContent = "Version 1"
    }else{
        btn.textContent = "Version 2"
    }
    v2.classList.toggle("hidden")
    v1.classList.toggle("hidden")

})