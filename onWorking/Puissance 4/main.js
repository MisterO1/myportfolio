const allBox = document.querySelectorAll('.box');
const allEntry = document.querySelectorAll('.entry');
const allPion = document.querySelectorAll('.pion');

console.log(document.querySelector('.entry > .pion'))

let draggedPion = null ;
let step = 1;
for (let i=0; i< allPion.length; i++) {
    const pion = allPion[i];

    pion.addEventListener('dragstart',function(){
        draggedPion = pion;
        setTimeout(function(){
            pion.style.display = 'none';
        }, 0)
    });

    pion.addEventListener('dragend',function(){
        setTimeout(function(){
            draggedPion.style.display = 'block';
            draggedPion = null;
        }, 0)
    });

    for (let j=0; j< allEntry.length; j++){
        const entry = allEntry[j];

        entry.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        entry.addEventListener('dragenter', function(e){
            e.preventDefault();
            // this.style.backgroundColor = 'rgba(252,252,252,0.4)';
        })
        entry.addEventListener('dragleave', function(e){
            // this.style.backgroundColor = 'rgba(252,252,252,0.6)';
        })

        entry.addEventListener('drop', function(){
            this.append(draggedPion);
            step ++
            // this.style.backgroundColor = 'rgba(252,252,252,0.6)';
        })      
    }
}

// movement of pion from entry to that box


//     document.getElementById('div3').appendChild(document.getElementById('div1'))
// }
for (let i=0; i< allEntry.length; i++){
    const entry = allEntry[i];
    document.querySelector('.A1').appendChild(document.querySelector('.entry > .pion'))
    
}

