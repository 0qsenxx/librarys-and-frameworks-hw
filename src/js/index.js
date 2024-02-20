// ?1
const keyPressRef = document.querySelector("[data-key=press]");
const startGameBtnRef = document.querySelector("[data-button=startGame]");
const stopGameBtnRef = document.querySelector("[data-button=stopGame]");
const peopleScoreTextRef = document.querySelector("[data-text=peopleScore]");
const btnsArr = [
  "ShiftLeft",
  "ShiftRight",
  "Space",
  "Backspace",
  "ArrowUp",
  "ArrowDown",
  "Enter",
  "Tab",
  "Escape",
  "AltLeft",
];
let currentBtn = "";
let score = 0;

startGameBtnRef.addEventListener("click", function startGame(evt) {
  let randomIdx = 0;
  currentBtn = btnsArr[randomIdx];
  keyPressRef.textContent = currentBtn;
  score = 0;

  document.addEventListener("keydown", function keydownEvent(e) {
    e.preventDefault();
    currentBtn = btnsArr[randomIdx];
    console.log(currentBtn);
    keyPressRef.textContent = currentBtn;

    if (e.code === currentBtn) {
      if (randomIdx === btnsArr.length - 1) {
        randomIdx = -1;
      }
      randomIdx++;
      currentBtn = btnsArr[randomIdx];
      keyPressRef.textContent = currentBtn;
      score++;
      peopleScoreTextRef.textContent = score;
    } else {
      alert("Ви програли(");
      score = 0;
      randomIdx = 0;
      peopleScoreTextRef.textContent = score;
      keyPressRef.textContent = "";
      document.removeEventListener("keydown", keydownEvent);
    }
  });
});

// ?2
const chartRef = document.getElementById("sales-chart");
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const salesChart = new Chart(chartRef, {
  type: "line",
  data: chartData,
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
});
