const addButton = document.querySelector("#add-button");

const plusMinusButton = document.querySelectorAll(".plus-minus-button");
const minusButton = plusMinusButton[0];
const plusButton = plusMinusButton[1];

const assignButton = document.querySelector("#assign-button");
const resetButton = document.querySelector("#reset-button");

let inputNodeNumber = document.querySelector("#input-number");
inputNodeNumber.value = "0";

const rightSection = document.querySelector("#right-section");

let waitingList = document.querySelector("#the-list");

let counter = 0;

const randomiseNumbersUnique = function (num) {
  const allNumbers = [];
  for (let i = 0; i < num; i++) {
    allNumbers.push(i);
  }

  const result = [];

  for (let i = num; i >= 1; i--) {
    const randomPosition = Math.ceil(Math.random() * i);
    result.push(allNumbers[randomPosition - 1]);
    allNumbers.splice(randomPosition - 1, 1);
  }

  return result;
};

addButton.addEventListener("click", () => {
  let inputName = document.querySelector("#input-text");
  waitingList = document.querySelector("#the-list");

  let nameContainer = document.createElement("div");
  nameContainer.classList.add("names");
  nameContainer.innerText = inputName.value;
  waitingList.appendChild(nameContainer);
  inputName.value = "";
});

let count = 0;
assignButton.addEventListener("click", () => {
  let listOfNames = document.querySelectorAll("#the-list > .names");
  inputNodeNumber = document.querySelector("#input-number");
  let totalBoards = parseInt(inputNodeNumber.value);

  let randomisedArray = randomiseNumbersUnique(listOfNames.length);

  if (totalBoards > 0) {
    for (let i = 0; i < listOfNames.length; i++) {
      if (count >= totalBoards) {
        count = 0;
      }
      const parentList = document.getElementById(`${count + 1}`);
      const parentToAppend = parentList.lastChild;
      const nameToAppend = listOfNames[randomisedArray[i]];
      parentToAppend.appendChild(nameToAppend);
      const newLine = document.createElement("hr");
      parentToAppend.appendChild(newLine);
      count++;
    }
  }
});

plusButton.addEventListener("click", () => {
  inputNodeNumber = document.querySelector("#input-number");
  inputNodeNumber.value = parseInt(inputNodeNumber.value) + 1;
});

minusButton.addEventListener("click", () => {
  inputNodeNumber = document.querySelector("#input-number");
  if (parseInt(inputNodeNumber.value) >= 1)
    inputNodeNumber.value = parseInt(inputNodeNumber.value) - 1;
});

resetButton.addEventListener("click", () => {
  rightSection.innerHTML = "";

  const namesToDelete = document.querySelectorAll(".names");
  for (let name of namesToDelete) name.remove();

  inputNodeNumber.value = "0";
  counter = 0;
});

plusButton.addEventListener("click", () => {
  counter++;

  const boardContainer = document.createElement("div");
  boardContainer.setAttribute("id", counter);
  const newBoard = document.createElement("div");
  newBoard.classList.add("board-style");

  const teamNumber = document.createElement("h2");

  boardContainer.appendChild(teamNumber);
  boardContainer.appendChild(newBoard);

  teamNumber.innerText = `Team ${counter}`;

  rightSection.appendChild(boardContainer);
});

minusButton.addEventListener("click", () => {
  const boardToDelete = document.getElementById(`${counter}`);
  boardToDelete.remove();
  counter--;
});
