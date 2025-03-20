

// custom gsap animation 

// TEXT ANIMATION
function textAnimate(sliderElement) {
    const textsToAnimate = sliderElement.querySelectorAll(".text-anime");
    textsToAnimate.forEach(textToAnimate => {
        const animate = new SplitType(textToAnimate, { types: 'words , chars' });
        gsap.from(animate.chars, {
            opacity: 0,
            x: 100,
            duration: 1.5,
            stagger: { amount: 1.5 },
            scrollTrigger: {
                trigger: textToAnimate,
                start: "top 95%",
            }
        });
    })
};

textAnimate(document);

// home 1

//about section
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".about-item", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#h1-abt-us",
            start: "top 40%",
            toggleActions: "play none none none",
            once: true
        }
    });

    gsap.from('#abt-img-1', {
        x: -100,
        opacity: 0,
        duration: 1,
        
        scrollTrigger: {
            trigger: '#abt-img-1',
            start: "top 85%",
            end: "top 30%",
            scrub: 3,
            }
    })
    gsap.from('#abt-img-2', {
        y: -100,
        opacity: 0,
        duration: 1,
        
        scrollTrigger: {
            trigger: '#abt-img-2',
            start: "top 85%",
            end: "top 30%",
            scrub: 3,
            }
    })
    gsap.from('#abt-img-3', {
        y: 100,
        opacity: 0,
        duration: 1,
        
        scrollTrigger: {
            trigger: '#abt-img-3',
            start: "top 95%",
            end: "top 100%",
            scrub: 6,
            }
    })



    // tour packages section
    // gsap.from(".package-item", {
    //     y: 30,
    //     opacity: 0,
    //     duration: 1.5,
    //     stagger: 0.5,
    //     scrollTrigger: {
    //         trigger: ".tour-package",
    //         start: "top 80%",
    //     }
    // })
    // gsap.from(".view-all", {
    //     y: 100,
    //     opacity: 0,
    //     duration: 1.5,
    //     scrollTrigger: ".view-all"
    // })

    //h1 video section
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        gsap.from("#h1-vdo-content", {
            x: -120,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#h1-vdo-section",
                start: "top 80%",
                end: "bottom top",
                scrub: false
            }
        });
    
        gsap.from("#h1-vdo-img", {
            x: 120,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#h1-vdo-section",
                start: "top 80%",
                end: "bottom top",
                scrub: false
            }
        });
    });
    
    mm.add("(max-width: 768px)", () => {
        gsap.from("#h1-vdo-content", {
            y: -50,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#h1-vdo-section",
                start: "top 80%",
                end: "bottom top",
                scrub: false
            }
        });
    
        gsap.from("#h1-vdo-img", {
            y: 50,
            opacity: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#h1-vdo-section",
                start: "top 80%",
                end: "bottom top",
                scrub: false
            }
        });
    });













    gsap.from(".cta-3-sm-img",{
        scale: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".cta-3",
            start: "top 95%",
            scrub: 2
        }
    })
    
    ScrollTrigger.refresh();
});

gsap.from(".shape-1",{
    rotateY: -30,
    duration: 2,
    repeat: -1,
    yoyo: true,
})

