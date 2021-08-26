// ************ IMPORT JS MOUDLES ************

// HERO - HEADER
import { autotypeTextData } from "./data/hero/autotypeTextData.js";
import { AutotypeText } from "./components/hero/autotypeText.js";
import { socialData } from "./data/hero/socialData.js";
import { Social } from "./components/hero/Social.js";

// BLOG
import { Blog} from "./components/blog/Blog.js";
import { blogData } from "./data/blog/blogData.js";




// ************ EXECUTE IS MODULES ************

// HERO - HEADER
new AutotypeText(autotypeTextData);
new Social('.socials', socialData);

// BLOG
new Blog(blogData);