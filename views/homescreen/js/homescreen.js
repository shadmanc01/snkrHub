
const navLocker = document.getElementById("snkrLocker");
const navWish = document.getElementById("snkrWish");
const navHome = document.getElementById("home");
let welcomeMessage = document.getElementById("greetingMessage");
let welcomeMessage2 = document.getElementById("greetingMessage2");
const searchButton = document.getElementById("sneakername");
const submitButton = document.getElementById("submitButton");
let sneakerDiv = document.getElementById("sneaker");
let buttonDiv = document.getElementById("sneakerButtons");

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
          const snkrName = data[0].shoeName;
          const snkrPrice = `Current Market Value: `+'$'+data[0].lowestResellPrice.stockX;
          const snkrImg = data[0].thumbnail;
          let nameDisplay = document.createElement("header");
          nameDisplay.innerText = snkrName;
          let priceDisplay = document.createElement("h4");
          priceDisplay.innerText = snkrPrice;
          const imgDisplay = document.createElement("img");
          imgDisplay.src = snkrImg;
          imgDisplay.width = 200;
          imgDisplay.style.border = "thick solid #1E2431";
          sneakerDiv.style.textAlign = "center";
          sneakerDiv.appendChild(nameDisplay);
          nameDisplay.appendChild(priceDisplay);
          sneakerDiv.appendChild(imgDisplay);
          let snkrLocker = document.createElement("button");
          let snkrWish = document.createElement("button");
          snkrLocker.className = "btn btn-primary me-md-2";
          snkrWish.className = "btn btn-primary";
          snkrLocker.type = "button";
          snkrWish.type = "button";
          snkrLocker.innerText = "add to snkrLocker";
          snkrWish.innerText = "add to snkrWish";
          buttonDiv.appendChild(snkrLocker);
          buttonDiv.appendChild(snkrWish);
          snkrLocker.style.margin = "10px";
          snkrWish.style.margin = "10px"
        });
        // add functionality 
      }
      catch(error){
       alert("sneaker not found")
      }
})
