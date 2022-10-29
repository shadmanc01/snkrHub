const navLocker = document.getElementById("snkrLocker");
const navWish = document.getElementById("snkrWish");
const navHome = document.getElementById("home");
let welcomeMessage = document.getElementById("greetingMessage");
const logOutButton = document.getElementById("logout")

navLocker.addEventListener("click", removeMessage);
navWish.addEventListener("click", removeMessage);
navHome.addEventListener("click", bringbackMessage);
// logOutButton.addEventListener("click", logOut);

window.addEventListener("DOMContentLoaded", customGreeting);

function removeMessage () {
    welcomeMessage.style.display = "none";
    console.log("done");
}

function bringbackMessage () {
    welcomeMessage.style.display = "block";
    console.log("hi")
}

function customGreeting() {
    
    welcomeMessage.innerHTML = `Welcome ${localStorage.username}`
    console.log('Hello')
}
// function logOut() {
//     window.location.href = "../loginpage/login.html";
// }

