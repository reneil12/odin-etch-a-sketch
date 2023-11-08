const sketchContainer = document.querySelector('.sketch-container');
let isHolding = false;

function colorToBlack() {
        sketchContainer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isHolding = true;
            if (e.target.classList.contains('sketch-box')) {
                e.target.style.backgroundColor = 'black';
            }
        });
        
        sketchContainer.addEventListener('mouseup', () => {
            isHolding = false;
        })
        
        sketchContainer.addEventListener('mouseover', (e) => {
            if(isHolding) {
                if (e.target.classList.contains('sketch-box')) {
                    e.target.style.backgroundColor = 'black';
                }
            }
        })
    
    
}

function colorToRandom(){
        sketchContainer.addEventListener('mousedown', (e) => {
            let red = Math.floor(Math.random() * 256)
            let green = Math.floor(Math.random() * 256)
            let blue = Math.floor(Math.random() * 256)
        
            e.preventDefault();
            isHolding = true;
            if (e.target.classList.contains('sketch-box')) {
                e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            }
        });
        
        sketchContainer.addEventListener('mouseup', () => {
            isHolding = false;
        })
        
        sketchContainer.addEventListener('mouseover', (e) => {
            let red = Math.floor(Math.random() * 256)
            let green = Math.floor(Math.random() * 256)
            let blue = Math.floor(Math.random() * 256)
            if(isHolding) {
                if (e.target.classList.contains('sketch-box')) {
                    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                }
            }
        })
    
}

function eraseColor(){
        sketchContainer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isHolding = true;
            if (e.target.classList.contains('sketch-box')) {
                e.target.style.backgroundColor = 'white';
            }
        });
        sketchContainer.addEventListener('mouseup', (e) => {
            isHolding = false;
        });
        sketchContainer.addEventListener('mouseover', (e) => {
            if (isHolding) {
                if (e.target.classList.contains('sketch-box')) {
                    e.target.style.backgroundColor = 'white';
                }
            }
        })
}



function clearGrid(e){
    boxes = document.querySelectorAll('.sketch-box');
        boxes.forEach(box => {
            box.style.backgroundColor = 'white';
        })
}

let blackButton = document.querySelector('.black-button');
blackButton.addEventListener('click',colorToBlack);

let randomButton = document.querySelector('.randomize-button');
randomButton.addEventListener('click', colorToRandom);

let eraserButton = document.querySelector('.eraser-button');
eraserButton.addEventListener('click', eraseColor);

let clearGridButton = document.querySelector('.clear-button');
clearGridButton.addEventListener('click', clearGrid);

let boxes;
let getContainerSize = window.getComputedStyle(sketchContainer).getPropertyValue('width');
let containerSize = parseInt(getContainerSize);


//Create new grid
const newGrid = document.querySelector('.new-grid-button');
newGrid.addEventListener('click', (e) => {
    let nBoxes = prompt("Enter the amount of box in each sides:");
    if (nBoxes > 100 || nBoxes < 1) {
        alert("The amount of boxes you requested may not exceed to 100 and may not be less than 0");
    }
    else if (nBoxes.isInteger === false){
        alert("Please enter a number from 1-100")
    }
    else{
        boxes = document.querySelectorAll('.sketch-box');
        boxes.forEach(box => {
            sketchContainer.removeChild(box);
        })
        let containerSize = parseInt(getContainerSize);
        let boxSize = (containerSize - 2) / nBoxes;
        createBoxes(nBoxes);
    }
})

//Adding _ by _ boxes
function createBoxes(nBoxes){
    let boxSize = (containerSize) / nBoxes;
    for (let i = 1; i <= nBoxes*nBoxes; i++){
        boxes = document.createElement('div');
        boxes.setAttribute('class','sketch-box');
        sketchContainer.appendChild(boxes);
        boxes.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px; border: 1px solid black`)
    }
    
}
createBoxes(16);


