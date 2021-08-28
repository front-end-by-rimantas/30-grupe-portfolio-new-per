// ************ IMPORT JS MOUDLES ************

// HERO - HEADER
import { autotypeTextData } from "./data/hero/autotypeTextData.js";
import { AutotypeText } from "./components/hero/autotypeText.js";
import { socialData } from "./data/hero/socialData.js";
import { Social } from "./components/hero/Social.js";
import { testimonialData } from "./data/testimonial/testimonialData.js";
import { Testimonial } from "./components/testimonial/Testimonial.js";
import { SkillsProgressBars } from "./components/progress-bar/SkillsProgressBars.js";
import { skillsProgressData } from "./data/skillsProgressData.js";


// PRTFOLIO GALLERY
import { GalleryHover } from "./components/portfolio-gallery/GalleryHover.js";
import { GalleryNavigation } from "./components/portfolio-gallery/GalleryNavigation.js";
import { portfolioAllData } from "./data/portfolio-gallery/portfolioAllData.js";
import { portfolioBrandData } from "./data/portfolio-gallery/portfolioBrandData.js";

// BLOG
import { Blog} from "./components/blog/Blog.js";
import { blogData } from "./data/blog/blogData.js";



// ************ EXECUTE IS MODULES ************

// HERO - HEADER
new AutotypeText(autotypeTextData);
new Social('.socials', socialData);
new Testimonial(testimonialData);

/* SECTION3 - MY SKILLS - start */
new SkillsProgressBars('.skills-block', skillsProgressData);
/* SECTION3 - MY SKILLS - End */
// BLOG
new Blog(blogData);

// PORTFOLIO GALLERY
new GalleryHover();
new GalleryNavigation(portfolioAllData, portfolioBrandData, '', '', '', './img/portfolio/');
