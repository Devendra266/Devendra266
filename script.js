let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar')
let login = document.querySelector('#user-login')
let loginform = document.querySelector('.login-form')




menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')

}
login.onclick = () =>{
    loginform.classList.toggle('active')

}































