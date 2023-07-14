const mouseSection = document.querySelector(".v1 .mouse-section");
const cursorSection = document.querySelector(".v1 .cursor-section");
const mouse = document.querySelector(".v1 .mouse");
const cursor = document.querySelector(".v1 .cursor");

let mouseWidth = mouse.offsetWidth;
let mouseHeight = mouse.offsetHeight;
const mouseLimitx = mouse.parentNode.offsetWidth-mouseWidth
const mouseLimity = mouse.parentNode.offsetHeight-mouseHeight

let cursorWidth = cursor.offsetWidth;
let cursorHeight = cursor.offsetHeight;
const cursorLimitx = cursor.parentNode.offsetWidth-cursorWidth
const cursorLimity = cursor.parentNode.offsetHeight-cursorHeight

const coefx_min = cursorLimitx/mouseLimitx ;
const coefy_min = cursorLimity/mouseLimity ;
const factor = 1
const coefx = factor*coefx_min
const coefy = factor*coefy_min

// centrer les

function delimit(value,limitMin,limitMax){
    value = value <= limitMin ? limitMin : value ;
    value = value >= limitMax ? limitMax : value ;
    return value
}
rect = mouse.getBoundingClientRect()
mouseSection.addEventListener('dragover', function(e){
    e.preventDefault();
    mouse.style.cursor = "pointer";

    let a = parseInt(e.x)-parseInt(rect.x)-0.4*mouseWidth-8
    a = delimit(a,0,mouseLimitx)
    mouse.style.left = a + "px"
    aa = delimit(coefx*a,0,cursorLimitx)
    cursor.style.left = aa + "px"

    let b = parseInt(e.y)-parseInt(rect.y)-0.4*mouseHeight
    b = delimit(b,0,mouseLimity)
    mouse.style.top = b + "px"
    bb = delimit(coefy*b,0,cursorLimity)
    cursor.style.top = bb + "px"
    
})
