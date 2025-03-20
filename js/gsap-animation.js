

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

