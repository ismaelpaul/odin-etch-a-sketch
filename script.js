
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
