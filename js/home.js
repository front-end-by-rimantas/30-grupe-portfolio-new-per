// import JS modules
import { autotypeTextData } from "./data/hero/autotypeTextData.js";
import { AutotypeText } from "./components/hero/autotypeText.js";
import { socialData } from "./data/hero/socialData.js";
import { Social } from "./components/hero/Social.js";
import { testimonialData } from "./data/testimonial/testimonialData.js";
import { Testimonial } from "./components/testimonial/Testimonial.js";

// execute JS modules
new AutotypeText(autotypeTextData);
new Social('.socials', socialData);
new Testimonial(testimonialData);