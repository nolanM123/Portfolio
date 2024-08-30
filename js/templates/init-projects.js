export const projects = [
    {
        name: "Discussion Forum",
        role: "Full Stack Developer",
        description: "Developed an online platform where users can register, create discussions, react, comment, and participate in various site features.",
        image: "./images/discussion-forum-preview.jpg",
        achievements: [
            "Implemented a secure registration and login system with comprehensive profile management to protect user data.",
            "Developed admin controls for efficient management of users, posts, and reactions, enhancing site moderation capabilities.",
            "Added functionalities such as activity tracking, collapsible threads, and mobile responsiveness to improve user engagement and accessibility."
        ],
        technologies: [
            {
                name: "HTML5",
                logo: "./images/logos/html-logo.svg",
            },
            {
                name: "CSS3",
                logo: "./images/logos/css-logo.svg",
            },
            {
                name: "Javascript",
                logo: "./images/logos/javascript-logo.svg",
            },
            {
                name: "JQuery",
                logo: "./images/logos/jquery-logo.svg",
            },
            {
                name: "PHP",
                logo: "./images/logos/php-logo.svg",
            },
            {
                name: "MySQL",
                logo: "./images/logos/mysql-logo.svg",
            },
        ],
        links: [
            {
                platform: "Github",
                link: "https://github.com/nolanM123/COSC_360_Project",
                icon: "./images/icons/github-icon.svg",
            },
        ],
    },
    {
        name: "MediHelp",
        role: "Technical Lead",
        description: "Led the development of a web application that recommends over-the-counter medicine based on personalized surveys, featuring an admin interface with advanced controls and logic.",
        image: "./images/medihelp-preview.jpg",
        achievements: [
            "Integrated data and formulas from clients' Excel prototypes into the application, ensuring accurate and reliable recommendations.",
            "Developed a user-friendly, survey-based recommendation system that provides tailored advice based on individual needs.",
            "Created an extensive admin page for managing activities and product information, streamlining backend operations."
        ],
        technologies: [
            {
                name: "React",
                logo: "./images/logos/react-logo.svg",
            },
            {
                name: "NodeJS",
                logo: "./images/logos/nodejs-logo.svg",
            },
            {
                name: "Python",
                logo: "./images/logos/python-logo.svg",
            },
            {
                name: "FastAPI",
                logo: "./images/logos/fastapi-logo.svg",
            },
            {
                name: "SQLite",
                logo: "./images/logos/sqlite-logo.svg",
            },
        ],
        links: [],
    },
    {
        name: "Graceful",
        role: "Software Engineer",
        description: "Developed a web framework for building APIs with Python, inspired by FastAPI, built from scratch and utilizing Python type hints.",
        image: "./images/graceful-preview.svg",
        achievements: [
            "Designed a robust API framework leveraging Python type hints for enhanced code reliability and developer productivity.",
            "Implemented efficient error handling and validation mechanisms, ensuring a seamless and robust user experience.",
            "Utilized async and sockets to create a high-performance, scalable architecture capable of handling concurrent requests efficiently."
        ],
        technologies: [
            {
                name: "Python",
                logo: "./images/logos/python-logo.svg",
            },
        ],
        links: [
            {
                platform: "PyPi",
                link: "https://pypi.org/project/graceful-web/",
                icon: "./images/icons/globe-icon.svg",
            },
            {
                platform: "GitHub",
                link: "https://github.com/nolanM123/graceful",
                icon: "./images/icons/github-icon.svg",
            },
        ],
    },
];


export function initProjects(projects) {
    const $projectsContainer = $(".projects-container");
    const $projectCardTemplate = $("#project-card-template").contents();
    const $linkBtnTemplate = $("#link-btn-template").contents();

    projects.forEach(project => {
        let $projectCard = $projectCardTemplate.clone();

        $projectCard.find(".name").text(project.name);
        $projectCard.find(".role").text(project.role);
        $projectCard.find(".description").text(project.description);
        $projectCard.find(".preview").attr("src", project.image).attr("alt", `${project.name} Preview`)

        let $techContainer = $projectCard.find(".tech-container");
        project.technologies.forEach(technology => {
            $techContainer.append(
                $(`<img src="${technology.logo}" alt="${technology.name} Logo" class="icon">`)
            );
        });

        let $achievements = $projectCard.find(".achievements");
        project.achievements.forEach(achievement => {
            $achievements.append(
                $(`<li class="achievement">${achievement}</li>`)
            );
        });

        let $linkBtnContainer = $projectCard.find(".link-btn-container");
        project.links.forEach(link => {
            let $linkBtn = $linkBtnTemplate.clone();

            if (link.platform.toLowerCase() == "github") {
                $linkBtn.addClass("github-btn")
            }

            $linkBtn.attr("href", link.link);
            $linkBtn.find(".icon").attr("src", link.icon).attr("alt", `${link.platform} Icon`);
            $linkBtn.find(".name").text(link.platform);

            $linkBtnContainer.append($linkBtn);
        });

        $projectsContainer.append($projectCard);
    });
}
