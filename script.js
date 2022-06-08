
// slider values
const slider = document.getElementById("range-slider");
const output = document.getElementById("range-grid");
output.textContent = slider.value;

// displays slider value
slider.oninput = function() {
  output.textContent = this.value;
}

// create grid default grid 16 x 16
const grid = document.getElementById("container-grid")

const createGrid = () => {

    for(let i = 0; i < 256; i++) {

        const div = document.createElement("div");
        div.classList.add("grid-square");
        grid.appendChild(div);
    }
};

createGrid();

const updateGrid = () => {

    let gridSize = slider.value * slider.value;

    // resets the grid to not overwrite it
    grid.innerHTML = "";

    // changes columns and rows properties on CSS
    grid.style.setProperty("grid-template-columns", `repeat(${slider.value}, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${slider.value}, 2fr)`);

    // display the new grid based on slider value
    for(let i = 0; i < gridSize; i++) {

        const div = document.createElement("div");
        div.classList.add("grid-square");
        grid.appendChild(div);
    }
}

// update the grid when slider is changed by the user
slider.addEventListener("input", updateGrid);


const gridSquare = document.getElementsByClassName("grid-square")
const blackColor = document.querySelector("#black")
const grayscaleColor = document.querySelector("#grayscale")
const rainbowColor = document.querySelector("#rainbow")

const setBlackColor = () => {
    
    // iterate trough every square and attach an event listener to it
    for(var i = 0; i < gridSquare.length; i++) {
        gridSquare[i].addEventListener('mouseover', function(e){
            e.target.style.opacity = 1
            e.target.style.backgroundColor = "black"; 
        }
    )}
}

blackColor.addEventListener("click", setBlackColor);

const setGrayscaleColor = () => {
    
    for(var i = 0; i < gridSquare.length; i++) {
        gridSquare[i].addEventListener('mouseover', function(e){
            e.target.style.opacity = .2
            e.target.style.backgroundColor = "gray";
        }
    )}
}

grayscaleColor.addEventListener("click", setGrayscaleColor);


const setRainbowColor = () => {

    for(var i = 0; i < gridSquare.length; i++) {
        gridSquare[i].addEventListener('mouseover', function(e){
            let rainbowOptions = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];
            let rainbowSelection = rainbowOptions[Math.floor(Math.random() * rainbowOptions.length)];
            e.target.style.backgroundColor = rainbowSelection;
        }
    )}
}

rainbowColor.addEventListener("click", setRainbowColor);
