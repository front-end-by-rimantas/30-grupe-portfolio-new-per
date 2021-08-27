// This script is for button background animation. It covers both the effect on hover and the
// effect on out of hover. 

const button = document.getElementById('new-per-button');
let buttonText = button.innerHTML;

function buttonAnimation() {
    buttonText = buttonText.toUpperCase();

    // Generates button html
    button.innerHTML = `
    <div id="main-button" class="main-button">
        <div id="button-overlay" class="button-overlay"> 
        </div>
        ${buttonText}
    </div>
    `
    // DOM variables for text and background animation
    const textAnimation = document.getElementById('main-button'); 
    const backgroundAnimation = document.getElementById('button-overlay');

    // Animation for hover begins. Button mouseenter listener
    button.addEventListener('mouseenter', () => {
        textAnimation.classList.add('text-animation');
        backgroundAnimation.classList.add('background-animation');

    setTimeout(() => {
        textAnimation.style.color = 'black';
        textAnimation.style.backgroundColor = 'var(--third)';
    }, 300);

    // Clears animation classes after animation is finished
    setTimeout(() => {
        textAnimation.classList.remove('text-animation');
        backgroundAnimation.classList.remove('background-animation');
        textAnimation.classList.remove('reverse');
        backgroundAnimation.classList.remove('reverse');
    }, 300);

    });

    // Animation for unhover begins. Button mouseleave listener
    button.addEventListener('mouseleave', () => {
        textAnimation.style = '';
        textAnimation.style = '';
        textAnimation.classList.add('text-animation');
        backgroundAnimation.classList.add('background-animation');
        textAnimation.classList.add('reverse');
        backgroundAnimation.classList.add('reverse');
        
        // Clears animation classes after animation is finished
        setTimeout(() => {
            textAnimation.classList.remove('text-animation');
            backgroundAnimation.classList.remove('background-animation');
            textAnimation.classList.remove('reverse');
            backgroundAnimation.classList.remove('reverse');
        }, 300);

    });
};

export { buttonAnimation };
