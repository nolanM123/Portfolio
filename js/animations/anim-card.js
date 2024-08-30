export function initCardAnimation() {
    const $cards = $(".card:not(.skill-card)");

    let scrolling = false;

    function onScroll() {
        $cards.each(function() {
            let cardTop = $(this).offset().top;
            let scrollTop = $(window).scrollTop();
            let windowHeight = $(window).height();
            
            let distanceFromCenter = cardTop - (scrollTop + windowHeight / 2) - 100;
            let normalizedDistance;

            if (distanceFromCenter <= 0) {
                normalizedDistance = 1;
            } else {
                normalizedDistance = Math.max(0.4, Math.min(1, 1 - distanceFromCenter / (windowHeight / 2)));
            }

            $(this).css({
                opacity: normalizedDistance,
                transform: `scale(${normalizedDistance})`
            });
        });

        scrolling = false;
    }

    $(document).on('scroll', () => {
        if (!scrolling) {
            scrolling = true;
            requestAnimationFrame(onScroll);
        }
    });
}
