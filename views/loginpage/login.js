const UserName = document.getElementById('userLogin')
const userPassword = document.getElementById('userPassword')
const logInButton = document.getElementById('logInButton')


logInButton.addEventListener("click" , (event)=>{
     const username = UserName.value
     const password = userPassword.value
     const myHeader = new Headers();
        let rawUser = JSON.stringify({"password": password, "username": username});
        
          const request = {
            method: 'PATCH',
            headers: myHeader,
            body: rawUser,
        
          };
     
     try{
        fetch(`http://localhost:3001/authentication/login'`, request)
        .then(file=> file.json())
        .then(data=> {})
        // add functionality 
      }
      catch(error){
       alert("user not found")
      }

    })