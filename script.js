
// function je_oma() {
//   // var body = document.querySelector("body");
//   // body.classList.add("je_oom");
//   console.log("boeler");
//   // var color = document.getElementById("je_zus").value;
//   document.getElementById("body").style.backgroundColor = document.getElementById("je_zus").value;
// }
// function je_opa() {
//   // var body = document.querySelector("body");
//   // body.classList.add("je_oom");
//   console.log("boeler");
//   // var color = document.getElementById("je_zus").value;
//   document.getElementById("body").style.color = document.getElementById("je_zus").value;
// }
function je_nicht() {
  console.log("boeler");
  var waarde = document.getElementById("je_broer").value;
  let antwoord = (waarde * Math.PI);
  document.getElementById("text").innerHTML = antwoord;
}

function je_tante() {
  console.log("boeler");
  var waarde = document.getElementById("je_broer").value;
  let antwoord = (waarde * waarde * Math.PI * 0.25);
  document.getElementById("text").innerHTML = antwoord;
}
