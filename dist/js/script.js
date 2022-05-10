window.onload = function () {
    navbarFixed()
}

// Navbar Fixed 
const navbar = document.querySelector('#navbar')
window.onscroll = navbarFixed
function navbarFixed(){
    if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add('navbar-fixed')
    }else{
        navbar.classList.remove('navbar-fixed')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')
const sections = document.querySelectorAll('section')
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
    sections.forEach((e)=>e.classList.toggle('blur-sm'))
})
window.addEventListener('click', function(e){
    if (!navMenu.classList.contains('hidden') && hamburger.classList.contains('hamburger-active') && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.toggle('hamburger-active')
        navMenu.classList.toggle('hidden')
        sections.forEach((e)=>e.classList.toggle('blur-sm'))
    }
})

// Dark Mode 
const html = document.documentElement
const darkmodeToggle = document.querySelector('#darkmodeToggle')
darkmodeToggle.addEventListener('click', function(){
    html.classList.toggle('dark')
    html.classList.contains('dark') ? localStorage.theme = 'dark' : localStorage.theme = 'light'
})
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark')
}else{
    html.classList.remove('dark')
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });