class GalleryNavigation {
    constructor(allData, brandData, designData, photoData, videoData, link){
        this.allData = allData;
        this.brandData = brandData;
        this.designData = designData;
        this.photoData = photoData;
        this.videoData = videoData;
        this.data = allData;
        this.buttons = document.querySelectorAll('.gallery-navigation a');
        this.galleryPhotos = document.querySelectorAll('.gallery-photo');
        this.imgIds = document.getElementsByTagName('img');
        this.link = link;

        this.listener();
        // this.clearClasses();
        this.resetGallery();
        this.responsive();
        this.renderGallery();

    }
    listener() {
        for (const button of this.buttons) {
            button.addEventListener('click', () => {
                this.clearClasses();
                button.classList.add('active');

                switch (button.innerHTML) {
                    case 'All':
                        this.data = this.allData;
                        this.renderGallery('call all');
                        break;
                    case 'Brand':
                        this.data = this.brandData;
                        this.renderGallery('call brand');
                        break;
                    case 'Design':
                        this.data = this.designData;
                        this.renderGallery();
                        break;
                    case 'Photo':
                        this.data = this.photoData;
                        this.renderGallery();
                        break;
                    case 'Video':
                        this.data = this.videoData;
                        this.renderGallery();
                        break;
                    default:
                      // code block
                  }
            });
        }
    }

    clearClasses() {
        for (const button of this.buttons) {
            button.classList.remove('active');
        }
    }

    renderGallery() {
        this.resetGallery();
        
       


        let i = 0;
        for (const photo of this.data) {
            if (photo.status === 'published') {
                const image = document.getElementById(`img${i + 1}`);
                image.src = this.link + photo.imgName;
                image.alt = photo.imgAltName;
                this.galleryPhotos[i].querySelector('.photo-title').innerHTML = photo.overlayTitle;
                i++;
   
            }
        }

        this.animateGallery();
    }

    resetGallery() {
        for (let i = 1; i <=8; i++) {
            document.getElementById(`img${i}`).src = '';
            document.getElementById(`img${i}`).alt = '';
        }
    }

    animateGallery() {
        for (const photo of this.galleryPhotos) {
            photo.classList.remove('gallery-photo2');
            setTimeout(() => {
                photo.classList.add('gallery-photo2');
            }, 100);
        }
    }

    responsive() {
        
        function clearStyles() {
            for (let i = 1; i <= 8; i++) {
                document.getElementById(`gal${i}`).style = '';
            }
        }

        function fixMargins() {
            setTimeout(() => {
                if (window.innerWidth > 770) {
                    clearStyles();
                    document.getElementById(`gal4`).style = 'margin-top: -8%;';
                    document.getElementById(`gal6`).style = 'margin-top: -8%;';
                    document.getElementById(`gal8`).style = 'width: 65%;';
                } 
                else if (window.innerWidth <= 770 && window.innerWidth > 575) {
                    clearStyles();
                    document.getElementById(`gal3`).style = 'margin-top: -11%;';
                    document.getElementById(`gal5`).style = 'margin-top: -22%;';
                    document.getElementById(`gal7`).style = 'margin-top: -33%;';
                } 
                else if (window.innerWidth <= 575) {
                    clearStyles();
                } 
            }, 50);
        }
        
        fixMargins();


        // 575
        window.addEventListener('resize', () => {
            setTimeout(() => {
                fixMargins();
            }, 500);
        });
    }
};

export { GalleryNavigation };
