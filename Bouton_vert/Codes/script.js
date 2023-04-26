var memory = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26] ;
var trmax = 7 ;
var tr = trmax+1 ;


function newButton(s){
    if (s==0){
        var NumButton=100;
        // var NumButtonIndex=26;
    }
    else{
        var NumButtonIndex = Math.floor(Math.random()*memory.length) ;
        NumButton= memory[ NumButtonIndex ] ; // choisit un nombre aléatoire
        memory.splice(NumButtonIndex,1); // le nombre choisi ne sera plus chosi une nouvelle fois
    }
    // let NumButtonIndex = memory.indexOf(NumButton) Bon à savoir
    
    console.log(memory)
    let nextButton = document.getElementById(NumButton); // Selectionne le button correspondant au nombre aléatoire
    nextButton.style.background = "blue"; // il change la couleur du fond du bouton en vert
    nextButton.style.color = "aliceblue" ;
    nextButton.style.border = " 3px solid aliceblue" ;
    
    tr-- ;
    if (tr>1){document.getElementById("tr").innerHTML = `Il reste ${tr} tours`}
    else if (tr==1) {document.getElementById("tr").innerHTML = `Il reste ${tr} tour` } 
    else {document.getElementById("tr").innerHTML = `MERCI D'AVOIR JOUER`; document.getElementById("100").innerHTML = `JEU TERMINE` }
}

const ListButtons= document.querySelectorAll(".btn"); // je selection la liste des bouttons
document.addEventListener("DOMContentLoaded",newButton(0))// Initialisation du Jeux à chaque chargement de la page

// un nouveau boutton vert après chaque clique sur un bouton vert
for (let Btn of ListButtons){
    Btn.addEventListener("click",()=>{
        if (Btn.id == 100){
            Btn.style.background = "rgb(24, 118, 145)";
            Btn.style.color = "aliceblue";
            Btn.style.border = " 1px solid black" ;
            document.getElementById("100").innerHTML = `JEU EN COURS`
            newButton()
        }
        else if (Btn.style.background == "blue"){ 
            Btn.style.background = "rgb(30,30,30)";
            Btn.style.color = "rgb(30,30,30)";
            Btn.style.border = " 2px solid black" ;
            newButton()
        }
    })
}

