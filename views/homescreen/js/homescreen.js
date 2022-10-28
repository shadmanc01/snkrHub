const navLocker = document.getElementById("snkrLocker");
const navWish = document.getElementById("snkrWish");
const navHome = document.getElementById("home");
const welcomeMessage = document.getElementById("greetingMessage");

navLocker.addEventListener("click", removeMessage);
navWish.addEventListener("click", removeMessage);
navHome.addEventListener("click", bringbackMessage);


function removeMessage () {
    welcomeMessage.style.display = "none";
    console.log("done");
}

function bringbackMessage () {
    welcomeMessage.style.display = "block";
    console.log("hi")
}