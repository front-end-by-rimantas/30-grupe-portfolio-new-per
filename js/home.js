// import JS modules

import { SkillsProgressBars } from "./components/progress-bar/SkillsProgressBars.js";
import { skillsProgressData } from "./data/skillsProgressData.js";

new SkillsProgressBars('.left-skills-block', skillsProgressData);
new SkillsProgressBars('.right-skills-block', skillsProgressData);


// execute JS modules