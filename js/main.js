let x_grid = 16
let y_grid = 16
const parentGrid = document.getElementById('parent-grid')

createGrid()

function createGrid(){
    for(let x = 0; x<x_grid; x++){
        for(let y = 0; y<y_grid; y++){
            let newSquare = document.createElement('div')
            newSquare.classList.add('square')
            parentGrid.appendChild(newSquare)
        }
    }
}
