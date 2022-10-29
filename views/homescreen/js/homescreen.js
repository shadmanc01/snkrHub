
const navLocker = document.getElementById("snkrLocker");
const navWish = document.getElementById("snkrWish");
const navHome = document.getElementById("home");
let welcomeMessage = document.getElementById("greetingMessage");
let welcomeMessage2 = document.getElementById("greetingMessage2");
const searchButton = document.getElementById("sneakername");
const submitButton = document.getElementById("submitButton");

navLocker.addEventListener("click", removeMessage);
navWish.addEventListener("click", removeMessage);
navHome.addEventListener("click", bringbackMessage);
// logOutButton.addEventListener("click", logOut);

window.addEventListener("DOMContentLoaded", customGreeting);

function removeMessage () {
    welcomeMessage.style.display = "none";
    welcomeMessage2.style.display = "none";
    console.log("done");
}

function bringbackMessage () {
    welcomeMessage.style.display = "block";
    console.log("hi")
}

function customGreeting() {
    const name = localStorage.username[0].toUpperCase()+localStorage.username.substring(1);

    welcomeMessage.innerHTML = `Welcome ${name}`;
    welcomeMessage2.innerHTML = `Welcome ${name}`;
}

//search sneaker modal

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const snkr = searchButton.value;
    console.log(snkr);
    const myHeader = {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        }

        let rawSnkr = JSON.stringify({"sneakerName": snkr});
        const request = {
        method: 'GET',
        headers: myHeader
    };
     
     try{
        fetch(`http://localhost:3001/${snkr}`, request)
        .then(file=> file.json())
        .then(data=> {
          console.log(data);
        });
        // add functionality 
      }
      catch(error){
       alert("user not found")
      }
})
