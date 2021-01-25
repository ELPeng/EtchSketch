let x_grid = 16
let y_grid = 16
const parentGrid = document.getElementById('parent-grid')
const resetGrid = document.getElementById('reset-button')

createGrid()
const squares = document.querySelectorAll('.square')
Array.from(squares).forEach(square => square.addEventListener('mouseenter', function(){
    square.classList.add('squareGrey')
}))

resetGrid.addEventListener('click', clearGrid)

function createGrid(){
    for(let x = 0; x<x_grid; x++){
        for(let y = 0; y<y_grid; y++){
            let newSquare = document.createElement('div')
            newSquare.classList.add('square')
            parentGrid.appendChild(newSquare)
        }
    }
}

function clearGrid(){
    squares.forEach(square => square.classList.remove('squareGrey'))
}

