
const displayBoard = function(){
  const boardContainerNode = document.getElementById("board-container")
  for(let numbers = 1; numbers <=76; numbers++){
    let newElement = document.createElement("div")
    newElement.classList.add('cells')
    newElement.innerText = numbers;
    boardContainerNode.appendChild(newElement)
  }
}
const clickedButton = function(){
  let randomNumber = Math.floor(Math.random() * 76)
  let choosenNumber = document.querySelectorAll('.cells')
  choosenNumber[randomNumber-1].style.color = "white";
  // console.log(randomNumber); // if i uncomment this it will show up random numbers on the console :)
}

window.onload = function() {
  displayBoard()

}
