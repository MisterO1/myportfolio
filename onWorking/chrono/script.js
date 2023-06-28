'use strict'
let option = "countdown";

// ------  if option = stopwatch -------- //
const chrono = document.querySelector(".stopwatch .chrono");
const startBtn = document.querySelector(".stopwatch .start");
const pauseBtn = document.querySelector(".stopwatch .pause");
const resumeBtn = document.querySelector(".stopwatch .resume");
const resetBtn = document.querySelector(".stopwatch .reset");

let hh = 0;
let mm = 0;
let ss = 0;

let timeout;

let stopwatchIsRunning = false;

const playChrono = () => {
    if (!stopwatchIsRunning) return;

    hh = parseInt(hh);
    mm = parseInt(mm);
    ss = parseInt(ss);

    ss++;

    if (ss==60){
        ss=0;
        mm++
    }
    if (mm==60){
        mm=0;
        hh++;
    }

    // affichage
    if (ss<10){
        ss = "0"+ss
    }
    if (mm<10){
        mm = "0"+mm
    }
    if (hh<10){
        hh = "0"+hh
    }

    chrono.textContent = `${hh}:${mm}:${ss}`

    timeout = setTimeout(playChrono,1000)
}
const start = () => {
    if (!stopwatchIsRunning){
        stopwatchIsRunning = true;
        startBtn.classList.remove("active")
        pauseBtn.classList.add("active")
        playChrono();  
    }
}
const pause = () => {
    if (stopwatchIsRunning){
        stopwatchIsRunning = false;
        pauseBtn.classList.remove("active")
        resumeBtn.classList.add("active")
        resetBtn.classList.add("active")
        clearTimeout(timeout);
    }
}
const resume = () => {
    console.log("not")

    if (!stopwatchIsRunning){
        stopwatchIsRunning = true;
        resumeBtn.classList.remove("active")
        pauseBtn.classList.add("active")
        resetBtn.classList.remove("active")
        playChrono();  
    }
}
const reset = () => {
    if (!stopwatchIsRunning){
        if (option = "stopwatch" ) {
           chrono.textContent = "00:00:00"
            hh = 0;
            mm = 0;
            ss = 0;
            resetBtn.classList.remove("active")
            resumeBtn.classList.remove("active")
            startBtn.classList.add("active") 
        }
        
    }
}

startBtn.addEventListener("click",start)
resumeBtn.addEventListener("click",resume)
resetBtn.addEventListener("click",reset)
pauseBtn.addEventListener("click",pause)

// ------  if option is countdown -------- //
const chronodown = document.querySelector(".countdown .chronodown")
const startBtn_ = document.querySelector(".buttons.countdown .start");
const pauseBtn_ = document.querySelector(".buttons.countdown .pause");
const resumeBtn_ = document.querySelector(".buttons.countdown .resume");
const resetBtn_ = document.querySelector(".buttons.countdown .reset");


let countdownValues = [0,0,0,0,0,0];
let breakPoint = [313,275,247,209,171,133,95,58,20,0] // avec height = 35px
let breakPointPos = [334,296,260,223,186,149,112,74,38,0]
const hour1 = document.querySelector(".hour1");
const hour2 = document.querySelector(".hour2");
const minute1 = document.querySelector(".minute1");
const minute2 = document.querySelector(".minute2");
const second1 = document.querySelector(".second1");
const second2 = document.querySelector(".second2");
const countdownBox = [hour1,hour2,minute1,minute2,second1,second2]

for (let k = 0; k <= 5; k++){
    countdownBox[k].addEventListener("mouseleave", () => {
            for (let i=0; i<=9; i++){
                if ((countdownBox[k].scrollTop >= breakPoint[i]) && (countdownBox[k].scrollTop < breakPoint[i-1])){
                    countdownBox[k].scrollTop = breakPointPos[i]
                    countdownValues[k] = i
                }
            }
            if (countdownBox[k].scrollTop >= breakPoint[0]){
                countdownBox[k].scrollTop = breakPointPos[0]
                countdownValues[k] = 0
            }
        })
}

function goto (timeBox,timeValue){
    if (timeValue == 0){
        timeBox.scrollTop = breakPointPos[timeValue]
        console.log("0 set")
    }else if ((timeBox.scrollTop >= breakPoint[timeValue]) && (timeBox.scrollTop < breakPoint[timeValue-1])){
        timeBox.scrollTop = breakPointPos[timeValue]
        console.log(timeValue + "set")

    }
}


//
let hhh ;
let mmm ;
let sss ;

let timeout_;

let countdownIsRunning = false;

const playChronodown = () => {
    if (!countdownIsRunning) return;

    hhh = parseInt(hhh);
    mmm = parseInt(mmm);
    sss = parseInt(sss);

    sss--;

    if (sss==0){
        if (mmm == 0) {
            if(hhh == 0){return}
            hhh--
            mmm = 59
        }
        mmm--;
        sss = 59;
    }

    // affichage en 2 chiffres
    if (sss<10){
        sss = "0"+sss
    }
    if (mmm<10){
        mmm = "0"+mmm
    }
    if (hhh<10){
        hhh = "0"+hhh
    }

    countdownValues = [Math.trunc(hhh/10),hhh%10,Math.trunc(mmm/10),mmm%10,Math.trunc(sss/10),sss%10]
    for (let i=0; i<=5; i++){
        goto(countdownBox[i],countdownValues[i])
    }

    timeout_ = setTimeout(playChronodown,1000)
}
const start_ = () => {
    if (!countdownIsRunning){
        countdownIsRunning = true;
        startBtn_.classList.remove("active")
        pauseBtn_.classList.add("active")

        hhh = countdownValues[0]*10+countdownValues[1]
        mmm = countdownValues[2]*10+countdownValues[3]
        sss = countdownValues[4]*10+countdownValues[5]
        playChronodown();  
    }
}
const pause_ = () => {
    if (countdownIsRunning){
        countdownIsRunning = false;
        pauseBtn_.classList.remove("active")
        resumeBtn_.classList.add("active")
        resetBtn_.classList.add("active")
        clearTimeout(timeout_);
    }
}
const resume_ = () => {
    // console.log("not")

    if (!countdownIsRunning){
        countdownIsRunning = true;
        resumeBtn_.classList.remove("active")
        pauseBtn_.classList.add("active")
        resetBtn_.classList.remove("active")
        playChronodown();  
    }
}
const reset_ = () => {
    // chronodown.textContent = "00:00:00"
    hhh = 0;
    mmm = 0;
    sss = 0;
    resetBtn_.classList.remove("active")
    resumeBtn_.classList.remove("active")
    startBtn_.classList.add("active") 
}

startBtn_.addEventListener("click",start_)
resumeBtn_.addEventListener("click",resume_)
resetBtn_.addEventListener("click",reset_)
pauseBtn_.addEventListener("click",pause_)

// set switch option
const btnStopwatch = document.querySelector(".buttons.stopwatch")
const btnCountdown = document.querySelector(".buttons.countdown")

const optionStopWatch = document.querySelector(".options .stopwatch")
const optionCountDown = document.querySelector(".options .countdown")

function switchOption (opt) {
    if (stopwatchIsRunning) {
        alert("time is running")
        return
    }
    if (opt == "countdown") {
        optionCountDown.classList.add("active")
        optionStopWatch.classList.remove("active")
        option = "countdown"

        btnStopwatch.classList.remove("active")
        btnCountdown.classList.add("active")
    }else if (opt == "stopwatch"){
        optionCountDown.classList.remove("active")
        optionStopWatch.classList.add("active")
        option = "stopwatch"

        btnStopwatch.classList.add("active")
        btnCountdown.classList.remove("active")
    }
}
optionStopWatch.addEventListener("click",()=>{
    switchOption("stopwatch")
})
optionCountDown.addEventListener("click",()=>{
    switchOption("countdown")
})







