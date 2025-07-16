const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function textAnimation() {
    gsap.from("#nav",{
    duration: 1.2,
    y: -50,
    opacity: 0,
});
gsap.from("#page1 h1",{
    duration: 1.2,
    y: 100,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
});
gsap.from("#img-container",{
    duration: 1.2,    
    y: 50,
    scale: 0.3,
    opacity: 0,
    delay: 0.5,
});
gsap.from("#lasttext h2",{
    duration: 1.2,
    y: 90,
    opacity: 0, 
    delay: 0.5,
    stagger: 0.2,
});
gsap.from("#lasttext p",{
    duration: 1.2,
    y: 50,
    opacity: 0, 
    delay: 0.5,
    stagger: 0.2,
});
gsap.from("#learnmore",{
    duration: 1.2,
    y: -50,
    opacity: 0, 
    delay: 0.5,
    stagger: 0.2,
});
gsap.from("#page2 .elem img", {
    duration: 1.5,
    opacity: 0, 
    delay: 0.8,
    stagger: 0.4,
});
gsap.from("#page4 #firstchild , #secondchild .elem img" , {
    duration: 1.5,
    opacity: 0, 
    delay: 0.8,
    stagger: 0.4,
})
}

textAnimation();