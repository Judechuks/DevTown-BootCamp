const login = document.getElementById("login");
const register = document.getElementById("register");
const registerBtn = document.querySelector(".register-toggle");
const loginBtn = document.querySelector(".login-toggle");

const btn = document.getElementById("btn");

registerBtn.addEventListener("click", function(){
  login.style.left = `-400px`;
  register.style.left = `50px`;
  btn.style.left = `110px`;
});
loginBtn.addEventListener("click", function(){
  login.style.left = `50px`;
  register.style.left = `450px`;
  btn.style.left = `0`;
});