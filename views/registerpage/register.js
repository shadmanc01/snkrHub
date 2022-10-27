const { application } = require("express");

let username = document.getElementById('username');
let password = document.getElementById('password');
let registerButton = document.getElementById('register');

registerButton.addEventListener('click', (event) => {
    event.preventDefault()
    const pass = password.value;
        const userN = username.value;
    if(username.length < 1 || password.length < 1) alert('Username or Password is too short');
    else{
        const myHeader = new Headers();
        let rawUser = JSON.stringify({"password": pass, "username": userN});
    }
})