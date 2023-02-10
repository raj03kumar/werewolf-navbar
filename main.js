// Get elements from the DOM
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".menu");

// PX offset when the navbar activates
const offset = 50;

// Add click event to menu button
menuBtn.addEventListener('click', ()=>{
    // Toggle the 'menu-open' class
    menu.classList.toggle('menu-open');
});

// Add scroll event listener to the page
window.addEventListener("scroll", ()=>{
    // If the page is scrolled by 50px or more
    if(pageYOffset>offset){
        // Activate navbar
        navbar.classList.add('navbar-active');
    }
    else{
        // Deactivate navbar
        navbar.classList.remove('navbar-active');
    }
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};