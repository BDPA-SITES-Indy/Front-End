let health=100;
function namePet(){
  let petName= prompt("What Is Your Pets Name?");
  document.getElementById("name").innerHTML=petName;
  document.getElementById("start").style.display = "none";
  document.getElementById("happiness").innerHTML = "Happiness: " + health;
  setInterval(myHealth, 5000);
}


function startGame(){
health-=5;
document.getElementById("happiness").innerHTML = "Happiness: " + health;
}

function myHealth(){
  health-=5;
  document.getElementById("happiness").innerHTML = "Happiness: " + health;
}

function feed(){
  if(health >=100){
    document.getElementById("update").innerHTML = "Your Pet Doesn't Need Anything!";
  }else{
    health+=3;
    document.getElementById("happiness").innerHTML = "Happiness: " + health;
    document.getElementById("update").innerHTML = "Mmmm! That was really good!";
  }
}

function bathe(){
  if(health >= 100){
    document.getElementById("update").innerHTML = "Your Pet Doesn't Need Anything!";
  }else{
    health+=3;
    document.getElementById("happiness").innerHTML = "Happiness: " + health;
    document.getElementById("update").innerHTML = "Your pet is very clean!";
  }
}

function sleep(){
  if(health >= 100){
    document.getElementById("update").innerHTML = "Your pet is already well rested up!";
  }else{
    health+=3;
    document.getElementById("happiness").innerHTML = "Happiness: " + health;
    document.getElementById("update").innerHTML = "Wow! That was a really good nap!";
  }
}

function play(){
  if(health >= 100){
    document.getElementById("update").innerHTML = "Your pet doesn't need anything."
  }else{
    health+=3;
    document.getElementById("happiness").innerHTML = "Happiness: " + health;
    document.getElementById("update").innerHTML = "It was really fun playing!";
  }
}
