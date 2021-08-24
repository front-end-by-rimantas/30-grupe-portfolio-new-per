class Testimonial {
    constructor(data) {
        this.data = data;
        this.fullHtml = '';
        this.renderLinks();
        this.listener();
        // this.renderContent();
    }
    renderContent(testimonialId) {
        const tetimonialContentDOM = document.querySelector('.testimonial .content');
        // const linkDOM = document.querySelector('.nav-line');
        // const testimonialDOM = document.querySelector('.testimonial');

        // testimonialDOM.innerHTML = this.fullHtml;

        // linkDOM.addEventListener('click', function() {
        //     console.log('CLICKED');
        // });

        console.log(this.data[testimonialId]);
        // let html = '';
        // for (const testimonial of this.data) {
            const {
                status,
                title,
                rating,
                text,
                name,
                profession,
            } = this.data[testimonialId];

            // if (status === 'published') {
            //     testimonialCount++
            // } else {
            //     continue;
            // }

            let ratingHtml = '';
            for (let star = 1; star <= rating; star++) {
                ratingHtml += `<i class="fa fa-star"></i>\n`;
            }
            const html = `
                        <h1 class="title">
                            ${title}
                        </h1>
                        <div class="rating">
                            ${ratingHtml}
                        </div>
                        <p class="paragraph">
                            ${text}
                        </p>
                        <h2 class="title2">
                            ${name}
                        </h2>
                        <h3 class="title3">
                            ${profession}
                        </h3>
            `;
            tetimonialContentDOM.innerHTML = html;
        // }
    }
    renderLinks() {
        const navDOM = document.querySelector('.testimonial-nav');
        
        let navigationHtml = '';
        let testimonialId = 0;
        for (const testimonial of this.data) {
            
            if (testimonial.status === 'published') {
                navDOM.innerHTML += `<li value = "${testimonialId}" class="nav-line"></li>\n`
            }
            testimonialId++;
        }
        // console.log(navigationHtml);
        // this.fullHtml += navigationHtml;
        // navDOM.innerHTML = navigationHtml;
    }
    listener() {
        const navList = document.querySelectorAll('.nav-line');
        console.log(navList);
        for (const navItem of navList) {
            navItem.addEventListener('click', () => {
                // const navID = '' + navItem;
                console.log('clicked', navItem.value);
                this.renderContent(navItem.value);
            });
        }
    }
};

export { Testimonial };
