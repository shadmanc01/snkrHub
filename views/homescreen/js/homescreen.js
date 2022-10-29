const navLocker = document.getElementById("snkrLocker");
const navWish = document.getElementById("snkrWish");
const navHome = document.getElementById("home");
let welcomeMessage = document.getElementById("greetingMessage");
let welcomeMessage2 = document.getElementById("greetingMessage2");
const logOutButton = document.getElementById("logout")

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
// function logOut() {
//     window.location.href = "../loginpage/login.html";
// }
// code for the modal
var domainroot = "www.frontendfreecode.com"
//---------Vars for the engine--------------------------->
var searchaction = [ //form action for the 3 search engines
    "http://www.google.com/search",
    "http://search.yahoo.com/search",
    "http://search.msn.com/results.aspx"
]
var queryfieldname = ["q", "p", "q"] //name of hidden query form for the 3 search engines
function switchaction(cur, index) {
    cur.form.action = searchaction[index]
    document.getElementById("hiddenquery").name = queryfieldname[index]
}
function jksitesearch(curobj) {
    for (i = 0; i < document.jksearch.se.length; i++) { //loop through radio to see which is checked
        if (document.jksearch.se[i].checked == true)
            switchaction(document.jksearch.se[i], i)
        document.getElementById("hiddenquery").value = "site:" + domainroot + " " + curobj.qfront.value
    }
}

//search sneaker modal


