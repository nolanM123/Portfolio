export const skills = [
    {
        name: "HTML5",
        experience: 5,
        expertise: 1.00,
        description: "Proficient in creating and structuring web content using HTML5.",
        logo: "./images/logos/html-logo.svg",
    },
    {
        name: "CSS3",
        experience: 5,
        expertise: 0.95,
        description: "Experienced in styling and designing web pages with CSS3.",
        logo: "./images/logos/css-logo.svg",
    },
    {
        name: "Javascript",
        experience: 5,
        expertise: 0.88,
        description: "Skilled in scripting and implementing interactive features on web pages using JavaScript.",
        logo: "./images/logos/javascript-logo.svg",
    },
    {
        name: "PHP",
        experience: 2,
        expertise: 0.80,
        description: "Experienced in server-side scripting and developing dynamic web applications with PHP.",
        logo: "./images/logos/php-logo.svg",
    },
    {
        name: "Python",
        experience: 8,
        expertise: 1.00,
        description: "Proficient in general-purpose programming and developing web applications with Python.",
        logo: "./images/logos/python-logo.svg",
    },
    {
        name: "R",
        experience: 3,
        expertise: 0.76,
        description: "Skilled in statistical analysis and data visualization with R.",
        logo: "./images/logos/r-logo.svg",
    },
    {
        name: "MATLAB",
        experience: 3,
        expertise: 0.76,
        description: "Skilled in statistical analysis and data visualization with MATLAB.",
        logo: "./images/logos/matlab-logo.svg",
    },
    {
        name: "C/C++",
        experience: 2,
        expertise: 0.63,
        description: "Experienced in system programming and developing performance-critical applications with C/C++.",
        logo: "./images/logos/c++-logo.svg",
    },
    {
        name: "Cuda",
        experience: 1,
        expertise: 0.81,
        description: "Knowledgeable in parallel computing and GPU programming using CUDA.",
        logo: "./images/logos/cuda-logo.svg",
    },
    {
        name: "C#",
        experience: 1,
        expertise: 0.80,
        description: "Experienced in developing Windows applications and games using C#.",
        logo: "./images/logos/c-sharp-logo.svg",
    },
    {
        name: "Java",
        experience: 3,
        expertise: 0.88,
        description: "Skilled in object-oriented programming and application development with Java.",
        logo: "./images/logos/java-logo.svg",
    },
    {
        name: "GDScript",
        experience: 2,
        expertise: 0.86,
        description: "Experienced in scripting and game development using GDScript.",
        logo: "./images/logos/godot-logo.svg",
    },
];

export function initSkills(skills) {
    const $skillsContainer = $(".skills-container");
    const $skillCardTemplate = $("#skill-card-template").contents();

    skills.forEach(skill => {
        let $skillCard = $skillCardTemplate.clone();

        $skillCard.find(".icon").attr("src", skill.logo).attr("alt", `${skill.name} Logo`);
        $skillCard.find(".name").text(skill.name);
        $skillCard.find(".experience").text(`${skill.experience} Years`);
        $skillCard.find(".progress-bar").css("width", `${skill.expertise * 100}%`);
        $skillCard.find(".description").text(skill.description);

        $skillsContainer.append($skillCard);
    });
}
