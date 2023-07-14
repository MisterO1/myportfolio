const wrapper2 = document.querySelector(".v2");
const mouseSection2 = document.querySelector(".v2 .mouse-section");
const cursorSection2 = document.querySelector(".v2 .cursor-section");
const cursor2 = document.querySelector(".v2 .cursor");

let timeout ;
let i = 0
let di = 0
let j = 0
let dj = 0
let isDown ;

mouseSection2.addEventListener("mousedown",function(e){
    isDown = true
    i = e.clientX
    j = e.clientY
    // console.log(isDown)
})


let ex = document.getElementById("x")
let ey = document.getElementById("y")

let cursor2Width = cursor2.offsetWidth;
let cursor2Height = cursor2.offsetHeight;
const cursor2Limitx = cursor2.parentNode.offsetWidth-cursor2Width
const cursor2Limity = cursor2.parentNode.offsetHeight-cursor2Height

const cursor2LeftInit = cursor2.offsetLeft
const cursor2TopInit = cursor2.offsetTop
const factorX = 3.2
const factorY = 2.4
mouseSection2.addEventListener("mousemove",function(e){
    if(isDown){
        // console.log("i",i)
        // ex.textContent = e.clientX-251
        // ey.textContent = e.clientY-506
        di = e.clientX - i
        dj = e.clientY - j
        i = e.clientX
        j = e.clientY
        val_x = delimit(cursor2.offsetLeft-cursor2LeftInit + di*factorX,0,cursor2Limitx)
        cursor2.style.left = `${val_x}px`
        val_y = delimit(cursor2.offsetTop-cursor2TopInit + dj*factorY,0,cursor2Limity)
        cursor2.style.top = `${val_y }px`
    }
})

wrapper2.addEventListener("mouseup",function(e){
    isDown= false
})
