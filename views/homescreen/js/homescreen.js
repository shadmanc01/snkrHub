
const navLocker = document.getElementById("snkrLocker");
const navWish = document.getElementById("snkrWish");
const navHome = document.getElementById("home");
let welcomeMessage = document.getElementById("greetingMessage");
let welcomeMessage2 = document.getElementById("greetingMessage2");
const searchButton = document.getElementById("sneakername")

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

searchButton.addEventListener("click", () => {
    const snkr = sneakername.value;
    const myHeader = {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        }

        let rawSnkr = JSON.stringify({"password": snkr});
    
        const request = {
        method: 'POST',
        headers: myHeader,
        body: rawUser,
    };
     
     try{
        fetch(`http://localhost:3001/authentication/login`, request)
        .then(file=> file.json())
        .then(data=> {
          if(data.id) {
            window.localStorage.setItem("username", data.username);
            window.localStorage.setItem("id", data.id);
            window.location.href = "../homescreen/index.html";
          }
        });
        // add functionality 
      }
      catch(error){
       alert("user not found")
      }
})