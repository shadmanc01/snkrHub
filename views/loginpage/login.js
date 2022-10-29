const UserName = document.getElementById('userLogin')
const userPassword = document.getElementById('userPassword')
const loginButton = document.getElementById('loginButton')


loginButton.addEventListener("click" , (event)=>{
     const username = UserName.value
     const password = userPassword.value
     const myHeader = {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }

    let rawUser = JSON.stringify({"password": password, "username": username});
    
        const request = {
        method: 'POST',
        headers: myHeader,
        body: rawUser,
    };
     
     try{
        fetch(`http://localhost:3001/authentication/login`, request)
        .then(file=> file.json())
        .then(data=> console.log(data))
        // add functionality 
      }
      catch(error){
       alert("user not found")
      }

    })