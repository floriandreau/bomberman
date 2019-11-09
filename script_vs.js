//chosit un nombre aléatoire
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let cadre = document.getElementById("cadre");

// récupe joueur 1
let un = document.getElementById("carre");
let vie_1 = 3;
let div_vie_1 = document.getElementById("vie");
div_vie_1.innerHTML="<br><br><br>vie : "+vie_1;
un.style.left = "650px"
un.style.top = "650px"

// récupe joueur 2
let deux = document.getElementById("deux");
deux.classList.remove("hide");
let vie_2 = 3;
let div_vie_2 = document.getElementById("vie_deux");
div_vie_2.innerHTML="<br><br><br>vie : "+vie_2;
div_vie_2.classList.remove('hide');
deux.style.left = "0px"
deux.style.top = "0px"

// fonction qui permet de bouger un élément dans une direction
function move(element, direction) {
  let top_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("top")
    );
  let left_element = parseInt(
    window.getComputedStyle(element).getPropertyValue("left")
  );
  let obstacle_i = this.document.getElementsByClassName("obstacle");
  let cassable_i = this.document.getElementsByClassName("cassable");
  let bomb_i = this.document.getElementsByClassName("bombe");
      switch (direction) {
    case "bas":
      top_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("top")
      );
      if (top_element < 650) {
        top_element += 50;
        for (let index = 0; index < obstacle_i.length; index++) {
          const element_obs = obstacle_i[index];          
         for (let index = 0; index < cassable_i.length; index++) {
           const element_cass = cassable_i[index];

           if (bomb_i.length > 0 ) {
            for (let index = 0; index < bomb_i.length; index++) {
              const bomb = bomb_i[index];
              
              if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
               element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
               obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
               obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop 
               ||
               element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
               element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
               cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
               cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop 
               ||
               bomb.offsetLeft < element.offsetLeft +50 && bomb.offsetLeft + 50 > element.offsetLeft&&
               bomb.offsetTop < element.offsetTop +50 && bomb.offsetTop + 50 > element.offsetTop ||
               bomb_i[0].offsetLeft < element.offsetLeft +50 && bomb_i[0].offsetLeft + 50 > element.offsetLeft&&
               bomb_i[0].offsetTop < element.offsetTop +50 && bomb_i[0].offsetTop + 50 > element.offsetTop) {
                 top_element -= 50;
                 
                 element.style.top = top_element + "px";
   
               }
               else{
                 element.style.top = top_element + "px";
                 
               }
               if (element.id == "carre") {
                 if (deux.offsetLeft < element.offsetLeft +50 && deux.offsetLeft + 50 > element.offsetLeft&&
                   deux.offsetTop < element.offsetTop +50 && deux.offsetTop + 50 > element.offsetTop) {
                     top_element -= 50;
                 
                     element.style.top = top_element + "px";
                     
                 }
                 else{
                   element.style.top = top_element + "px";
                   
                 }
               }
               if (element.id == "deux") {
                 if (carre.offsetLeft < element.offsetLeft +50 && carre.offsetLeft + 50 > element.offsetLeft&&
                   carre.offsetTop < element.offsetTop +50 && carre.offsetTop + 50 > element.offsetTop) {
                     top_element -= 50;
                 
                     element.style.top = top_element + "px";
                     
                 }
                 else{
                   element.style.top = top_element + "px";
                   
                 }
               }
            }
           }
           else{
            if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
              element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
              obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
              obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop 
              ||
              element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
              element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
              cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
              cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop ) {
                top_element -= 50;
                
                element.style.top = top_element + "px";
  
              }
              else{
                element.style.top = top_element + "px";
                
              }
              if (element.id == "carre") {
                if (deux.offsetLeft < element.offsetLeft +50 && deux.offsetLeft + 50 > element.offsetLeft&&
                  deux.offsetTop < element.offsetTop +50 && deux.offsetTop + 50 > element.offsetTop) {
                    top_element -= 50;
                
                    element.style.top = top_element + "px";
                    
                }
                else{
                  element.style.top = top_element + "px";
                  
                }
              }
              if (element.id == "deux") {
                if (carre.offsetLeft < element.offsetLeft +50 && carre.offsetLeft + 50 > element.offsetLeft&&
                  carre.offsetTop < element.offsetTop +50 && carre.offsetTop + 50 > element.offsetTop) {
                    top_element -= 50;
                
                    element.style.top = top_element + "px";
                    
                }
                else{
                  element.style.top = top_element + "px";
                  
                }
              }
           }

          }
        }
      
      }
      break;
    case "haut":
       top_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("top")
      );
      if (top_element > 0) {
        top_element -= 50;
        for (let index = 0; index < obstacle_i.length; index++) {
          const element_obs = obstacle_i[index]; 
          
         for (let index = 0; index < cassable_i.length; index++) {
          const element_cass = cassable_i[index];
          if (bomb_i.length > 0 ) {
            for (let index = 0; index < bomb_i.length; index++) {
              const bomb = bomb_i[index];
              
              if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
               element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
               obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
               obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop 
               ||
               element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
               element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
               cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
               cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop 
               ||
               bomb.offsetLeft < element.offsetLeft +50 && bomb.offsetLeft + 50 > element.offsetLeft&&
               bomb.offsetTop < element.offsetTop +50 && bomb.offsetTop + 50 > element.offsetTop ||
               bomb_i[0].offsetLeft < element.offsetLeft +50 && bomb_i[0].offsetLeft + 50 > element.offsetLeft&&
               bomb_i[0].offsetTop < element.offsetTop +50 && bomb_i[0].offsetTop + 50 > element.offsetTop) {
                 top_element += 50;
                 
                 element.style.top = top_element + "px";
   
               }
               else{
                 element.style.top = top_element + "px";
                 
               }
               if (element.id == "carre") {
                 if (deux.offsetLeft < element.offsetLeft +50 && deux.offsetLeft + 50 > element.offsetLeft&&
                   deux.offsetTop < element.offsetTop +50 && deux.offsetTop + 50 > element.offsetTop) {
                     top_element += 50;
                 
                     element.style.top = top_element + "px";
                     
                 }
                 else{
                   element.style.top = top_element + "px";
                   
                 }
               }
               if (element.id == "deux") {
                 if (carre.offsetLeft < element.offsetLeft +50 && carre.offsetLeft + 50 > element.offsetLeft&&
                   carre.offsetTop < element.offsetTop +50 && carre.offsetTop + 50 > element.offsetTop) {
                     top_element += 50;
                 
                     element.style.top = top_element + "px";
                     
                 }
                 else{
                   element.style.top = top_element + "px";
                   
                 }
               }
            }
           }
           else{
            if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
              element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
              obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
              obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop 
              ||
              element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
              element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
              cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
              cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop ) {
                top_element += 50;
                
                element.style.top = top_element + "px";
  
              }
              else{
                element.style.top = top_element + "px";
                
              }
              if (element.id == "carre") {
                if (deux.offsetLeft < element.offsetLeft +50 && deux.offsetLeft + 50 > element.offsetLeft&&
                  deux.offsetTop < element.offsetTop +50 && deux.offsetTop + 50 > element.offsetTop) {
                    top_element += 50;
                
                    element.style.top = top_element + "px";
                    
                }
                else{
                  element.style.top = top_element + "px";
                  
                }
              }
              if (element.id == "deux") {
                if (carre.offsetLeft < element.offsetLeft +50 && carre.offsetLeft + 50 > element.offsetLeft&&
                  carre.offsetTop < element.offsetTop +50 && carre.offsetTop + 50 > element.offsetTop) {
                    top_element += 50;
                
                    element.style.top = top_element + "px";
                    
                }
                else{
                  element.style.top = top_element + "px";
                  
                }
              }
           }
        }}
      }
      break;
    case "droite":
      left_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("left")
      );
      if (left_element < 650) {
        left_element += 50;
        for (let index = 0; index < obstacle_i.length; index++) {
          const element_obs = obstacle_i[index];
          
         for (let index = 0; index < cassable_i.length; index++) {
          const element_cass = cassable_i[index]; 
          if (bomb_i.length > 0 ) {
            for (let index = 0; index < bomb_i.length; index++) {
              const bomb = bomb_i[index];
              
              if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
               element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
               obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
               obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop 
               ||
               element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
               element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
               cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
               cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop 
               ||
               bomb.offsetLeft < element.offsetLeft +50 && bomb.offsetLeft + 50 > element.offsetLeft&&
               bomb.offsetTop < element.offsetTop +50 && bomb.offsetTop + 50 > element.offsetTop ||
               bomb_i[0].offsetLeft < element.offsetLeft +50 && bomb_i[0].offsetLeft + 50 > element.offsetLeft&&
               bomb_i[0].offsetTop < element.offsetTop +50 && bomb_i[0].offsetTop + 50 > element.offsetTop) {
                 top_element -= 50;
                 
                 element.style.left = left_element + "px";
   
               }
               else{
                 element.style.left = left_element + "px";
                 
               }
               if (element.id == "carre") {
                 if (deux.offsetLeft < element.offsetLeft +50 && deux.offsetLeft + 50 > element.offsetLeft&&
                   deux.offsetTop < element.offsetTop +50 && deux.offsetTop + 50 > element.offsetTop) {
                    left_element -= 50;
                 
                     element.style.left = left_element + "px";
                     
                 }
                 else{
                   element.style.left = left_element + "px";
                   
                 }
               }
               if (element.id == "deux") {
                 if (carre.offsetLeft < element.offsetLeft +50 && carre.offsetLeft + 50 > element.offsetLeft&&
                   carre.offsetTop < element.offsetTop +50 && carre.offsetTop + 50 > element.offsetTop) {
                    left_element -= 50;
                 
                     element.style.left = left_element + "px";
                     
                 }
                 else{
                   element.style.left = left_element + "px";
                   
                 }
               }
            }
           }
           else{
            if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
              element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
              obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
              obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop 
              ||
              element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
              element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
              cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
              cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop ) {
                left_element -= 50;
                
                element.style.left = left_element + "px";
  
              }
              else{
                element.style.left = left_element + "px";
                
              }
              if (element.id == "carre") {
                if (deux.offsetLeft < element.offsetLeft +50 && deux.offsetLeft + 50 > element.offsetLeft&&
                  deux.offsetTop < element.offsetTop +50 && deux.offsetTop + 50 > element.offsetTop) {
                    left_element -= 50;
                
                    element.style.left = left_element + "px";
                    
                }
                else{
                  element.style.left = left_element + "px";
                  
                }
              }
              if (element.id == "deux") {
                if (carre.offsetLeft < element.offsetLeft +50 && carre.offsetLeft + 50 > element.offsetLeft&&
                  carre.offsetTop < element.offsetTop +50 && carre.offsetTop + 50 > element.offsetTop) {
                    left_element -= 50;
                
                    element.style.left = left_element + "px";
                    
                }
                else{
                  element.style.left = left_element + "px";
                  
                }
              }
           }
        }}
      }
      break;
    case "gauche":
      left_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("left")
      );
      if (left_element > 0) {
        left_element -= 50;
        for (let index = 0; index < obstacle_i.length; index++) {
          const element_obs = obstacle_i[index]; 
          
         for (let index = 0; index < cassable_i.length; index++) {
          const element_cass = cassable_i[index];
          if (bomb_i.length > 0 ) {
            for (let index = 0; index < bomb_i.length; index++) {
              const bomb = bomb_i[index];
              
              if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
               element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
               obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
               obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop 
               ||
               element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
               element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
               cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
               cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop 
               ||
               bomb.offsetLeft < element.offsetLeft +50 && bomb.offsetLeft + 50 > element.offsetLeft&&
               bomb.offsetTop < element.offsetTop +50 && bomb.offsetTop + 50 > element.offsetTop ||
               bomb_i[0].offsetLeft < element.offsetLeft +50 && bomb_i[0].offsetLeft + 50 > element.offsetLeft&&
               bomb_i[0].offsetTop < element.offsetTop +50 && bomb_i[0].offsetTop + 50 > element.offsetTop) {
                left_element += 50;
                 
                 element.style.left = left_element + "px";
   
               }
               else{
                 element.style.left = left_element + "px";
                 
               }
               if (element.id == "carre") {
                 if (deux.offsetLeft < element.offsetLeft +50 && deux.offsetLeft + 50 > element.offsetLeft&&
                   deux.offsetTop < element.offsetTop +50 && deux.offsetTop + 50 > element.offsetTop) {
                     top_element += 50;
                 
                     element.style.left = left_element + "px";
                     
                 }
                 else{
                   element.style.left = left_element + "px";
                   
                 }
               }
               if (element.id == "deux") {
                 if (carre.offsetLeft < element.offsetLeft +50 && carre.offsetLeft + 50 > element.offsetLeft&&
                   carre.offsetTop < element.offsetTop +50 && carre.offsetTop + 50 > element.offsetTop) {
                    left_element += 50;
                 
                     element.style.left = left_element + "px";
                     
                 }
                 else{
                   element.style.left = left_element + "px";
                   
                 }
               }
            }
           }
           else{
            if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
              element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
              obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
              obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop 
              ||
              element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
              element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
              cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
              cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop ) {
                left_element += 50;
                
                element.style.left = left_element + "px";
  
              }
              else{
                element.style.left = left_element + "px";
                
              }
              if (element.id == "carre") {
                if (deux.offsetLeft < element.offsetLeft +50 && deux.offsetLeft + 50 > element.offsetLeft&&
                  deux.offsetTop < element.offsetTop +50 && deux.offsetTop + 50 > element.offsetTop) {
                    left_element += 50;
                
                    element.style.left = left_element + "px";
                    
                }
                else{
                  element.style.left = left_element + "px";
                  
                }
              }
              if (element.id == "deux") {
                if (carre.offsetLeft < element.offsetLeft +50 && carre.offsetLeft + 50 > element.offsetLeft&&
                  carre.offsetTop < element.offsetTop +50 && carre.offsetTop + 50 > element.offsetTop) {
                    left_element += 50;
                
                    element.style.left = left_element + "px";
                    
                }
                else{
                  element.style.left = left_element + "px";
                  
                }
              }
           }
        }}
      }
      break;
  }
    
  // bombe
    
  
}

function bombe(element) {
  let bomb = document.createElement("div");
  bomb.classList.add('bombe');
  if (element.id =="carre") {
    bomb.classList.add('bombe_un');
  }
  else if (element.id == "deux") {
    bomb.classList.add('bombe_deux');
  }
  else if (element.id == "troi") {
    bomb.classList.add('bombe_troi');
  }
  else if (element.id == "quatre") {
    bomb.classList.add('bombe_quatre');
  }
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
  let position_left_bombe = element.offsetLeft;
  
  let position_top_bombe = element.offsetTop;
  for (let index = 0; index < element_t.length; index++) {
    const element = element_t[index];
    
    boom(element, index, position_left_bombe, position_top_bombe);
    
  }
}

function boom(element, index, position_left_bombe, position_top_bombe) {
  
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
    position_top_bombe = position_top_bombe - 50;
    position_left_bombe = position_left_bombe - 50;

      
    if (position_top_bombe < parseInt(element.style.top) &&  position_left_bombe < parseInt(element.style.left)) {
      
      element.style.left = left_bomb-50+"px";
      element.style.top = top_bomb-50+"px";
    }
    element.style.background = "url(explosion"+index+".gif) round";
   

    if (element.offsetLeft < un.offsetLeft +50 && element.offsetLeft + 150 > un.offsetLeft&&
      element.offsetTop < un.offsetTop +50 && element.offsetTop + 150 > un.offsetTop) {
      point_vie();
    }
    if (element.offsetLeft < deux.offsetLeft +50 && element.offsetLeft + 150 > deux.offsetLeft&&
      element.offsetTop < deux.offsetTop +50 && element.offsetTop + 150 > deux.offsetTop) {
      point_vie_2();
    }

    let cassable = document.getElementsByClassName("cassable");
    for (let index = 0; index < cassable.length; index++) {
      const cassable_touche = cassable[index];
      if (element.offsetLeft < cassable_touche.offsetLeft +50 && element.offsetLeft + 150 > cassable_touche.offsetLeft&&
        element.offsetTop < cassable_touche.offsetTop +50 && element.offsetTop + 150 > cassable_touche.offsetTop) {
        cassable_touche.classList="casse";
      }
    }
    let casse = document.getElementsByClassName("casse");
    for (let index = 0; index < casse.length; index++) {
      const casse_touche = casse[index];
      if (element.offsetLeft < casse_touche.offsetLeft +50 && element.offsetLeft + 150 > casse_touche.offsetLeft&&
        element.offsetTop < casse_touche.offsetTop +50 && element.offsetTop + 150 > casse_touche.offsetTop) {
        casse_touche.remove();
      }
    }
}, 1000);
setTimeout(function(){
    element.remove();
}, 3000);
}

// joueur 1
window.addEventListener("keydown", function(event) {

  // deplacement joueur
  switch (event.keyCode) {
    //haut
    case 38:
        //code quand on va en haut
        move(carre, "haut");
        carre.style.background = "url(sprite_jeu_js/joueur/haut.gif)";
        setTimeout(function(){
          carre.style.background = "url(sprite_jeu_js/joueur/normal.gif)";
         },500);
        break;
  
      //droite
      case 39:
        //code quand on va à droite
        carre.style.background = "url(sprite_jeu_js/joueur/droite.gif)";
        move(carre, "droite");
        setTimeout(function(){
          carre.style.background = "url(sprite_jeu_js/joueur/normal.gif)";
         },500);
        break;
  
      //bas
      case 40:
          carre.style.background = "url(sprite_jeu_js/joueur/bas.gif)";
        move(carre, "bas");
        setTimeout(function(){
          carre.style.background = "url(sprite_jeu_js/joueur/normal.gif)";
         },500);
        //code quand on va à bas
        break;
  
      //gauche
      case 37:
        //code quand on va à gauche
        carre.style.background = "url(sprite_jeu_js/joueur/gauche.gif)";
        move(carre, "gauche");
        setTimeout(function(){
          carre.style.background = "url(sprite_jeu_js/joueur/normal.gif)";
         },500);
        break;
      case 32:
        // code quand on pose la bombe
        if (vie_1 > 0) {
          
          let bombe_existe = document.getElementsByClassName("bombe_un");
          if(bombe_existe.length < 3){
            carre.style.background = "url(sprite_jeu_js/joueur/bomb.gif)";
            bombe(carre);
            setTimeout(function(){
              carre.style.background = "url(sprite_jeu_js/joueur/normal.gif)";
             },500);
          }
          else{ 
          }
        }
        else{
  
        }
      break;
  }

});

// joueur 2 

window.addEventListener("keydown", function(event) {

  // deplacement joueur
  switch (event.keyCode) {
    
    //haut
    case 90:
        //code quand on va en haut
        deux.style.background="url(sprite_jeu_js/sprite_j2/haut.gif)";
        move(deux, "haut");
        setTimeout(function(){
          deux.style.background = "url(sprite_jeu_js/sprite_j2/normal.gif)";
         },500);
        break;
  
      //droite
      case 68:
        //code quand on va à droite
        deux.style.background="url(sprite_jeu_js/sprite_j2/droite.gif)";
  
        move(deux, "droite");
        setTimeout(function(){
          deux.style.background = "url(sprite_jeu_js/sprite_j2/normal.gif)";
         },500);
        break;
  
      //bas
      case 83:
          deux.style.background="url(sprite_jeu_js/sprite_j2/bas.gif)";
  
        move(deux, "bas");
        setTimeout(function(){
          deux.style.background = "url(sprite_jeu_js/sprite_j2/normal.gif)";
         },500);
        //code quand on va à bas
        break;
  
      //gauche
      case 81:
        //code quand on va à gauche
        deux.style.background="url(sprite_jeu_js/sprite_j2/gauche.gif)";
  
        move(deux, "gauche");
        setTimeout(function(){
          deux.style.background = "url(sprite_jeu_js/sprite_j2/normal.gif)";
         },500);
        break;
      case 88:
        // code quand on pose la bombe
        if (vie_2 > 0) {
          
          let bombe_existe = document.getElementsByClassName("bombe_deux");
          if(bombe_existe.length<3){
            deux.style.background = "url(sprite_jeu_js/sprite_j2/bomb.gif)"
            bombe(deux);
            setTimeout(function(){
              deux.style.background = "url(sprite_jeu_js/sprite_j2/normal.gif)";
             },500);
          }
          else{ 
          }
        }
        else{
  
        }
      break;
  }

});
let p = document.getElementById("message_vic");
function point_vie(){
  vie_1 -= 1;
  div_vie_1.innerHTML="<br><br><br>vie : "+vie_1;
  carre.style.background = "url(sprite_jeu_js/joueur/degat.gif)";
  setTimeout(function(){
   carre.style.background = "url(sprite_jeu_js/joueur/normal.gif)";
  },500);
  if(vie_1 == 0  || vie_1 < 0){
    let popup = document.getElementById ("popup");
    popup.classList.remove("hide") ;
    p.innerHTML="Le joueur 2 à gagné";
  carre.remove ();
  vie_1 = 0;
  div_vie_1.innerHTML="<br><br><br>vie : "+vie_1;
 }
 }

 function point_vie_2(){
  vie_2 -= 1;
  div_vie_2.innerHTML="<br><br><br>vie : "+vie_2;
  deux.style.background = "url(sprite_jeu_js/sprite_j2/degat.gif)";
  setTimeout(function(){
    deux.style.background = "url(sprite_jeu_js/sprite_j2/normal.gif)";
   },500);
  
  if(vie_2 == 0  || vie_2 < 0){
    let popup = document.getElementById ("popup");
    popup.classList.remove("hide") ;
    p.innerHTML="Le joueur 1 à gagné";
  deux.remove ();
  vie_2 = 0;
  div_vie_2.innerHTML="<br><br><br>vie : "+vie_2;
 }
 }

function restart(){
document.location.reload(true); 
}


// les obstacles 
//nombres obstacle (aléatoire)
function nb_obstacle(min,max){
 return min+Math.floor(Math.random()*max); 
}

let obs_number = nb_obstacle(10,30);
for (let i = 0; i < obs_number; i++) {
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  //position obstacles
  let choix_random = ["0", "1"];
  let random_random = choix_random[Math.floor(Math.random() * choix_random.length)];
  if (random_random == 0) {
    let pose_obstacle_top=[  "100", "150", "200", "250","300","350", "400", "450", "500", "550"];
    let pose_obstacle=["150", "200", "250","300","350", "400", "450", "500"];
    let random_left_obstacle = pose_obstacle[Math.floor(Math.random() * pose_obstacle.length)];
    let random_top_obstacle = pose_obstacle_top[Math.floor(Math.random() * pose_obstacle_top.length)];
    obstacle.style.left = random_left_obstacle+"px";
    obstacle.style.top = random_top_obstacle+"px";
    cadre.appendChild(obstacle);
  }
  else{
    let pose_obstacle=[ "0", "50", "100", "150", "200", "250","300","350", "400", "450", "500", "550", "600", "650"];
    let pose_obstacle_top=["150", "200", "250","300","350", "400", "450", "500"];
    let random_left_obstacle = pose_obstacle[Math.floor(Math.random() * pose_obstacle.length)];
    let random_top_obstacle = pose_obstacle_top[Math.floor(Math.random() * pose_obstacle_top.length)];
    obstacle.style.left = random_left_obstacle+"px";
    obstacle.style.top = random_top_obstacle+"px";
    cadre.appendChild(obstacle);
  }
}
//obstacles cassables ma gueule

function nb_cassables(min,max){
  return min+Math.floor(Math.random()*max); 
 }
 
 let cass_number = nb_cassables(20,45);
 for (let i = 0; i < cass_number; i++) {
   const cassable = document.createElement("div");
   cassable.classList.add("cassable");
   //position obstacles
   let choix_random = ["0", "1"];
   let random_random = choix_random[Math.floor(Math.random() * choix_random.length)];
   if (random_random == 0) {

     let pose_cassable=[ "0", "50", "100", "150", "200", "250","300","350", "400", "450", "500", "550", "600", "650"];
     let pose_obstacle_top=["150", "200", "250","300","350", "400", "450", "500"];
     let random_left_cassable = pose_cassable[Math.floor(Math.random() * pose_cassable.length)];
     let random_top_cassable = pose_obstacle_top[Math.floor(Math.random() * pose_obstacle_top.length)];
     cassable.style.left = random_left_cassable+"px";
     cassable.style.top = random_top_cassable+"px";
     cadre.appendChild(cassable);
   }
   else{
    let pose_cassable_top=[ "0", "50", "100", "150", "200", "250","300","350", "400", "450", "500", "550", "600", "650"];
    let pose_cassable=["150", "200", "250","300","350", "400", "450", "500"];
    let random_left_cassable = pose_cassable[Math.floor(Math.random() * pose_cassable.length)];
    let random_top_cassable = pose_cassable_top[Math.floor(Math.random() * pose_cassable_top.length)];
    cassable.style.left = random_left_cassable+"px";
    cassable.style.top = random_top_cassable+"px";
    cadre.appendChild(cassable);
   }
 }

