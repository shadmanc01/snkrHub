

const  username = document.getElementById('username');
const password = document.getElementById('password');
const registerButton = document.getElementById('register');


registerButton.addEventListener('click', (event) => {
     
    const pass = password.value;
    const userN = username.value;

    console.log(pass)
    if(pass.length < 1 || userN.length < 1) alert('Username or Password is too short');
    else{
        const myHeader = new Headers();
        let rawUser = JSON.stringify({"password": pass, "username": userN});
        const raw = JSON.stringify({
            "completed": true
          });
        
          const requestOptions = {
            method: 'PATCH',
            headers: myHeader,
            body: rawUser,
        
          };
        
          fetch(`http://localhost:3001`, requestOptions)
          .then(data=> data.json())
          .then( profile =>  {

          })        

    }
})
