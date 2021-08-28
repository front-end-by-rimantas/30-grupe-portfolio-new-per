class GalleryNavigation {
    constructor(){
        this.buttons = document.querySelectorAll('.gallery-navigation a');

        this.listener();
        this.clearClasses();
    }
    listener() {
        for (const button of this.buttons) {
            button.addEventListener('click', () => {
                this.clearClasses();
                button.classList.add('active');

            });
        }
    }
    
    clearClasses() {
        for (const button of this.buttons) {
            button.classList.remove('active');
        }
    }
};

export { GalleryNavigation };
