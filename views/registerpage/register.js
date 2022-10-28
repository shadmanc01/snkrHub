const { application } = require("express");

let username = document.getElementById('username');
let password = document.getElementById('password');
let registerButton = document.getElementById('register');

registerButton.addEventListener('click', (event) => {
    const pass = password.value;
    const userN = username.value;
    if(username.length < 1 || password.length < 1) alert('Username or Password is too short');
    else{
        event.preventDefault()
        fetch("http://localhost:3001/authentication/register", {
            method: "POST",
            headers: new Headers(),
            body: JSON.stringify({ "username": userN, "password": pass})
        }).then((resp) => resp.json()).then((data) => {
            if(data) alert('Account has been created succesfully, please log in.');
        })

    }
})
