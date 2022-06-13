
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

// grid
const gridSquare = document.getElementsByClassName("grid-square")

// buttons
const blackColor = document.querySelector("#black")
const grayscaleColor = document.querySelector("#grayscale")
const rainbowColor = document.querySelector("#rainbow")
const erase = document.querySelector("#erase")

let colorPick;
let colorTheme;

// sets the color trough buttons
blackColor.addEventListener("click", function() {
    colorTheme = "black";
});
grayscaleColor.addEventListener("click", function() {
    colorTheme = "grayscale"
})
rainbowColor.addEventListener("click", function() {
    colorTheme = "rainbow";
});
erase.addEventListener("click", function() {
    colorTheme = "erase"
})

const setColor = (e) => {
    
    switch (colorTheme) {
        case "black":
            colorPick = "black";
            e.target.style.backgroundColor = colorPick;
            console.log(colorPick)
            break;
        case "rainbow":
            let rainbowOptions = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];
            let rainbowSelection = rainbowOptions[Math.floor(Math.random() * rainbowOptions.length)];
            colorPick = rainbowSelection;
            e.target.style.backgroundColor = colorPick;
            console.log(colorPick)
            break;
        case "grayscale":
            colorPick = "#E8E8E8";
            e.target.style.backgroundColor = colorPick;
            console.log(colorPick)
            break;
        case "erase":
            colorPick = "white";
            e.target.style.backgroundColor = colorPick;
            break;
    }
}

// grid hover toggling
let toggleState = false;

const toToggle = () => {

    // const gridSquare = document.getElementsByClassName("grid-square")

    // activate the hover
    if (!toggleState) {
        for(let i = 0; i < gridSquare.length; i++) {
            gridSquare[i].addEventListener('mouseenter', setColor);
        };
        toggleState = true;
    // deactivate the hover
    } else {
        for(let i = 0; i < gridSquare.length; i++) {
            gridSquare[i].removeEventListener('mouseenter', setColor);
        };
        toggleState = false;
    }
}
// activate the grid hover on click
grid.addEventListener("click", toToggle);
