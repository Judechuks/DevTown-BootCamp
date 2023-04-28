// LOGIN & REGISTION SUCCESSFUL
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("okBtn");
const closeX = document.querySelector(".closeX");

closeBtn.addEventListener("click", function(){
  modal.style.display = "none";
});

closeX.addEventListener("click", function(){
  modal.style.display = "none";
});