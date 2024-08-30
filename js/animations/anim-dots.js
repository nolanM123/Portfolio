export function initDotsAnimation() {
    $(".dots-canvas").each(function () {
        const canvas = this;
        const ctx = canvas.getContext("2d");

        const numPoints = 200;
        const maxDistance = 120;
        const lineAlphaDecay = 0.2;

        let dots = [];
        let mousex = 0;
        let mousey = 0;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        function generatePoints() {
            dots = [];

            for (let i = 0; i < numPoints; i++) {
                dots.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 1.2,
                    vy: (Math.random() - 0.5) * 1.2,
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x;
                    const dy = dots[i].y - dots[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const alpha = 1 - distance / maxDistance;

                        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * lineAlphaDecay})`;
                        ctx.beginPath();
                        ctx.moveTo(dots[i].x, dots[i].y);
                        ctx.lineTo(dots[j].x, dots[j].y);
                        ctx.stroke();
                    }
                }
            }

            dots.forEach(dot => {
                const dx = mousex - dot.x;
                const dy = mousey - dot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const alpha = 1 - distance / maxDistance;
                    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * lineAlphaDecay})`;
                    ctx.beginPath();
                    ctx.moveTo(dot.x, dot.y);
                    ctx.lineTo(mousex, mousey);
                    ctx.stroke();
                }
            });

            dots.forEach(dot => {
                dot.x += dot.vx;
                dot.y += dot.vy;

                if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
                if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
            });

            requestAnimationFrame(draw);
        }

        $(window).on("mousemove", (event) => {
            const rect = canvas.getBoundingClientRect();
            mousex = event.clientX - rect.left;
            mousey = event.clientY - rect.top;
        });
        $(window).on("resize", () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            generatePoints();
        });

        generatePoints();
        draw();
    });
}
