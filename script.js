
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

// grid (generates html collection)
const gridSquare = document.getElementsByClassName("grid-square")

// buttons
const buttons = document.querySelectorAll("button")
const blackColor = document.getElementById("black")
const grayscaleColor = document.getElementById("grayscale")
const rainbowColor = document.getElementById("rainbow")
const colorPickerButton = document.getElementById("pick")
const colorPicker = document.getElementById("color-picker")
const erase = document.getElementById("erase")
const reset = document.getElementById("reset")

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
colorPicker.addEventListener("change", function() {
    colorTheme = "colorPicker"
    colorPick = this.value
    colorPickerButton.style.backgroundColor = colorPick
    colorPickerButton.style.border = `2px solid ${colorPick}`
})
erase.addEventListener("click", function() {
    colorTheme = "erase"
})

const setColor = (e) => {
    
    switch (colorTheme) {
        case "black":
            colorPick = "black";
            e.target.style.backgroundColor = colorPick;
            break;
        case "rainbow":
            let rainbowOptions = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
            let rainbowSelection = rainbowOptions[Math.floor(Math.random() * rainbowOptions.length)];
            colorPick = rainbowSelection;
            e.target.style.backgroundColor = colorPick;
            break;
        case "grayscale":
            colorPick = "#E8E8E8";
            e.target.style.backgroundColor = colorPick;
            break;
        case "colorPicker":
            colorPick = colorPicker.value
            e.target.style.backgroundColor = colorPick
            break;
        case "erase":
            colorPick = "white";
            e.target.style.backgroundColor = colorPick;
            break;
    }
}
// displays which button is active

let activeButton = false


const displayActiveButton = (e) => {
    switch (colorTheme) {
        case "black":
            grayscaleColor.classList.remove('active')
            rainbowColor.classList.remove('active')
            erase.classList.remove('active')
            blackColor.classList.add('active')
            break;
        case "grayscale":
            blackColor.classList.remove('active')
            rainbowColor.classList.remove('active')
            erase.classList.remove('active')
            grayscaleColor.classList.add('active')
            break;
        case "rainbow":
            grayscaleColor.classList.remove('active')
            blackColor.classList.remove('active')
            erase.classList.remove('active')
            rainbowColor.classList.add('active')
            break;
        case "erase":
            grayscaleColor.classList.remove('active')
            blackColor.classList.remove('active')
            rainbowColor.classList.remove('active')
            erase.classList.add('active')
            break;
        case "colorPicker":
            grayscaleColor.classList.remove('active')
            blackColor.classList.remove('active')
            rainbowColor.classList.remove('active')
            erase.classList.remove('active')
            colorPickerButton.style.backgroundColor = colorPick
            break;

    }
}

buttons.forEach(button => {
    button.addEventListener("click", displayActiveButton)
})

// grid hover toggling
let toggleState = false;

const toToggle = () => {

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

reset.addEventListener("click", updateGrid)