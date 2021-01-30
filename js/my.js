let btnSendToMe = document.getElementById("btn-sendToMe");
// let userName = document.getElementById("input-name").value;
// let userEmail = document.getElementById("input-email").value;
// let userQuestion = document.getElementById("input-question").innerText;

btnSendToMe.addEventListener("click", () => alert(
   "Nama : " + document.getElementById("input-name").value +
   "\nEmail : " + document.getElementById("input-email").value +
   "\nQuestion : " + document.getElementById("input-question").value
));