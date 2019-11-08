//chosit un nombre aléatoire
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let cache = document.getElementsByClassName("cache");
cache[1].style.left = "700px";
let carre = document.getElementById("carre");
let ennemi = document.getElementsByClassName("ennemi");
let cadre = document.getElementById("cadre");
let vie = 3;
let divVie = document.getElementById("vie");

divVie.innerHTML="vie : "+vie;


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
           
           
           
           if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
            element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
            obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
            obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop 
            ||
            element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
            element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
            cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
            cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop) {
              top_element -= 50;
              
              element.style.top = top_element + "px";
  
              
              
            }
            else{
              element.style.top = top_element + "px";
              
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
          if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
            element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
            obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
            obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop
          
            ||
            element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
            element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
            cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
            cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop) {
              
            
              top_element += 50;
              element.style.top = top_element + "px";
            
          }
          else{
            element.style.top = top_element + "px";
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
          if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
            element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
            obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
            obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop||
            element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
            element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
            cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
            cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop) {
              left_element -= 50;
              element.style.left = left_element + "px";
          }
          else{
            element.style.left = left_element + "px";
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
          if (element_obs.offsetLeft < element.offsetLeft +50 && element_obs.offsetLeft + 50 > element.offsetLeft&&
            element_obs.offsetTop < element.offsetTop +50 && element_obs.offsetTop + 50 > element.offsetTop ||
            obstacle_i[0].offsetLeft < element.offsetLeft +50 && obstacle_i[0].offsetLeft + 50 > element.offsetLeft&&
            obstacle_i[0].offsetTop < element.offsetTop +50 && obstacle_i[0].offsetTop + 50 > element.offsetTop||
            element_cass.offsetLeft < element.offsetLeft +50 && element_cass.offsetLeft + 50 > element.offsetLeft&&
            element_cass.offsetTop < element.offsetTop +50 && element_cass.offsetTop + 50 > element.offsetTop ||
            cassable_i[0].offsetLeft < element.offsetLeft +50 && cassable_i[0].offsetLeft + 50 > element.offsetLeft&&
            cassable_i[0].offsetTop < element.offsetTop +50 && cassable_i[0].offsetTop + 50 > element.offsetTop) {
              left_element += 50;
              element.style.left = left_element + "px";
          }
          else{
            element.style.left = left_element + "px";
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
    boom(element, index);
  }
}

function boom(element, index) {
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

  let e1= document.getElementById("1")
  let e2= document.getElementById("2")
  let e3= document.getElementById("3")
   
      if (e1 != null) {
        
        if(element.offsetLeft < e1.offsetLeft +50 && element.offsetLeft + 150 > e1.offsetLeft&&
          element.offsetTop < e1.offsetTop +50 && element.offsetTop + 150 > e1.offsetTop 
         ){
    
          e1.remove();
        
          
        }
      }

if (e2 != null) {
      if(  element.offsetLeft < e2.offsetLeft +50 && element.offsetLeft + 150 > e2.offsetLeft&&
      element.offsetTop < e2.offsetTop +50 && element.offsetTop + 150 > e2.offsetTop){
      e2.remove();

    }
}

if (e3 != null) {
   if (element.offsetLeft < e3.offsetLeft +50 && element.offsetLeft + 150 > e3.offsetLeft&&
      element.offsetTop < e3.offsetTop +50 && element.offsetTop + 150 > e3.offsetTop) {
      e3.remove();
      

    }
}
   

    if (element.offsetLeft < carre.offsetLeft +50 && element.offsetLeft + 150 > carre.offsetLeft&&
      element.offsetTop < carre.offsetTop +50 && element.offsetTop + 150 > carre.offsetTop) {
      point_vie();
    }
    let casse = document.getElementsByClassName("casse");
    for (let index = 0; index < casse.length; index++) {
      const casse_touche = casse[index];
      if (element.offsetLeft < casse_touche.offsetLeft +50 && element.offsetLeft + 150 > casse_touche.offsetLeft&&
        element.offsetTop < casse_touche.offsetTop +50 && element.offsetTop + 150 > casse_touche.offsetTop) {
        casse_touche.remove();
        console.log("je détruit");
      }
    }
    let cassable = document.getElementsByClassName("cassable");
    for (let index = 0; index < cassable.length; index++) {
      console.log("je vais casser");
      console.log(cassable[index]);
      
      
      const cassable_touche = cassable[index];
      if (element.offsetLeft < cassable_touche.offsetLeft +50 && element.offsetLeft + 150 > cassable_touche.offsetLeft&&
        element.offsetTop < cassable_touche.offsetTop +50 && element.offsetTop + 150 > cassable_touche.offsetTop) {
        cassable_touche.classList="casse";
        console.log("je casse");
      }
    }

}, 1000);
setTimeout(function(){
    element.remove();
}, 3000);
}

// event listener pour écouter les touches du clavier, et bouger le carré en fonction de ces touches
window.addEventListener("keydown", function(event) {



  // deplacement joueur
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
      if (vie > 0) {
        
        let bombe_existe = document.getElementsByClassName("bombe");
        if(bombe_existe.length<3){
          bombe(carre);
        }
        else{ 
        }
      }
      else{

      }
    break;
  }
  let e1= document.getElementById("1")
  let e2= document.getElementById("2")
  let e3= document.getElementById("3")
   

    if(carre.offsetLeft < e1.offsetLeft +50 && carre.offsetLeft + 50 > e1.offsetLeft&&
      carre.offsetTop < e1.offsetTop +50 && carre.offsetTop + 50 > e1.offsetTop 
     ){
     point_vie();
    
    }
    if(  carre.offsetLeft < e2.offsetLeft +50 && carre.offsetLeft + 50 > e2.offsetLeft&&
      carre.offsetTop < e2.offsetTop +50 && carre.offsetTop + 50 > e2.offsetTop){
      point_vie();
            
    }

    if (carre.offsetLeft < e3.offsetLeft +50 && carre.offsetLeft + 50 > e3.offsetLeft&&
      carre.offsetTop < e3.offsetTop +50 && carre.offsetTop + 50 > e3.offsetTop) {
    point_vie();
    }
});

// faire bouger l'ennemi dans une direction aléatoirement
for (let i_ennemi = 0; i_ennemi < ennemi.length; i_ennemi++) {
  const element = ennemi[i_ennemi];

  //emplacement des ennemis
  let left_enemi = parseInt(
    window.getComputedStyle(element).getPropertyValue("left")
  );
  let top_enemi = parseInt(
    window.getComputedStyle(element).getPropertyValue("top")
  );
  left_enemi = parseInt(window.getComputedStyle(element).getPropertyValue("left"));
  top_enemi = parseInt(window.getComputedStyle(element).getPropertyValue("top"));

let pose=[ "0", "50", "100", "150", "200", "250", "400", "450", "500", "550", "600", "650"];
let random_left = pose[Math.floor(Math.random() * pose.length)];
let random_top = pose[Math.floor(Math.random() * pose.length)];
element.style.left = random_left+"px";
element.style.top = random_top+"px";

  //mouvements des ennemis
  setInterval(function(){

    let random = getRandomInt(4);
  switch (random) {
    case 0:
      if(parseInt(window.getComputedStyle(element).getPropertyValue("top")) === 0){
        move(element, "bas");
      }
      else{
        move(element, "haut");
      }
      break;
      case 1:
          if(parseInt(window.getComputedStyle(element).getPropertyValue("top")) === 650){
            move(element, "haut");
          }
          else{
            move(element, "bas");
          }
      break;
      case 2:
          if(parseInt(window.getComputedStyle(element).getPropertyValue("left")) === 0){
            move(element, "droite");
          }
          else{
            move(element, "gauche");
          }
      break;
      case 3:
          if(parseInt(window.getComputedStyle(element).getPropertyValue("left")) === 650){
            move(element, "gauche");
          }
          else{
            move(element, "droite");
          }
      break;
  }

  let e1= document.getElementById("1")
  let e2= document.getElementById("2")
  let e3= document.getElementById("3")
   

    if(carre.offsetLeft < e1.offsetLeft +50 && carre.offsetLeft + 50 > e1.offsetLeft&&
      carre.offsetTop < e1.offsetTop +50 && carre.offsetTop + 50 > e1.offsetTop 
     ){
     point_vie();
    
    }
    if(  carre.offsetLeft < e2.offsetLeft +50 && carre.offsetLeft + 50 > e2.offsetLeft&&
      carre.offsetTop < e2.offsetTop +50 && carre.offsetTop + 50 > e2.offsetTop){
      point_vie();
            
    }

    if (carre.offsetLeft < e3.offsetLeft +50 && carre.offsetLeft + 50 > e3.offsetLeft&&
      carre.offsetTop < e3.offsetTop +50 && carre.offsetTop + 50 > e3.offsetTop) {
    point_vie();
    }

  
  },100000000)
  
}
function point_vie(){
 vie -= 1;
 divVie.innerHTML="vie : "+vie;
 if(vie == 0){
 let popup = document.getElementById ("popup");
 popup.classList.remove("hide") ;
 carre.remove ();
 vie = 0;
 divVie.innerHTML="vie : "+vie;
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

let obs_number = nb_obstacle(1,20);
for (let i = 0; i < obs_number; i++) {
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  //position obstacles
  let pose_obstacle=[ "0", "50", "100", "150", "200", "250","300","350", "400", "450", "500", "550", "600", "650"];
  let random_left_obstacle = pose_obstacle[Math.floor(Math.random() * pose_obstacle.length)];
  let random_top_obstacle = pose_obstacle[Math.floor(Math.random() * pose_obstacle.length)];
  obstacle.style.left = random_left_obstacle+"px";
  obstacle.style.top = random_top_obstacle+"px";
  cadre.appendChild(obstacle);

  
  
}
//obstacles cassables ma gueule

function nb_cassables(min,max){
  return min+Math.floor(Math.random()*max); 
 }
 
 let cass_number = nb_cassables(5,30);
 for (let i = 0; i < cass_number; i++) {
   const cassable = document.createElement("div");
   cassable.classList.add("cassable");
   //position obstacles
   let pose_cassable=[ "0", "50", "100", "150", "200", "250","300","350", "400", "450", "500", "550", "600", "650"];
   let random_left_cassable = pose_cassable[Math.floor(Math.random() * pose_cassable.length)];
   let random_top_cassable= pose_cassable[Math.floor(Math.random() * pose_cassable.length)];
   cassable.style.left = random_left_cassable+"px";
   cassable.style.top = random_top_cassable+"px";
   cadre.appendChild(cassable);
 }

//Création nuage
let forme = ["1", "2"];
let top_ombre=[ "0", "50", "100", "150", "200", "250","300","350", "400", "450", "500", "550"];
setInterval(function(){
  let nuage = document.createElement('div');
  nuage.classList.add("ombre");
  let random_ombre = forme[Math.floor(Math.random() * forme.length)];
  let random_top = top_ombre[Math.floor(Math.random() * top_ombre.length)];
  if (random_ombre == 1) {
    console.log("nuage ");

    nuage.style.background ="url(nuage.png) round";
    nuage.style.filter="invert()"
    nuage.style.opacity="50%"
    nuage.style.top = random_top+"px";
    cadre.appendChild(nuage);
    move_nuage(nuage);
  }
  else{
    console.log("nuage ");

    nuage.style.background ="url(nuage.png) round";
    nuage.style.filter="invert()"
    nuage.style.opacity="50%"
    nuage.style.top = random_top+"px";
    cadre.appendChild(nuage);
    move_nuage();
  }
}, 17000);

function move_nuage() {
  setInterval(function(){
  let nuage = document.getElementsByClassName('ombre');
  for (let index = 0; index < nuage.length; index++) {
    const element = nuage[index];
    
    if (element.offsetLeft < 700) {

        element.left = element.offsetLeft;
        element.left += 50;
        element.style.left = element.left +"px"
      }
      else{
        
        element.remove();
      }
    }
  }, 2000);
  
}