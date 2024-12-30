export const experiences = [
    {
        company: "The Mustard Seed",
        role: "Service Desk Technician",
        dates: "October 2024 - May 2025",
        responsibilities: [
            "Provided IT support by troubleshooting hardware/software issues, maintaining systems and networks, managing technical tickets, and collaborating on updates to ensure seamless operations.",
            "Trained staff on technology tools while upholding data confidentiality and security policies.",
        ]
    },
    {
        company: "Grey Eagle Resort & Casino",
        role: "Usher",
        dates: "September 2023 - January 2024",
        responsibilities: [
            "Handled duties adeptly, efficiently resolving patron issues.",
            "Collaborated with the team for seamless operations.",
        ]
    },
    {
        company: "College Pro",
        role: "Regional Manager / Window Technician",
        dates: "May 2022 - September 2022",
        responsibilities: [
            "Supervised a team of 4 employees; consistently achieving and surpassing performance targets.",
            "Provided continuous support and guidance to team members.",
            "Delivered coaching and constructive feedback to enhance their skills and achieve performance objectives.",
        ]
    },
    {
        company: "Shoppers Drug Mart",
        role: "Cashier / Sales Associate",
        dates: "July 2021 - September 2021",
        responsibilities: [
            "Exhibited outstanding customer service skills by warmly greeting customers.",
            "Promptly addressed inquiries and effectively resolved complaints with professionalism and a friendly demeanor.",
            "Managed exchanges and returns, adhering to established procedures to uphold customer satisfaction while preserving the integrity of the store's policies.",
        ]
    },
];

export function initExperience(experiences) {
    const $experiencesContainer = $(".experiences-container");
    const $organizationCardTemplate = $("#organization-card-template").contents();

    experiences.forEach(experience => {
        let $organizationCard = $organizationCardTemplate.clone();

        $organizationCard.find(".icon").attr("src", "./images/icons/suitcase-icon.svg").attr("alt", "Suitcase Icon");
        $organizationCard.find(".name").text(experience.company);
        $organizationCard.find(".role").text(experience.role);
        $organizationCard.find(".dates").text(experience.dates);

        let $achievements = $organizationCard.find(".achievements");
        experience.responsibilities.forEach(responsibility => {
            $achievements.append(
                $(`<li class="achievement">${responsibility}</li>`)
            )
        });

        $experiencesContainer.append($organizationCard);
    });
}
