export function initNavbarAnimation() {
    const $navHighlight = $('.nav-highlight');
    const $navLinks = $('#navbar a');
    
    let isScrolling = false;
    let sectionOffsets = calculateSectionOffsets();

    function calculateSectionOffsets() {
        return $navLinks.map((_, link) => {
            const $target = $($(link).attr('href'));

            return $target.length ? { id: link.getAttribute('href'), offset: $target.offset().top } : null;
        }).get();
    }

    function moveHighlight($target) {
        const viewportWidth = $(window).width();
        const isSmallScreen = viewportWidth <= 600;
        const paddingX = isSmallScreen ? 0 : $target.outerWidth() / 4;
        const paddingY = isSmallScreen ? 0 : $target.outerHeight() / 4;

        $navHighlight.css({
            top: $target.position().top - (paddingY / 2),
            left: $target.position().left - (paddingX / 2),
            width: $target.outerWidth() + paddingX,
            height: $target.outerHeight() + paddingY,
        });
    }

    function onScroll() {
        const scrollTop = $(document).scrollTop();
        const activeSection = sectionOffsets.slice().reverse().find(section => scrollTop >= section.offset - 400);

        if (activeSection) {
            const $activeLink = $navLinks.filter(`[href="${activeSection.id}"]`);

            moveHighlight($activeLink);
            
            $navLinks.removeClass('active');
            $activeLink.addClass('active');
        }

        isScrolling = false;
    }

    $(document).on('scroll', () => {
        if (!isScrolling) {
            requestAnimationFrame(onScroll);
            isScrolling = true;
        }
    });

    $(window).on('resize', () => {
        sectionOffsets = calculateSectionOffsets();
        onScroll();
    });

    onScroll();
}
