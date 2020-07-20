let happiness=100;
function start(){
  let name= prompt("what is your pets name");
  document.getElementById("name").innerHTML=name;
  setInterval(myHealth, 5000);
  document.getElementById("happiness").innerHTML=happiness;
}
function myHealth(){
    happiness-=5
    document.getElementById("happiness").innerHTML=happiness;
}

function feed(){
  happiness+=5
  document.getElementById("happiness").innerHTML=happiness;
}
function play(){
  happiness+=5
  document.getElementById("happiness").innerHTML=happiness;
}
function bathe(){
  happiness+=5
  document.getElementById("happiness").innerHTML=happiness;
}
function sleep(){
  happiness+=5
  document.getElementById("happiness").innerHTML=happiness;
}
