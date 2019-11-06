//chosit un nombre aléatoire
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let carre = document.getElementById("carre");
let ennemi = document.getElementById("ennemi");
let cadre = document.getElementById("cadre");
let vie = 3;

// fonction qui permet de bouger un élément dans une direction
function move(element, direction) {
  let top_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("top")
  );
  let left_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("left")
  );

  switch (direction) {
    case "bas":
      top_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("top")
      );
      if (top_element < 650) {
        top_element += 50;
        element.style.top = top_element + "px";
      }
      break;
    case "haut":
       top_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("top")
      );
      if (top_element > 0) {
        top_element -= 50;
        element.style.top = top_element + "px";
      }
      break;
    case "droite":
      left_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("left")
      );
      if (left_element < 650) {
        left_element += 50;
      element.style.left = left_element + "px";
      }
      break;
    case "gauche":
      left_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("left")
      );
      if (left_element > 0) {
        left_element -= 50;
      element.style.left = left_element + "px";
      }
      break;
  }
}

function bombe(element) {
  let bomb = document.createElement("div");
  bomb.classList.add('bombe');
  left_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("left")
  );
  top_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("top")
  );
  bomb.style.left = left_element+"px";
  bomb.style.top = top_element+"px";
  cadre.appendChild(bomb);
  let element_t = document.getElementsByClassName('bombe');
  for (let index = 0; index < element_t.length; index++) {
    const element = element_t[index];
    setTimeout(function(){
        let width_bomb = parseInt(
          window.getComputedStyle(element).getPropertyValue("width")
        );
        let height_bomb = parseInt(
          window.getComputedStyle(element).getPropertyValue("height")
        );
        let left_bomb = parseInt(
          window.getComputedStyle(element).getPropertyValue("left")
        );
        let top_bomb = parseInt(
          window.getComputedStyle(element).getPropertyValue("top")
        );
        let back_bomb = window.getComputedStyle(element).getPropertyValue("background");
        height_bomb = parseInt(window.getComputedStyle(element).getPropertyValue("height"));
        width_bomb = parseInt(window.getComputedStyle(element).getPropertyValue("width"));
        left_bomb = parseInt(window.getComputedStyle(element).getPropertyValue("left"));
        top_bomb = parseInt(window.getComputedStyle(element).getPropertyValue("top"));
        back_bomb = window.getComputedStyle(element).getPropertyValue("background")    
        element.style.width = "150px";
        element.style.height = "150px";
        element.style.left = left_bomb-50+"px";
        element.style.top = top_bomb-50+"px";
        element.style.background = "url(explosion"+index+".gif) round";

        let j = document.getElementById("carre");
        let e = document.getElementById("ennemi");

        if(element.offsetLeft < e.offsetLeft +50 && element.offsetLeft + 150 > e.offsetLeft&&
          element.offsetTop < e.offsetTop +50 && element.offsetTop + 150 > e.offsetTop){

          e.remove();
        }

    }, 1000);
    setTimeout(function(){
        element.remove();
    }, 3000);
  }
}

// event listener pour écouter les touches du clavier, et bouger le carré en fonction de ces touches
window.addEventListener("keydown", function(event) {

  switch (event.keyCode) {
    //haut
    case 38:
      //code quand on va en haut
      move(carre, "haut");
      break;

    //droite
    case 39:
      //code quand on va à droite
      move(carre, "droite");
      break;

    //bas
    case 40:
      move(carre, "bas");
      //code quand on va à bas
      break;

    //gauche
    case 37:
      //code quand on va à gauche
      move(carre, "gauche");
      break;
    case 32:
      // code quand on pose la bombe
      let bombe_existe = document.getElementsByClassName("bombe");
      if(bombe_existe.length<3){
        bombe(carre);
      }
      else{ 
      }
    break;
  }
  if(carre.offsetLeft == ennemi.offsetLeft && carre.offsetLeft + 50 == ennemi.offsetLeft + 50 &&
    carre.offsetTop == ennemi.offsetTop && carre.offsetTop + 50 == ennemi.offsetTop + 50){
      vie -= 1;
  }
  if (vie == 0) {
    alert("t'es perdant loser");
  }
});

// faire bouger l'ennemi dans une direction aléatoirement
setInterval(function(){

  let random = getRandomInt(4);
switch (random) {
  case 0:
    if(parseInt(window.getComputedStyle(ennemi).getPropertyValue("top")) === 0){
      move(ennemi, "bas");
    }
    else{
      move(ennemi, "haut");
    }
    break;
    case 1:
        if(parseInt(window.getComputedStyle(ennemi).getPropertyValue("top")) === 650){
          move(ennemi, "haut");
        }
        else{
          move(ennemi, "bas");
        }
    break;
    case 2:
        if(parseInt(window.getComputedStyle(ennemi).getPropertyValue("left")) === 0){
          move(ennemi, "droite");
        }
        else{
          move(ennemi, "gauche");
        }
    break;
    case 3:
        if(parseInt(window.getComputedStyle(ennemi).getPropertyValue("left")) === 650){
          move(ennemi, "gauche");
        }
        else{
          move(ennemi, "droite");
        }
    break;
}
if(carre.offsetLeft == ennemi.offsetLeft && carre.offsetLeft + 50 == ennemi.offsetLeft + 50 &&
  carre.offsetTop == ennemi.offsetTop && carre.offsetTop + 50 == ennemi.offsetTop + 50){
    alert("Perdu pauvre nul ! Ché !");
    carre.remove();
}

},10000)









