export const contacts = [
    {
        platform: "Google",
        link: "#contacts-section",
        icon: "./images/icons/google-icon.svg",
    },
    {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/nolan-mcallister/",
        icon: "./images/icons/linkedin-icon.svg",
    },
    {
        platform: "Github",
        link: "https://github.com/nolanM123",
        icon: "./images/icons/github-icon.svg",
    },
];

export function initContacts(contacts) {
    const $contactsContainer = $(".contacts-container");
    const $linkBtnTemplate = $("#link-btn-template").contents();

    contacts.forEach(contact => {
        let $linkBtn = $linkBtnTemplate.clone();

        if (contact.platform.toLowerCase() == "github") {
            $linkBtn.addClass("github-btn")
        }

        $linkBtn.attr("href", contact.link);
        $linkBtn.find(".icon").attr("src", contact.icon).attr("alt", `${contact.platform} Icon`);
        $linkBtn.find(".name").text(contact.platform);

        $contactsContainer.append($linkBtn);
    });
}
