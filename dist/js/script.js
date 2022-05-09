// Navbar Fixed 
const navbar = document.querySelector('#navbar')
window.onscroll = function(){
    if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add('navbar-fixed')
    }else{
        navbar.classList.remove('navbar-fixed')
    }
}


// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})
window.addEventListener('click', function(e){
    if (!navMenu.classList.contains('hidden') && hamburger.classList.contains('hamburger-active') && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.toggle('hamburger-active')
        navMenu.classList.toggle('hidden')
    }
})
