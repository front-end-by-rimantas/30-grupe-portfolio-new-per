const button = document.getElementById('new-per-button');
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
};

export { buttonAnimation };
