/*--------scroll reveal------------*/

let scrollR = ScrollReveal({
    duration: 1600,
    distance: "40px",
});

scrollR.reveal(".home-info", { origin: "left", delay: 900 });
scrollR.reveal(".home-content", { origin: "top", delay: 900 });
scrollR.reveal(".showcase .shape", { origin: "top", delay: 1200 });
scrollR.reveal("header", { origin: "top", delay: 250 });
scrollR.reveal(".about", { origin: "bottom", delay: 500 });
scrollR.reveal(".sec:nth-child(1)", { origin: "bottom", delay: 1000 });
scrollR.reveal(".sec:nth-child(2)", { origin: "bottom", delay: 1100 });
scrollR.reveal(".sec:nth-child(3)", { origin: "bottom", delay: 1200 });
scrollR.reveal(".sec:nth-child(4)", { origin: "bottom", delay: 1300 });
scrollR.reveal(".s-card:nth-child(1)" , {origin: "top" , delay: 250});
scrollR.reveal(".s-card:nth-child(2)" , {origin: "top" , delay: 500});
scrollR.reveal(".s-card:nth-child(3)" , {origin: "top" , delay: 750});

let scrollM = ScrollReveal({
    duration: 750,
    distance: "60px",
});
scrollM.reveal(".gallery", {origin: "top" , delay: 500})

/*------------- about section animation ----------------*/



document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");
    const fills = document.querySelectorAll(".fill");
    const numberTexts = document.querySelectorAll(".num-text");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        fills.forEach((fill, index) => {
                            const numberText = numberTexts[index];
                            let target = parseInt(numberText.getAttribute("data-num"), 10); 


                            if (isNaN(target)) {
                                console.error(`خطا: مقدار data-num برای عنصر ${index} نامعتبر است.`);
                                target = 0; 
                            }

                            let start = 0;
                            const duration = 1000;
                            const increment = target / (duration / 16);

                            
                            fill.style.height = `${target}%`;

                            
                            const updateNumber = () => {
                                start += increment;
                                if (start >= target) {
                                    numberText.textContent = `${target}%`;
                                } else {
                                    numberText.textContent = `${Math.floor(start)}%`;
                                    requestAnimationFrame(updateNumber);
                                }
                            };
                            updateNumber();
                        });
                        observer.unobserve(aboutSection);
                    }, 2000); // 
                }
            });
        },
        { threshold: 0.5 }
    );
    observer.observe(aboutSection);
});


/* ----------------prrtofilo----------------------*/

let mixer = mixitup(".gallery", {
    selectors: {
        target: ".main-container",
    },
    animation: {
        duration: 500,
    },
});

/* --------------------- hover mous animation -------------------- */

let cards = document.querySelectorAll('.s-card');

cards.forEach(card => {
    card.onmousemove = function (e) {
        let x = e.pageX - card.offsetLeft;

        let y = e.pageY - card.offsetTop

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
});
