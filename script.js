let body = document.getElementById('body');
let menu = document.getElementById('menu');
let jeu = document.getElementById('cadre');
let vie_txt = document.getElementById('vie');

function solo() {
  let solo = document.createElement("script");
  solo.setAttribute("src", "script_solo.js");
  body.appendChild(solo);
  menu.classList.add("hide");
  jeu.classList.remove("hide");
  vie_txt.classList.remove("hide");
}

function coop() {
  let coop = document.createElement("script");
  coop.setAttribute("src", "script_coop.js");
  body.appendChild(coop);
  menu.classList.add("hide");
  jeu.classList.remove("hide");
  vie_txt.classList.remove("hide");

}

function vs() {
  let vs = document.createElement("script");
  vs.setAttribute("src", "script_vs.js");
  body.appendChild(vs);
  menu.classList.add("hide");
  jeu.classList.remove("hide");
  vie_txt.classList.remove("hide");

}

function vss() {
  
  let vss = document.createElement("script");
  vss.setAttribute("src", "script_all.js");
  body.appendChild(vss);
  menu.classList.add("hide");
  jeu.classList.remove("hide");
  vie_txt.classList.remove("hide");

}


function LectureSon() { document.getElementById("audio").play(); }