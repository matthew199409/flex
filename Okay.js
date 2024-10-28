let Hello = document.getElementsByClassName("hello");

function changecolor() {
  if (Hello[0].style.background == "red") Hello[0].style.background = "blue";
  else {
    Hello[0].style.background = "red";
  }
}

let hello2 = document.getElementsByClassName("h2");

function okay() {
  if (hello2[0].style.background == "green")
    hello2[0].style.background = "brown";
  else {
    hello2[0].style.background = "green";
  }
}

// let press = document.getElementsByClassName("");
//   if (press me)
