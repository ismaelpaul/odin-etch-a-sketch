
// slider values
const slider = document.getElementById("range-slider");
const output = document.getElementById("range-grid");
output.textContent = slider.value;

let gridSize = slider.value

slider.oninput = function() {
  output.textContent = this.value;
}

// create grid
const grid = document.getElementById("container-grid")

const createGrid = () => {
    for(let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-square");
        grid.appendChild(div);
    }
};

createGrid();