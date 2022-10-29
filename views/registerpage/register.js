

const  username = document.getElementById('username');
const password = document.getElementById('password');
const registerButton = document.getElementById('register');


registerButton.addEventListener('click', (event) => {

    const pass = password.value;
    const userN = username.value;
    if(username.length < 1 || password.length < 1) alert('Username or Password is too short');
    else{
        event.preventDefault()
        fetch("http://localhost:3001/authentication/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ "username": userN, "password": pass})
        }).then((resp) => resp.json()).then((data) => {
            console.log(data)
            if(data) alert('Account has been created succesfully, please log in.');
        })

     
    // const pass = password.value;
    // const userN = username.value;

    // console.log(pass)
    // if(pass.length < 1 || userN.length < 1) alert('Username or Password is too short');
    // else{
    //     const myHeader = new Headers();
    //     let rawUser = JSON.stringify({"password": pass, "username": userN});
    //     const raw = JSON.stringify({
    //         "completed": true
    //       });
        
    //       const request = {
    //         method: 'PATCH',
    //         headers: myHeader,
    //         body: rawUser,
        
    //       };
        
    //       fetch(`http://localhost:3001/authentication/register`, request)
    //       .then(data=> data.json())
    //       .then( profile =>  {

    //       })        


    }
})
