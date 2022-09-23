const drawContainer = document.querySelector('.main');
let update = () => output.textContent = "Grid Dimensions: " + parseInt(slider.value) + "*" + slider.value; 
let isDrawing = false;
let buttonClick = false;
let shadeClick = false;





//slider variables and events
const slider = document.querySelector('.slider');
const output = document.querySelector('.output');
slider.addEventListener('input', changeSlide);
slider.addEventListener('input', changeGrid);
slider.addEventListener('input', update);


//button variables and events
const colourPicker = document.querySelector('.colourPicker');
const colourBtn = document.querySelector('.chooseColour');
const rainbowPicker = document.querySelector('.rainbowPicker');
const gridLines = document.querySelector('.toggleGrid');
const shader = document.querySelector('.shader');
const eraser = document.querySelector('.eraser');
const reset = document.querySelector('.reset');

colourBtn.addEventListener('click', draw);
rainbowPicker.addEventListener('click', drawRainbow);
gridLines.addEventListener('click', changeGridLine);
// Shade function not working will fix later
// shader.addEventListener('click',shade);
eraser.addEventListener('click',getEraser);
reset.addEventListener('click', resetGrid);







function changeGrid () {
    // Creates rows of empty divs
    for (let i = 0; i < parseInt(slider.value); i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        rows.style.width = '100%';
        rows.style.display = "flex";
        drawContainer.append(rows);
        // fills the div rows with empty div boxes
        for (let j = 0; j < parseInt(slider.value); j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.style.width = " 100%";
            if(buttonClick === false){
                column.style.border = "1px solid black";
            }
            column.style.backgroundColor = "white";
            rows.appendChild(column);
            
        }
    }
}

// targets the empty divs with event listeners and fills with selected colour, mousedown,mousemove,mouseup use to create click and drag
function draw(){
    drawContainer.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = colourPicker.value;
        isDrawing = true;
    });
    drawContainer.addEventListener('mousemove', (e) =>{
        if(isDrawing === true) {
            e.target.style.backgroundColor = colourPicker.value;
        }
    });
    drawContainer.addEventListener('mouseup', (e) =>{
        e.target.style.backgroundColor = colourPicker.value;
        isDrawing = false;
    });
}

function drawRainbow(){
    drawContainer.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = "#" + rainbowColour();
        isDrawing = true;
    });
    drawContainer.addEventListener('mousemove', (e) =>{
        if(isDrawing === true) {
            e.target.style.backgroundColor =  "#" + rainbowColour();
        }
    });
    drawContainer.addEventListener('mouseup', (e) =>{
        e.target.style.backgroundColor =  "#" + rainbowColour();
        isDrawing = false;
    });
}

// Shade function is pretty broken, will come back in the future if able to solve it
/*function shade(){ 
    let opacity  = 0;

    drawContainer.addEventListener('mousedown', (e) => {
        e.target.style.opacity = opacity;
        isDrawing = true;
    });
    drawContainer.addEventListener('mousemove', (e) =>{
        if(isDrawing === true) {
            e.target.style.opacity = opacity += .01 ;
        }
    });
    drawContainer.addEventListener('mouseup', (e) =>{
        e.target.style.opacity = opacity;
        opacity = 0;
        isDrawing = false;
    });
} */

function getEraser(){
    drawContainer.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = "white";
        isDrawing = true;
    });
    drawContainer.addEventListener('mousemove', (e) =>{
        if(isDrawing === true) {
            e.target.style.backgroundColor =  "white";
        }
    });
    drawContainer.addEventListener('mouseup', (e) =>{
        e.target.style.backgroundColor = "white";
        isDrawing = false;
    });
}

function rainbowColour(){
    let randomColour = Math.floor(Math.random()*16777215).toString(16);
    return randomColour;
};

function changeGridLine(){
    buttonClick = !buttonClick;
    changeSlide();
    changeGrid();
}

function changeSlide() {
    while(drawContainer.hasChildNodes()){
        drawContainer.removeChild(drawContainer.lastChild);
    }
}

function resetGrid(){
    changeSlide();
    changeGrid();
}

// sets initial grid and allows for users to begin drawing immediately
changeGrid();
draw();



