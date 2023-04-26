const allBox = document.querySelectorAll('.box');
const allPion = document.querySelectorAll('.pion');



function beDragged(s){
    if (s%2 == 1){
        for (let k=0; k<=2; k++){
            allPion[k].setAttribute('draggable', true);
        }
        for (let k=3; k<=5; k++){
            allPion[k].setAttribute('draggable', false);
            // allPion[k].removeAttribute('draggable');
        }
    }
    else {
        for (let k=0; k<=2; k++){
            allPion[k].setAttribute('draggable', false);
            // allPion[k].removeAttribute('draggable');
        }
        for (let k=3; k<=5; k++){
            allPion[k].setAttribute('draggable', true);
        }
    }
}

let draggedPion = null ;
var step = 1 ;

console.log("step Ext"+step)
for (let i=0; i< allPion.length; i++) {
    const pion = allPion[i];
    
    pion.addEventListener('dragstart',function(){
        draggedPion = pion;
        console.log("dragstart")
        setTimeout(function(){
            pion.style.display = 'none';
        }, 0)
    });


    pion.addEventListener('dragend',function(){
        console.log("dragend")

        step ++
        console.log("step Int "+step)

        setTimeout(function(){
            draggedPion.style.display = 'block';
            draggedPion = null;
        }, 0)
    });

    for (let j=0; j< allBox.length; j++){
        const box = allBox[j];

        box.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        box.addEventListener('dragenter', function(e){
            e.preventDefault();
            this.style.backgroundColor = 'rgba(252,252,252,0.4)';
        })
        box.addEventListener('dragleave', function(e){
            this.style.backgroundColor = 'rgba(252,252,252,0.6)';
        })

        box.addEventListener('drop', function(){
            this.append(draggedPion);
            
            this.style.backgroundColor = 'rgba(252,252,252,0.6)';
        })
    }
}





