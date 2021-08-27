const button = document.getElementById('new-per-button');
// const textAnimation = document.querySelector('.main-button');
// const backgroundAnimation = document.querySelector('.');
let buttonText = button.innerHTML;

function buttonAnimation() {
    buttonText = buttonText.toUpperCase();


    console.log(buttonText);
    button.innerHTML = `
    <div class="main-button">
        <div class="button-overlay">
            
        </div>
        ${buttonText}
    </div>
    `

    button.addEventListener('mouseenter', () => {
        console.log('enterdd');
        
        button.innerHTML = `
        <div class="main-button text-animation">
            <div class="button-overlay background-animation">
                
            </div>
            ${buttonText}
        </div>
        `

    });

    button.addEventListener('mouseleave', () => {
        console.log('exit');
        
        button.innerHTML = `
        <div class="main-button text-animation reverse">
            <div class="button-overlay background-animation reverse">
                
            </div>
            ${buttonText}
        </div>
        `
    });
};

export { buttonAnimation };
