const sketchContainer = document.querySelector('.sketch-container');
let isHolding = false;

//Changing colors of boxes
sketchContainer.addEventListener('mousedown', (e) => {
    isHolding = true;
    if (e.target.classList.contains('sketch-box')) {
        e.target.style.backgroundColor = 'black';
    }
});

sketchContainer.addEventListener('mouseup', () => {
    isHolding = false;
    console.log(isHolding);
})

sketchContainer.addEventListener('mousemove', (e) => {
    if(isHolding) {
        if (e.target.classList.contains('sketch-box')) {
            e.target.style.backgroundColor = 'black';
        }
    }
})

//Adding _ by _ boxes
let boxes;
let nBoxes = 16*16;
let boxSize = 43.625;
function createBoxes(){
    for (let i = 1; i <= nBoxes; i++){
        boxes = document.createElement('div');
        boxes.setAttribute('class','sketch-box');
        sketchContainer.appendChild(boxes);
        boxes.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px; border: 1px solid black;`)
    }
    
}
createBoxes();


