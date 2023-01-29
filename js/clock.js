const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const clockText = clockContainer.querySelector("h5");

const USER_LS = "currentUser";

function userName() {
  localStorage.removeItem(USER_LS);

  let person = prompt("당신의 이름은 무엇인가요?");

  if (person == null || person == "") {
    alert("아무것도 입력하지 않으셨네요.");
    location.href = "index.html";
  } else {
    localStorage.setItem(USER_LS, person);
  }
}

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  let text = "";

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  
  const currentUser = localStorage.getItem(USER_LS);

  if (hours < 12) {
    text = "활기찬 아침 힘내세요, " + currentUser;
  } else if (hours < 18) {
    text = "나른한 점심 힘내세요, " + currentUser;
  } else {
    text = "오늘 하루도 고생많았어요, " + currentUser;
  }
  clockText.innerText = text;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

userName();
init();

