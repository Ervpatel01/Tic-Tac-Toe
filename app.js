let btn = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let message = document.querySelector(".message");
let newGame = document.querySelector(".new_game");

let turn = true;
let count = 0;

const winPattern = [
  [0 , 1 , 2],
  [3 , 4 , 5],
  [6 , 7 , 8],
  [0 , 3 , 6],
  [1 , 4 , 7],
  [2 , 5 , 8],
  [0 , 4 , 8],
  [2 , 4 , 6],
];

const resetgame = () => {
  count = 0;
  turn = true;
  enableBtns();
  message.innerText = "";
  newGame.classList.add("hide");
};

btn.forEach((btn) => {
  btn.addEventListener("click" , () => {
    if(turn) {
      btn.textContent = "O";
      turn = false; 
      count++;
    } else {
      btn.textContent = "X";
      turn = true;
      count++;
    }
    btn.disabled = true;
    
    if(count == 9) {
      resetgame();
    };

    checkWinner();
  })
});



const disableBtns = () => {
  for(let val of btn) {
    val.disabled = true;
  }
};

const enableBtns = () => {
  for(let val of btn) {
    val.disabled = false;
    val.innerText = "";
  }
};

const checkWinner = () => {
  for(pattern of winPattern) {
  
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != "") {
      if(pos1 == pos2 && pos2 == pos3) {
        message.innerText = `Winner is ${pos1}`;
        newGame.classList.remove("hide");
        disableBtns();
      }
    }
  }
};

reset.addEventListener("click" , resetgame);
newGame.addEventListener("click" , resetgame);