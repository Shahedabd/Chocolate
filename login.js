var Email = document.getElementById("Email-input")
var Pass = document.getElementById("Pass-input")
var send = document.getElementById("ok")
var emailstorage = localStorage.getItem('Email')
var passstorage = localStorage.getItem('Password')

send.addEventListener('click', Ok)
function Ok() {
       if (Email.value === emailstorage && Pass.value === passstorage){
        setTimeout( () =>
            {
                location = 'index.html'
            } 
       ), 2000}
       else if (Email.value === '' || Pass.value === ''){
        alert("Please Full All Inputs")
       }
       else {
        alert("Your Info Not True!")
       }
}