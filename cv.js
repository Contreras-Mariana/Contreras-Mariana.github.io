
const details1=document.getElementById("details1");
const details2=document.getElementById("details2");
const details3=document.getElementById("details3");

document.getElementById('details1').addEventListener('click', function() {
  details2.removeAttribute("open");
  details3.removeAttribute("open");
  console.log= "paso 1";
})

document.getElementById('details2').addEventListener('click', function() {
  details1.removeAttribute("open");
  details3.removeAttribute("open");
  console.log= "paso 2";
})

document.getElementById('details3').addEventListener('click', function() {
  details1.removeAttribute("open");
  details2.removeAttribute("open");
  console.log= "paso 3";
})



