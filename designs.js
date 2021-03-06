// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const sizePicker = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(event) {
  event.preventDefault();
  
    let height =  document.getElementById('inputHeight').value;
  let width =  document.getElementById('inputWidth').value;
  
  makeGrid(height, width);
});
/*
**@desc Function that creates a grid using 2 parameters
**@param height which creates the grid rows and 
**@param width which creates the grid columns
**Added event listeners to allow user to choose colors 
**To add to each cell of the grid */

function makeGrid(height, width) {
  canvas.innerHTML = '';
  
  for (let i = 0; i < height; i++) {
    let row = document.createElement("tr");
    
    for (let j = 0; j < width; j++) {
      let cell = document.createElement("td");
      row.appendChild(cell);
      cell.addEventListener("click", function (event) {
        let color = document.getElementById('colorPicker').value;
        cell.style.backgroundColor = color;
      })
    }
    canvas.appendChild(row);
  }  
};


