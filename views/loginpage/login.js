const UserName = document.getElementById('userLogin')
const userPassword = document.getElementById('userPassword')
const logInButton = document.getElementById('logInButton')


logInButton.addEventListener("click" , (event)=>{
     const user = UserName.value
     const password = userPassword.value
     
     try{
        fetch(`http://localhost:3001/${user}`)
        .then(file=> file.json())
        .then(data=> {})
        // add functionality 
      }
      catch(error){
       alert("user not found")
      }

    })