
const techdiv = document.getElementById('techdiv');
const creatediv = document.getElementById('creatediv');
const infodiv = document.getElementById('infodiv');
const techlinks = document.getElementsByClassName('techlinks');
const createlinks = document.getElementsByClassName('createlinks');
const infolinks = document.getElementsByClassName('infolinks');
let techvis = false;
let createvis = false;
let infovis = false;

techdiv.onclick=function(){
  if (techvis==false){
    Array.from(techlinks).forEach(makeVisible);
    Array.from(techlinks).forEach(opacityUp);
    techvis=true;
  } else {
    Array.from(techlinks).forEach(makeHidden);
    Array.from(techlinks).forEach(opacityDown);
    techvis=false;
  }

}
creatediv.onclick=function(){
  if (createvis==false){
    createvis=true;
    Array.from(createlinks).forEach(makeVisible);
    Array.from(createlinks).forEach(opacityUp);
  } else {
    createvis=false;
    Array.from(createlinks).forEach(makeHidden);
    Array.from(createlinks).forEach(opacityDown);
  }

}
function makeVisible(x){
  x.style.display = 'inline';
}
function makeHidden(x){
  x.style.display ='none';
}
function opacityUp(x){
  setTimeout(function(){
    x.style.opacity = 1;
  }, 1);
}
function opacityDown(x){
  setTimeout(function(){
    x.style.opacity = 0;
  }, 1);
}
document.body.onload = function(){
  document.getElementById('hidden').src ='./postersandboards.html';
}