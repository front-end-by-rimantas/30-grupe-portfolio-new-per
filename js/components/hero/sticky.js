const targetDOM = document.querySelector(['.sticky-begin']);
const navigationDOM = document.querySelector('.hero nav');
const navbarDOM = document.getElementById('navigation');
const logoDOM = document.querySelector('.logo');
const logo2DOM = document.querySelector('.logo2');
const navbarExpandDOM = document.querySelector('.hero .navigation');
let isVisible = false;

navbarDOM.addEventListener('click', function() {
    if (isVisible) {
        navbarExpandDOM.style.display = "none";
        isVisible = false;
    } else {
        navbarExpandDOM.style.display = "inline-block";
        isVisible = true;
    }
    
});

console.log(window);
window.innerWidth <= 861 ? navbarExpandDOM.classList.add('expanded') : 0;

addEventListener('scroll', () => {
    // console.log(scrollY);
    
    if (scrollY > targetDOM.offsetTop - 30) {
        navigationDOM.classList.add('sticky');
        logoDOM.classList.add('hide');
        logo2DOM.classList.remove('hide');

    } else {
        navigationDOM.classList.remove('sticky');
        logoDOM.classList.remove('hide');
        logo2DOM.classList.add('hide');
    }
})


window.addEventListener('resize', function() {
    console.log(window.innerHeight);
    // console.log(window.innerWidth);
    if (window.innerWidth <= 861) {
        navbarExpandDOM.classList.add('expanded');
    } else {
        navbarExpandDOM.classList.remove('expanded');
    }

});