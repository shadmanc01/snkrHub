const navLocker = document.getElementById("snkrLocker");
const navWish = document.getElementById("snkrWish");
const navHome = document.getElementById("home");
let welcomeMessage = document.getElementById("greetingMessage");
let welcomeMessage2 = document.getElementById("greetingMessage2");
// event 
const searchButton = document.getElementById("sneakername")
const RemoveCardInWish = document.querySelector(".card")

navLocker.addEventListener("click", removeMessage);
// fucntion to add to the wish list 

navWish.addEventListener("click", ()=>{
  removeMessage()
  const userId = window.localStorage.getItem("id")
  console.log(userId)
  fetch(`http://localhost:3001/wishlist/${userId}`)
  .then(data => data.json())
       
      }
  );

// remove from wish list 
RemoveCardInWish.addEventListener('click' , (event)=> {
  event.preventDefault()
  const sneakerName = event.target.attributes[2].value
  console.log(sneakerName)
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "sneakerName": sneakerName,
    "id" : window.localStorage.getItem("id")
  });
  
  const del = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
  };

  fetch(`http://localhost:3001/wishlist/`, del)
  .then(data => data.json())
  .then(result=> {
    console.log(result)
  })
  
})





navHome.addEventListener("click", bringbackMessage);
const searchButton = document.getElementById("sneakername");
const submitButton = document.getElementById("submitButton");
let sneakerDiv = document.getElementById("sneaker");
let buttonDiv = document.getElementById("sneakerButtons");
let cardCollection = document.getElementById("collectionCards")
let cardCollection2 = document.getElementById("collectionCards2")
let netWorth = document.getElementById("worth");
const logOut = document.getElementById("logout")
let count = 1;
let worth = 0;

logOut.addEventListener("click", (event)=> {
  event.preventDefault()
    window.localStorage.obj = []
    window.localStorage.obj2 = []
    window.location.href = "../loginpage/login.html"
})


navLocker.addEventListener("click", addLockerCards);
navWish.addEventListener("click", addWishCards);

// logOutButton.addEventListener("click", logOut);

window.addEventListener("DOMContentLoaded", customGreeting);

function addLockerCards () {
    welcomeMessage.style.display = "none";
    welcomeMessage2.style.display = "none";
    const myHeader = {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        }
        const request = {
        method: 'GET',
        headers: myHeader
    };
    try{
        fetch(`http://localhost:3001/collection/${localStorage.id}`, request)
        .then(file=> file.json())
        .then(data => {
            const arr = [];
            let count = 0;
            data.forEach(async (element) => {
                await fetch(`http://localhost:3001/${element.sneaker_name}`)
                .then(resp => resp.json())
                .then(sneaker => {
                    arr.push(sneaker);
                    count++;
                    if(count >= data.length) {
                        localStorage.setItem("obj", JSON.stringify(arr));
                    }
               
                })
            });
        });
    }
    catch(error){
        alert("Collection not Found")
       }
    const obj = JSON.parse(localStorage.obj);
    obj.forEach(el => {
        let sneakerDiv = document.createElement("div");
        sneakerDiv.className = "card";
        sneakerDiv.style.width = "18rem";
        let snkrImage = document.createElement("img");
        snkrImage.className = "card-img-top";
        snkrImage.src= el[0].thumbnail;
        snkrImage.alt = "Card image cap";
        let innerDiv = document.createElement("div");
        let title = document.createElement("h5");
        title.innerText = el[0].shoeName;
        title.className = "card-title";
        let cardtext = document.createElement("p");
        cardtext.innerText = `Silhoutte: ${el[0].silhoutte}`
        title.appendChild(cardtext);
        sneakerDiv.appendChild(snkrImage);
        sneakerDiv.appendChild(innerDiv);
        innerDiv.appendChild(title);
        sneakerDiv.style.margin = "10px";
        sneakerDiv.style.padding = "5px";
        sneakerDiv.style.border = "thick solid #977046"
        cardCollection.appendChild(sneakerDiv);
        worth+=Number(el[0].lowestResellPrice.stockX);
        // console.log(el)
    })
    // netWorth.innerText = `$${worth}`;
}

function addWishCards () {
    welcomeMessage.style.display = "none";
    welcomeMessage2.style.display = "none";
    cardCollection.style.display = "none";
    const myHeader = {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        }
        const request = {
        method: 'GET',
        headers: myHeader
    };
    try{
        fetch(`http://localhost:3001/wishlist/${localStorage.id}`, request)
        .then(file=> file.json())
        .then(data => {
            const arr = [];
            let count = 0;
            data.forEach(async (element) => {
                await fetch(`http://localhost:3001/${element.sneaker_name}`)
                .then(resp => resp.json())
                .then(sneaker => {
                    arr.push(sneaker);
                    count++;
                    if(count >= data.length) {
                        localStorage.setItem("obj2", JSON.stringify(arr));
                    }
               
                })
            });
        });
    }
    catch(error){
        alert("Collection not Found")
       }
    const obj2 = JSON.parse(localStorage.obj2);
    obj2.forEach(el => {
        let sneakerDiv = document.createElement("div");
        let snkrLocker = document.createElement("button");
        let deleteButton = document.createElement("button")
        let buttonDiv = document.createElement("div")
          deleteButton.className = "btn btn-primary me-md-2";
          deleteButton.id = `${el[0].shoeName}`
          deleteButton.type = "button";
          deleteButton.innerText = "add to snkrLocker";
          deleteButton.innerText = "Delete"
          deleteButton.style.margin = "2px";
        snkrLocker.className = "btn btn-primary me-md-2";
          snkrLocker.id = `${el[0].shoeName}`
          snkrLocker.type = "button";
          snkrLocker.innerText = "add to snkrLocker";
          deleteButton.innerText = "Delete"
          snkrLocker.style.margin = "2px";
      


        sneakerDiv.className = "card";
        sneakerDiv.id = el[0].shoeName
        sneakerDiv.style.width = "18rem";
        let snkrImage = document.createElement("img");
        snkrImage.className = "card-img-top";
        snkrImage.src= el[0].thumbnail;
        snkrImage.alt = "Card image cap";
        let innerDiv = document.createElement("div");
        let title = document.createElement("h5");
        title.innerText = el[0].shoeName;
        title.className = "card-title";
        let cardtext = document.createElement("p");
        cardtext.innerText = `Silhoutte: ${el[0].silhoutte}`
        title.appendChild(cardtext);
        sneakerDiv.appendChild(snkrImage);
        sneakerDiv.appendChild(innerDiv);
        innerDiv.appendChild(title);
        sneakerDiv.appendChild(buttonDiv);
        buttonDiv.appendChild(snkrLocker);
        buttonDiv.appendChild(deleteButton)
        snkrLocker.id =`${el[0].shoeName}`
        deleteButton.addEventListener("click", (event)=>{
          // sneakerDiv.style.display = "none"
          sneakerDiv.remove()
           
          const myHeader = {
         'Content-Type': 'application/json'
         // 'Content-Type': 'application/x-www-form-urlencoded',
         }
         const request = {
             method: 'DELETE',
             headers: myHeader,
             body: JSON.stringify({
                 "sneakerName": el[0].shoeName,
                 "id": localStorage.id
             })
         };
             fetch(`http://localhost:3001/wishlist/`, request)
             .then(file=> file.json())
             .then(data => {console.log(data)})

        })
        snkrLocker.addEventListener("click", (event) => {
           event.preventDefault()
            
          const myHeader = {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            }
            const request = {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify({
                    "sneakerName": el[0].shoeName,
                    "id": localStorage.id
                })
            };
            fetch(`http://localhost:3001/collection`, request)
            .then(file => file.json())
            .then(data => {
              console.log(data.sneaker_name,localStorage.id)
               const myHeader = {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
              }
              const request = {
                  method: 'DELETE',
                  headers: myHeader,
                  body: JSON.stringify({
                      "sneakerName": data.sneaker_name,
                      "id": localStorage.id
                  })
              };
                  fetch(`http://localhost:3001/wishlist/`, request)
                  .then(file=> file.json())
                  
                
            }
              );
              
        
      })

        sneakerDiv.style.margin = "10px";
        sneakerDiv.style.padding = "5px";
        sneakerDiv.style.border = "thick solid #977046"
        cardCollection2.appendChild(sneakerDiv);
        // console.log(el)
    })
    
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
          snkrLocker.id = "snkrLocker"
          snkrWish.className = "btn btn-primary";
          snkrLocker.type = "button";
          snkrWish.type = "button";
          snkrLocker.innerText = "add to snkrLocker";
          snkrWish.innerText = "add to snkrWish";
          buttonDiv.appendChild(snkrLocker);
          buttonDiv.appendChild(snkrWish);
          snkrLocker.style.margin = "10px";
          snkrWish.style.margin = "10px"
          snkrLocker.addEventListener("click", (event) => {
              event.preventDefault()
              sneakerDiv.removeChild(nameDisplay);
              sneakerDiv.removeChild(imgDisplay);
              buttonDiv.removeChild(snkrLocker);
              buttonDiv.removeChild(snkrWish);
              const myHeader = {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                }
                const request = {
                    method: 'POST',
                    headers: myHeader,
                    body: JSON.stringify({
                        "sneakerName": snkrName,
                        "id": localStorage.id
                    })
                };
                fetch(`http://localhost:3001/collection`, request)
                .then(file => file.json())
                .then(data => console.log(data));
          })
          snkrWish.addEventListener("click", (event) => {
            event.preventDefault()
            sneakerDiv.removeChild(nameDisplay);
            sneakerDiv.removeChild(imgDisplay);
            buttonDiv.removeChild(snkrLocker);
            buttonDiv.removeChild(snkrWish);
            const myHeader = {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                }
                const request = {
                    method: 'POST',
                    headers: myHeader,
                    body: JSON.stringify({
                        "sneakerName": snkrName,
                        "id": localStorage.id
                    })
                };
                fetch(`http://localhost:3001/wishlist`, request)
                .then(file => file.json())
                .then(data => console.log(data));
        })
        });
        // add functionality 
      }
      catch(error){
       alert("sneaker not found")
      }
})

