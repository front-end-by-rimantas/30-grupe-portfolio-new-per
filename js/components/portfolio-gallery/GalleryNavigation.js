class GalleryNavigation {
    constructor(data, link){
        this.data = data;
        this.buttons = document.querySelectorAll('.gallery-navigation a');
        this.galleryPhotos = document.querySelectorAll('.gallery-photo');
        this.imgIds = document.getElementsByTagName('img');
        this.link = link;

        this.listener();
        this.clearClasses();
        this.renderGallery();

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

    renderGallery() {
        let i = 0;
        for (const photo of this.data) {
            if (photo.status === 'published') {
                const image = document.getElementById(`img${i + 1}`);
                image.src = this.link + photo.imgName;
                image.alt = photo.imgAltName;
                this.galleryPhotos[i].querySelector('.photo-title').innerHTML = photo.overlayTitle;
                
   
            }

            // photo.querySelector('.gallery-photo img') = this.link + this.data.imgName;
            // photo.querySelector('.photo-title').innerHTML = this.data[i].overlayTitle;

            // console.log(photo.querySelector('.gallery-photo img'));
            // console.log(photo.querySelector('.photo-title').innerHTML);
            // console.log(photo.que;
            i++;
        }
        // const imgDOM = document.querySelector('.gallery-photo img');

    }
};

export { GalleryNavigation };
