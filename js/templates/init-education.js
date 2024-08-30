export const educations = [
    {
        institution: "University of British Columbia",
        specialization: "Bachelors of Science, Computer Science",
        dates: "September 2019 - May 2024",
        achievements: [
            "Dean's List Academic Achievement Award, May 2022",
        ]
    },
    {
        institution: "Bowness Highschool",
        specialization: "Highschool Diploma",
        dates: "September 2017 - June 2019",
        achievements: [
            "Advanced Computer Science Academic Achievement, Bowness High School, June 2019",
            "Most Valuable Student, Bowness High School, May 2018",
            "Pride & Excellence in intermediate Computer Science, Bowness High School, December 2017",
        ]
    },
];

export function initEducation(educations) {
    const $educationsContainer = $(".educations-container");
    const $organizationCardTemplate = $("#organization-card-template").contents();

    educations.forEach(education => {
        let $organizationCard = $organizationCardTemplate.clone();

        $organizationCard.find(".icon").attr("src", "./images/icons/book-icon.svg").attr("alt", "Book Icon");
        $organizationCard.find(".name").text(education.institution);
        $organizationCard.find(".role").text(education.specialization);
        $organizationCard.find(".dates").text(education.dates);
        
        let $achievements = $organizationCard.find(".achievements");
        education.achievements.forEach(achievement => {
            $achievements.append(
                $(`<li class="achievement">${achievement}</li>`)
            )
        });

        $educationsContainer.append($organizationCard);
    });
}
