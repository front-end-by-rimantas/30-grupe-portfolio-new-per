class GalleryHover {
    constructor() {
        // this.data = data;
        // this.play();
        this.listen();
        this.hoverTime;
        this.unhoverTime;
        // this.addlistener();
    }
    listen() {
        const photos = document.querySelectorAll('.gallery-photo');
        for (const photo of photos) {
               
            photo.addEventListener('mouseenter', (time) => {
                this.hoverTime = time.timeStamp;
                const overlay1 = photo.querySelector('.gallery-overlay1');
                const overlay2 = photo.querySelector('.gallery-overlay2');
                const overlay3 = photo.querySelector('.gallery-overlay3');

                overlay1.classList.remove('playforward1');
                    overlay2.classList.remove('playforward2');
                    overlay3.classList.remove('playforward3');
                    overlay1.classList.remove('playbackward');
                    overlay2.classList.remove('playbackward');
                    overlay3.classList.remove('playbackward');

                    setTimeout(() => {
                        overlay1.classList.add('playforward1');
                        overlay2.classList.add('playforward2');
                        overlay3.classList.add('playforward3');
                    }, 40);
           


                // if (this.hoverTim - ethis.unhoverTime > 1000) {
                //     overlay1.classList.remove('playforward1');
                //     overlay2.classList.remove('playforward2');
                //     overlay3.classList.remove('playforward3');
                //     overlay1.classList.remove('playbackward');
                //     overlay2.classList.remove('playbackward');
                //     overlay3.classList.remove('playbackward');

                //     setTimeout(() => {
                //         overlay1.classList.add('playforward1');
                //         overlay2.classList.add('playforward2');
                //         overlay3.classList.add('playforward3');
                //         // overlay1.classList.add('playbackward');
                //         // overlay2.classList.add('playbackward');
                //         // overlay3.classList.add('playbackward');
                //     }, 100);
                // } else {
                //     overlay1.classList.add('playbackward');
                //     overlay2.classList.add('playbackward');
                //     overlay3.classList.add('playbackward');
                // }

            });


            
            photo.addEventListener('mouseleave', (time) => {
                this.unhoverTime = time.timeStamp;
                const overlay1 = photo.querySelector('.gallery-overlay1');
                const overlay2 = photo.querySelector('.gallery-overlay2');
                const overlay3 = photo.querySelector('.gallery-overlay3');

                if (this.unhoverTime - this.hoverTime > 1000) {
                    overlay1.classList.remove('playforward1');
                    overlay2.classList.remove('playforward2');
                    overlay3.classList.remove('playforward3');

                    setTimeout(() => {
                        overlay1.classList.add('playforward1');
                        overlay2.classList.add('playforward2');
                        overlay3.classList.add('playforward3');
                        overlay1.classList.add('playbackward');
                        overlay2.classList.add('playbackward');
                        overlay3.classList.add('playbackward');
                    }, 100);
                } else {
                    overlay1.classList.add('playbackward');
                    overlay2.classList.add('playbackward');
                    overlay3.classList.add('playbackward');
                }

                // setTimeout(() => {
                //     overlay1.classList.remove('playforward1');
                //     overlay2.classList.remove('playforward2');
                //     overlay3.classList.remove('playforward3');
                //     overlay1.classList.remove('playbackward');
                //     overlay2.classList.remove('playbackward');
                //     overlay3.classList.remove('playbackward');
                // }, 1000);

            });



        }

    }
};

export { GalleryHover };
