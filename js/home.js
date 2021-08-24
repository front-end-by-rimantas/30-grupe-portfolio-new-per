// import JS modules
import { autotypeTextData } from "./data/hero/autotypeTextData.js";
import { AutotypeText } from "./components/hero/autotypeText.js";
import { socialData } from "./data/hero/socialData.js";
import { Social } from "./components/hero/Social.js";
import { SkillsProgressBars } from "./components/progress-bar/SkillsProgressBars.js";
import { skillsProgressData } from "./data/skillsProgressData.js";

// execute JS modules
new AutotypeText(autotypeTextData);
new Social('.socials', socialData);

/* SECTION3 - MY SKILLS - start */
new SkillsProgressBars('.skills-block', skillsProgressData);
/* SECTION3 - MY SKILLS - End */