let burger = document.getElementById('burger');
let headermenu = document.getElementById('headermenu');
let body = document.getElementsByTagName('body')

burger.onclick = function(){
  headermenu.classList.toggle("active");
  body.classList.toggle('lock');
};