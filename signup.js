var Fname = document.getElementById("Fname")
var Lname = document.getElementById("Lname")
var Email = document.getElementById("Email-input")
var Pass = document.getElementById("Pass-input")
var btnsend = document.getElementById("send")

btnsend.addEventListener('click', Send)

function Send () {
       if (Fname.value === '' || Lname === '' || Email.value === '' || Pass.value === '') {
           alert("Please Full All Inputs")
       }
       else {
             localStorage.setItem("FirstName" , Fname.value)
             localStorage.setItem("LastName" , Lname.value)
             localStorage.setItem("Email" , Email.value)
             localStorage.setItem("Password" , Pass.value)

             setTimeout(() => {
                location = 'login.html'
               }, 1000)
       }

}


