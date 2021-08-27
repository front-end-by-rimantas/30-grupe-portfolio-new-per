const button = document.getElementById('new-per-button');
// const textAnimation = document.querySelector('.main-button');
// const backgroundAnimation = document.querySelector('.button-overlay');
let buttonText = button.innerHTML;

function buttonAnimation() {
    buttonText = buttonText.toUpperCase();


    console.log(buttonText);
    button.innerHTML = `
    <div id="main-button" class="main-button">
        <div id="button-overlay" class="button-overlay">
            
        </div>
        ${buttonText}
    </div>
    `
    const textAnimation = document.getElementById('main-button'); 
    // querySelector('.main-button');
    const backgroundAnimation = document.getElementById('button-overlay');
    // querySelector('.button-overlay');
console.log(textAnimation, backgroundAnimation);


    button.addEventListener('mouseenter', () => {
        console.log('enterdd');
        textAnimation.classList.add('text-animation');
        backgroundAnimation.classList.add('background-animation');
        // button.innerHTML = `
        // <div class="main-button text-animation">
        //     <div class="button-overlay background-animation">
                
        //     </div>
        //     ${buttonText}
        // </div>
        // `


    setTimeout(() => {
        textAnimation.style.color = 'black';
        textAnimation.style.backgroundColor = 'var(--third)';
    }, 300);

    setTimeout(() => {
        textAnimation.classList.remove('text-animation');
        backgroundAnimation.classList.remove('background-animation');
        textAnimation.classList.remove('reverse');
        backgroundAnimation.classList.remove('reverse');
    }, 300);

   

    });

    button.addEventListener('mouseleave', () => {
        textAnimation.style = '';
        textAnimation.style = '';
        console.log('exit');
        textAnimation.classList.add('text-animation');
        backgroundAnimation.classList.add('background-animation');
        textAnimation.classList.add('reverse');
        backgroundAnimation.classList.add('reverse');
        
        // button.innerHTML = `
        // <div class="main-button text-animation reverse">
        //     <div class="button-overlay background-animation reverse">
                
        //     </div>
        //     ${buttonText}
        // </div>
        // `
        setTimeout(() => {
            textAnimation.classList.remove('text-animation');
            backgroundAnimation.classList.remove('background-animation');
            textAnimation.classList.remove('reverse');
            backgroundAnimation.classList.remove('reverse');
        }, 300);

    });
};

export { buttonAnimation };
