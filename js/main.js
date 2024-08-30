import { initEmailForm } from "./scripts/email-form.js";

import { contacts, initContacts } from "./templates/init-contacts.js";
import { projects, initProjects } from "./templates/init-projects.js";
import { skills, initSkills } from "./templates/init-skills.js";
import { experiences, initExperience } from "./templates/init-experience.js";
import { educations, initEducation } from "./templates/init-education.js";

import { initNavbarAnimation } from "./animations/anim-navbar.js";
import { initDotsAnimation } from "./animations/anim-dots.js";
import { initCardAnimation } from "./animations/anim-card.js";

$(document).ready(() => {
    // General initalizations
    initEmailForm();

    // Template initalziations
    initContacts(contacts);
    initProjects(projects);
    initSkills(skills);
    initExperience(experiences);
    initEducation(educations);

    // Animation Initalizations
    initNavbarAnimation();
    initDotsAnimation();
    initCardAnimation();
});
