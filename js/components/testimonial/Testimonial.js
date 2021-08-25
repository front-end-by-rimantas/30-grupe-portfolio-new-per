class Testimonial {
    constructor(data) {
        this.data = data;
        this.previousTestimonial = '';
        this.renderLinks();
        this.renderFirst();
        this.listener();
        // this.renderContent();
    }

    renderFirst() {
        const navItem = document.querySelector('.nav-line');
        let testimonialId = 0;

        for (const testimonial of this.data) {
            
            if (testimonial.status === 'published') {
                this.renderContent(testimonialId);
                navItem.classList.add('clicked');
                break;
            }
            testimonialId++;
        }
    }

    // Renders testimonial html code from  data in external file and renders 
    // only exact testimonial, which was clicked in navigation
    renderContent(testimonialId) {
        // const tetimonialContentDOM = document.querySelector('.testimonial .content');
        const tetimonialContentDOM1 = document.querySelector('.content1');
        const tetimonialContentDOM2 = document.querySelector('.content2');



        console.log(this.data[testimonialId]);

            const {
                status,
                title,
                rating,
                text,
                name,
                profession,
            } = this.data[testimonialId];

            
            let ratingHtml = '';
            for (let star = 1; star <= rating; star++) {
                ratingHtml += `<i class="fa fa-star"></i>\n`;
            }
            const html = `
                    <div class="testimonial-animation">
                        <h1 class="title">
                            ${title}
                        </h1>
                    </div>
                    <div class="testimonial-animation">
                        <div class="rating">
                            ${ratingHtml}
                        </div>
                    </div>
                    <div class="testimonial-animation-paragraph">
                        <p class="paragraph">
                            ${text}
                        </p>
                    </div>
                    <div class="testimonial-animation">
                        <h2 class="title2">
                            ${name}
                        </h2>
                    </div>
                    <div class="testimonial-animation">
                        <h3 class="title3">
                            ${profession}
                        </h3>
                    </div>
            `;
            // tetimonialContentDOM.innerHTML = html;

           
            if (this.previousTestimonial === '') {
                tetimonialContentDOM1.innerHTML = html;
                this.previousTestimonial = html;
            } else {
                tetimonialContentDOM1.innerHTML = tetimonialContentDOM2.innerHTML;
                tetimonialContentDOM2.innerHTML = html;
            }

            setTimeout(() => {
                tetimonialContentDOM1.innerHTML = html;
            }, 1000);


            
            
    }

    // Renders all testimonial navigation line-like buttons
    renderLinks() {
        const navDOM = document.querySelector('.testimonial-nav');
        
        let navigationHtml = '';
        let testimonialId = 0;
        for (const testimonial of this.data) {
            
            if (testimonial.status === 'published') {
                // Builds testimonial navigation sections with line-like buttons
                navDOM.innerHTML += `<li value = "${testimonialId}" class="nav-line"></li>\n`
            }
            testimonialId++;
        }
    }

    // Creates click listening events for every line-like button from array of buttons 
    // Main purpose is to check which exactly line-like button was clicked and based on that 
    // call testimonial rendering method with exact testimonial ID
    // Second purpose is to add special class on clicked button to make it wider and with special color
    listener() {
        const navList = document.querySelectorAll('.nav-line');
        const testimonial1DOM = document.getElementById('testimonial1');
        const testimonial2DOM = document.getElementById('testimonial2');


        // console.log(navList);
        for (const navItem of navList) {
            navItem.addEventListener('click', () => {
                // const navID = '' + navItem;
                // console.log('clicked', navItem.value);

                for (const navItem2 of navList) {
                    navItem2.classList.remove('clicked');
                }
                
                
                testimonial1DOM.classList.add('animation1');
                testimonial2DOM.classList.add('animation2');
                
                setTimeout(() => {
                    testimonial1DOM.classList.remove('animation1');
                    testimonial2DOM.classList.remove('animation2');
                }, 1000);

                // testimonial2DOM.classList.add('animation-name: swipe2;');
                navItem.classList.add('clicked');
                this.renderContent(navItem.value);
            });
        }
    }
};

export { Testimonial };
