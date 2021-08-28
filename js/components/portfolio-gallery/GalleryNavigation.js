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
        this.clearClasses();
        this.resetGallery();
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
                        // console.log('PASIRINKO ALL', this.data);
                        this.renderGallery('call all');
                        break;
                    case 'Brand':
                        this.data = this.brandData;
                        // console.log('PASIRINKO BRAND', this.data);
                        this.renderGallery('call brand');
                        break;
                    case 'Design':
                        console.log('PASIRINKO DESING');
                        this.data = this.designData;
                        this.renderGallery();
                        break;
                    case 'Photo':
                        console.log('PASIRINKO PHOTO');
                        this.data = this.photoData;
                        this.renderGallery();
                        break;
                    case 'Video':
                        console.log('PASIRINKO VIDEO');
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
        console.log(this.data);
        for (const photo of this.data) {
            if (photo.status === 'published') {
                const image = document.getElementById(`img${i + 1}`);
                image.src = this.link + photo.imgName;
                image.alt = photo.imgAltName;
                this.galleryPhotos[i].querySelector('.photo-title').innerHTML = photo.overlayTitle;
                i++;
   
            }

            // photo.querySelector('.gallery-photo img') = this.link + this.data.imgName;
            // photo.querySelector('.photo-title').innerHTML = this.data[i].overlayTitle;

            // console.log(photo.querySelector('.gallery-photo img'));
            // console.log(photo.querySelector('.photo-title').innerHTML);
            // console.log(photo.que;
            
        }
        // const imgDOM = document.querySelector('.gallery-photo img');

    }

    resetGallery() {
        for (let i = 1; i <=8; i++) {
            document.getElementById(`img${i}`).src = '';
            document.getElementById(`img${i}`).alt = '';
        }
    }
};

export { GalleryNavigation };
