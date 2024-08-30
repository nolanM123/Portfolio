export function initEmailForm() {
    $(".email-form").on("submit", function(event) {
        event.preventDefault();
        
        const email = $(this).find("input[name='email']").val();
        const content = $(this).find("textarea[name='content']").val();

        const subject = encodeURIComponent("Portfolio Inquiry");
        const body = encodeURIComponent(content + "\n\nFrom: " + email);

        const mailtoLink = `mailto:nolan.m.mcallister@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    });
}
