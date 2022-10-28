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

function removeLine(event) {
  const trashButton = event.target;
  const buttonClassesList = trashButton.className;
  let theClass = buttonClassesList.split(" ")[1];
  const lineToDelete = trashButton.parentNode;

  waitingList = document.querySelector("#the-list");
  lineToDelete.classList.add("names");
  const hrToRemove = lineToDelete.nextElementSibling;
  hrToRemove.remove();
  let name = lineToDelete.firstChild;
  name.classList.add("names");
  waitingList.appendChild(name);

  lineToDelete.remove();
  count = 0;
}

addButton.addEventListener("click", () => {
  let inputName = document.querySelector("#input-text");

  if (inputName.value) {
    waitingList = document.querySelector("#the-list");

    let nameContainer = document.createElement("div");
    nameContainer.classList.add("names");
    nameContainer.innerText = inputName.value;
    waitingList.appendChild(nameContainer);
    inputName.value = "";
  }
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

      const line = document.createElement("div");
      line.classList.add("line-style");
      line.classList.add(`c${i + 1}`);
      const name = document.createElement("span");
      name.innerText = nameToAppend.innerText;
      line.appendChild(name);
      const trashButton = document.createElement("button");

      trashButton.classList.add("trash-button");
      trashButton.classList.add(`c${i + 1}`);
      trashButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
    </svg>`;

      trashButton.addEventListener("click", removeLine);

      line.appendChild(trashButton);

      parentToAppend.appendChild(line);
      const newLine = document.createElement("hr");
      parentToAppend.appendChild(newLine);
      count++;

      const namesToDelete = document.querySelectorAll(".names");
      for (let name of namesToDelete) name.remove();
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

  const lineContainer = document.createElement("div");

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

function removePerson() {
  const trashButton = document.querySelector(".trash-button");

  document.querySelector("div.c1 > span");
}

// const trashButton = document.querySelector(".trash-button");

// assignButton.addEventListener("click", (event) => {
//   console.log(event.target);
// });
