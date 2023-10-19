
// funkcja rysująca tablicę gry
function createBoard() {
  let rowsNumber = gameSettings.getRowsNumber();
  //divPlayerBoard - cała tablica gry
  const divPlayerBoard = document.createElement("div");
  document.body.appendChild(divPlayerBoard);
  divPlayerBoard.classList.add("playerBoard");

  for (let j = 0; j < rowsNumber; j++) {
    //divBoxPlayer - pojedyńczy wiersz gry - zawiera kulki gracza, kulki wyniku
    const divBoxPlayer = document.createElement("div");
    divPlayerBoard.appendChild(divBoxPlayer);
    divBoxPlayer.classList.add("boxPlayer");
    //divPlayerChoic - div zawierający kulki wyboru koloru gracza
    const divPlayerChoice = document.createElement("div");
    divBoxPlayer.appendChild(divPlayerChoice);
    divPlayerChoice.classList.add("playerChoice");
    for (let i = 0; i < 4; i++) {
      //spanPlayer - pojedyńcz kulka do gry - wybór koloru gracza
      const spanPlayer = document.createElement("span");
      divPlayerChoice.appendChild(spanPlayer);
      spanPlayer.classList.add("player");
    }
    //divBosResult - div z małymi kulkami, które oznaczają zgodność koloru gracza z wyborem koloru komputera
    const divBoxResult = document.createElement("div");
    divBoxPlayer.appendChild(divBoxResult);
    divBoxResult.classList.add("boxResult");
    for (let i = 0; i < 4; i++) {
      //spanResult - pojedyńcz kulka do sprawdzająca wynik wyboru gracza i komputera
      const spanResult = document.createElement("span");
      divBoxResult.appendChild(spanResult);
      spanResult.classList.add("result");
    }
  }
  //btnCheckMove - przycisk obok wiersza, po kliknięciu następuje sprawdzenie kolorów i przejście do następnego wiersza
  const btnCheckMove = document.createElement("button");
  const divBoxResultChild = document.querySelector(
    ` .playerBoard :nth-child(${rowsNumber})`
  );
  divBoxResultChild.appendChild(btnCheckMove);
  btnCheckMove.classList.add("checkMove");
  btnCheckMove.textContent = "OK";
  btnCheckMove.style.display = "none";
  //btnStart - przycisk Start
  const btnStart = document.createElement("button");
  //btnReset - przycisk Reset
  const btnReset = document.createElement("button");
  //wrapDivBtn - dib który zawiera przycisk Start i Reset
  const wrapDivBtn = document.createElement("div");
  divPlayerBoard.appendChild(wrapDivBtn);
  wrapDivBtn.classList.add("wrapDivBtn");
  wrapDivBtn.appendChild(btnStart);
  wrapDivBtn.style.height = "7%";
  btnStart.textContent = "Start";
  btnStart.classList.add("buttonStart");
  wrapDivBtn.appendChild(btnReset);
  btnReset.textContent = "Reset";
  btnReset.classList.add("buttonReset");
}

//klasa zawierająca podstawowe ustawienia gry, liczbę wierszy, przechowuje dane opoziomie gry i kolorach
class GameSettings {
  constructor() {
    this.rowsNumber = 10;
    this.level = 4;
    this.colors = [
      "rgb(203, 31, 31)",
      "rgb(24, 149, 24)",
      "rgb(36, 36, 165)",
      "rgb(210, 210, 44)",
      "rgb(221, 221, 202)",
      "rgb(83, 235, 235)",
    ];
    // this.colors = ["red", "green", "blue", "yellow", "beige", "orange"];
    this.getRowsNumber = () => this.rowsNumber;
    this.getColors = () => this.colors;
    this.getLevel = () => this.level;
  }
}
// funkcja która po uruchomieniu strony wyświetla informacje o grze, informacje na początku, o pokolorowaniu kółek, wygranej i przegranej
function gameInfoBoard(infoBoard) {
  let rowsNumber = gameSettings.rowsNumber;
  gameLevel();
  const btnEasy = document.querySelector(".btnGameBoardInfo:nth-of-type(1)");
  const btnMedium = document.querySelector(".btnGameBoardInfo:nth-of-type(2)");
  const btnExpert = document.querySelector(".btnGameBoardInfo:nth-of-type(3)");
  const btnInfoOk = document.querySelector(".btnGameBoardInfo:nth-of-type(4)");
  const divInfoBoard = document.querySelector(".gameBoardInfo");
  btnEasy.classList.add("gameLevel");
  btnEasy.addEventListener("click", () => {
    btnEasy.classList.add("gameLevel");
    btnMedium.classList.remove("gameLevel");
    btnExpert.classList.remove("gameLevel");
    clearLevel();
    gameSettings.level = 4;
    gameLevel();
  });
  btnMedium.addEventListener("click", () => {
    btnEasy.classList.remove("gameLevel");
    btnMedium.classList.add("gameLevel");
    btnExpert.classList.remove("gameLevel");
    clearLevel();
    gameSettings.level = 5;
    gameLevel();
  });
  btnExpert.addEventListener("click", () => {
    btnEasy.classList.remove("gameLevel");
    btnMedium.classList.remove("gameLevel");
    btnExpert.classList.add("gameLevel");
    clearLevel();
    gameSettings.level = 6;
    gameLevel();
  });
  btnInfoOk.addEventListener("click", () => {
    divInfoBoard.style.zIndex = "-1";
  });
  const spanInfo = document.querySelectorAll(".spanGameBoardInfo");
  const playerChoiceGameBoardInfo = document.querySelector(
    ".playerChoiceGameBoardInfo"
  );
  const boxResultInfo = document.querySelector(".boxResultGameBoardInfo");
  if (infoBoard == "info") {
    spanInfo[0].textContent =
      "W grze należy odgadnąć kod wygenerowany przez komputer. Kod składa się z 4 kolorów, które mogą się powtarzać (np. kod może składać się tylko z 4 kolorów czerwonych). Poniżej możliwe koloru do wyboru";
    spanInfo[1].textContent =
      "po kliknięciu przycisku OK komputer ocenia Twój kod, za każdy kolor w prawidłowym miesjcu masz czarną kropkę, za właściwy kolor w niewłaściwym miejscu masz szarą kropkę, pusta kropka oznacza, że jeden z kolorów jest nieprawidłowy";
    spanInfo[2].textContent = "wybierz poziom gry";
    playerChoiceGameBoardInfo.style.border = "none";
  } else if (infoBoard == "empty") {
    divInfoBoard.style.zIndex = "1";
    spanInfo[0].textContent = "Musisz pokolorować wszystkie pola";
    spanInfo[1].textContent = "";
    spanInfo[2].textContent = "";
    clearLevel();
    gameLevel(4);
    boxResultInfo.style.display = "none";
    btnEasy.style.display = "none";
    btnMedium.style.display = "none";
    btnExpert.style.display = "none";
    btnInfoOk.addEventListener("click", () => {
      divInfoBoard.style.zIndex = "-1";
    });
  } else if (infoBoard == "win") {
    divInfoBoard.style.zIndex = "1";
    spanInfo[0].textContent = `Gratulacje :)`;
    spanInfo[1].textContent = "wygrałeś !!!";
    spanInfo[2].textContent = `odgadłeś kod po ${11 - rowsNumber} próbie`;
    spanInfo.forEach((info) => {
      info.style.textAlign = "center";
      info.style.fontSize = "25px";
      info.style.color = "yellow";
    });
    clearLevel();
    gameLevel(4, draw.getAiChoice());
    boxResultInfo.style.display = "none";
    btnEasy.style.display = "none";
    btnMedium.style.display = "none";
    btnExpert.style.display = "none";
    btnInfoOk.addEventListener("click", () => {
      window.location.reload(true);
    });
  } else if (infoBoard == "losses") {
    divInfoBoard.style.zIndex = "1";
    spanInfo[0].textContent = `Niestety, przegrałeś ... :(`;
    spanInfo[0].style.textAlign = "center";
    spanInfo[1].textContent = "Powyżej prawidłowy kod";
    spanInfo[2].textContent = "";
    spanInfo[0].style.fontSize = "25px";
    spanInfo[1].style.fontSize = "25px";
    clearLevel();
    gameLevel(4, draw.getAiChoice());
    boxResultInfo.style.display = "none";
    playerChoiceGameBoardInfo.style.backgroundColor = "beige";
    document.querySelector(".checkMove").remove();
    btnEasy.style.display = "none";
    btnMedium.style.display = "none";
    btnExpert.style.display = "none";
    btnInfoOk.addEventListener("click", () => {
      const playerBoard = document.querySelector(".playerBoard");
      const boxPlayer = document.querySelectorAll(".boxPlayer");
      playerChoiceGameBoardInfo.style.position = "relative";
      playerBoard.insertBefore(playerChoiceGameBoardInfo, boxPlayer[0]);
      divInfoBoard.style.zIndex = "0";
    });
  }
}

// funkcja która wyświetla na tablicy informacyjnej odpowiednią ilość pól i kolorów
function gameLevel(
  gameLevel = gameSettings.getLevel(),
  ballColors = gameSettings.getColors()
) {
  let colors = ballColors;
  let level = gameLevel;
  for (let i = 0; i < level; i++) {
    const spanInfo = document.createElement("span");
    document.querySelector(".playerChoiceGameBoardInfo").appendChild(spanInfo);
    spanInfo.classList.add("player");
    spanInfo.style.backgroundColor = colors[i];
  }
}

// funkcja która kasuje z tablicy informacyjnej pola i kolory, po czym wywoływana jest funkcja która wstawia je od nowa w odpowiedniej ilości i kolorach - funkcja gameLevel
function clearLevel() {
  document
    .querySelectorAll(".playerChoiceGameBoardInfo span")
    .forEach((clearLevel) => clearLevel.remove());
}

// funkcja która pozwala w trakcie gry zmieniać koloru pól wyboru gracza
function changeColor() {
  let colors = gameSettings.getColors();
  if (
    !this.style.borderColor ||
    colors.indexOf(this.style.backgroundColor) == colors.length - 1
  ) {
    this.style.borderColor = `${colors[0]}`;
    this.style.backgroundColor = `${colors[0]}`;
    return;
  } else {
    this.style.borderColor = `${
      colors[colors.indexOf(this.style.backgroundColor) + 1]
    }`;
    this.style.backgroundColor = `${
      colors[colors.indexOf(this.style.backgroundColor) + 1]
    }`;
  }
}

// funkcja wywołująca sprawdzenie i ocenę kolorów gracza
function checkMove() {
  let rowsNumber = gameSettings.rowsNumber;
  const playerBalls = document.querySelectorAll(
    `.playerBoard :nth-child(${rowsNumber}) .playerChoice span`
  );
  let colorsPlayer = [];
  let flag = true;
  playerBalls.forEach((ball) => {
    if (!ball.style.backgroundColor) {
      flag = false;
    } else {
      colorsPlayer.push(ball.style.backgroundColor);
    }
  });
  const checkColors = new CheckColors(colorsPlayer);
  const boxResult = document.querySelectorAll(
    `.playerBoard :nth-child(${rowsNumber}) .boxResult span`
  );
  let arrayResult = checkColors.getResult();
  for (let i = 0; i < 4; i++) {
    boxResult[i].style.backgroundColor = arrayResult[i];
    boxResult[i].style.borderColor = arrayResult[i];
  }
  if (checkColors.getResult() === "win") {
    return gameInfoBoard("win");
  }
  document
    .querySelectorAll(
      `.playerBoard :nth-child(${rowsNumber}) > .playerChoice span`
    )
    .forEach((ball) => ball.removeEventListener("click", changeColor));
  if (!flag) {
    gameInfoBoard("empty");
  } else {
    rowsNumber--;
  }
  if (rowsNumber === 0) {
    return gameInfoBoard("losses");
  } else {
    document
      .querySelectorAll(".boxPlayer")
      [rowsNumber - 1].appendChild(document.querySelector(".checkMove"));
    document
      .querySelectorAll(
        `.playerBoard :nth-child(${rowsNumber}) > .playerChoice span`
      )
      .forEach((ball) => ball.addEventListener("click", changeColor));
  }
  gameSettings.rowsNumber = rowsNumber;
}

// klasa do której jest wysyłany kod koloru gracza i porównywany jest z zestawem kolorów wybranych przez komputer, w klasie tej następuje ocena kodu gracza
class CheckColors {
  constructor(colors) {
    let checkResult = this.playerChoice(colors);
    this.getResult = () => checkResult;
  }
  playerChoice(colors) {
    const aiChoice = draw.getAiChoice();
    const playerChoice = colors;
    const result = [];
    const aiGrayBall = [];
    const playerGrayBall = [];
    for (let i = 0; i < 4; i++) {
      if (aiChoice[i] === playerChoice[i]) {
        result.push("black");
        if (result.length === 4) {
          return "win";
        }
      } else {
        aiGrayBall.push(i);
        playerGrayBall.push(i);
      }
    }
    for (let i = 0; i < playerGrayBall.length; i++) {
      for (let j = 0; j < aiGrayBall.length; j++) {
        if (playerChoice[playerGrayBall[i]] === aiChoice[aiGrayBall[j]]) {
          result.push("gray");
          aiGrayBall.splice(j, 1);
          break;
        }
      }
    }
    return result;
  }
}

// funkcja uruchamiająca grę po naciśnięciu przycisku Start
function startGame() {
  let rowsNumber = gameSettings.getRowsNumber();
  draw = new Draw(gameSettings.getLevel());
  document.querySelector(".buttonStart").style.backgroundColor = "#d4d4d4";
  document.querySelector(".buttonReset").style.backgroundColor = "#53ebeb";
  document.querySelector(".buttonReset").addEventListener("click", () => {
    window.location.reload(true);
  });
  document
    .querySelector(".buttonStart")
    .removeEventListener("click", startGame);
  document
    .querySelectorAll(
      `.playerBoard :nth-child(${rowsNumber}) > .playerChoice span`
    )
    .forEach((ball) => ball.addEventListener("click", changeColor));
  document.querySelector(".checkMove").style.display = "inline";
  document.querySelector(".checkMove").addEventListener("click", checkMove);
}

//klasa w której losowany i przechowywany jest kod koloru komputera
class Draw {
  constructor(number) {
    this.options = gameSettings.getColors();
    this.options.length = number;
    let _aiChoice = this.aiChoice(number);
    this.getAiChoice = () => _aiChoice;
  }
  aiChoice(number) {
    let colors = [];
    for (let i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * number);
      const color = this.options[index];
      colors.push(color);
    }
    // console.log("ai: " + colors);
    return colors;
  }
}

const gameSettings = new GameSettings();
let draw;
createBoard();
gameInfoBoard("info");
document.querySelector(".buttonStart").addEventListener("click", startGame);
