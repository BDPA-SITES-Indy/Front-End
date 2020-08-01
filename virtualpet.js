let health=100;
function namePet(){
  let petName = prompt("What Is Pets Name?");
  document.getElementById("name").innerHTML=petName;
  document.getElementById("start").style.display = "none";
  document.getElementById("happiness").innerHTML = "Happiness: " + health;
  setInterval(myHealth, 5000);
}


function startGame(){
  health-=5;
  document.getElementById("happiness").innerHTML = "Happiness"  + health;
}

function myHealth(){
  health-=5;
  document.getElementById("happiness").innerHTML = "Happiness"  + health;
}

function eat(){
  if(health >=100){
    document.getElementById("update").innerHTML = "Your Pet Doesn't Need Any Food!";
  }else {
    health+=3;
    document.getElementById("happiness").innerHTML = "Happiness: "  + health;
    document.getElementById("update").innerHTML = "That food was good!";
  }
}
function bathe(){
  if(health >=100){
    document.getElementById("update").innerHTML = "Your Pet Doesn't Need A Bath!";
  }else {
    health+=3;
    document.getElementById("happiness").innerHTML = "Happiness: "  + health;
    document.getElementById("update").innerHTML = "Your pet is clean now!";
  }
}
function sleep(){
  if(health >=100){
    document.getElementById("update").innerHTML = "Your Pet Doesn't Need To Sleep!";
  }else {
    health+=3;
    document.getElementById("happiness").innerHTML = "Happiness: "  + health;
    document.getElementById("update").innerHTML = "That nap felt really good!";
  }
}function play(){
  if(health >=100){
    document.getElementById("update").innerHTML = "Your Pet Doesn't Need To Plat!";
  }else {
    health+=3;
    document.getElementById("happiness").innerHTML = "Happiness: "  + health;
    document.getElementById("update").innerHTML = "I had so much fun!";
  }
}
