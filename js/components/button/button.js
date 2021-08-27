// This script is for all buttons background animation. It covers both the effect on hover and the
// effect on out of hover. 

// const button = document.querySelector('.new-per-button');
// let buttonText = button.innerHTML;

// FUNCTION RENDERS ONE EXACT BUTTON
function renderButton(button, buttonID) {
    console.log(buttonID);
    let buttonText = button.innerHTML;
    buttonText = buttonText.toUpperCase();

    // Generates button html
    button.innerHTML = `
    <div id="main-button${buttonID}" class="main-button">
        <div id="button-overlay${buttonID}" class="button-overlay"> 
        </div>
        ${buttonText}
    </div>
    `
    // DOM variables for text and background animation
    const textAnimation = document.getElementById(`main-button${buttonID}`); 
    const backgroundAnimation = document.getElementById(`button-overlay${buttonID}`);

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

// FUNCTIONS GOES THROUG HTML DOCUMENTS GRABS ALL BUTTONS AND CALLS RENDERBUTTON FUNCTION TO RENDER EACH OF BUTTON
function allButtonAnimation() {
    let buttonID = 0;
    const buttons = document.querySelectorAll('.new-per-button');
    for (const button of buttons) {
        renderButton(button, buttonID++);
    }
}

export { allButtonAnimation };
