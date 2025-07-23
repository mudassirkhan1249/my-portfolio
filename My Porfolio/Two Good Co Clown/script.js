const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});
function textAnimation() {
    gsap.from("#nav", {
        duration: 1.2,
        y: -50,
        opacity: 0,
    });
    gsap.from("#page1 h1", {
        duration: 1.2,
        y: 100,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
    });
    gsap.from("#img-container", {
        duration: 1.2,
        y: 50,
        scale: 0.3,
        opacity: 0,
        delay: 0.5,
    });
    gsap.from("#lasttext h2", {
        duration: 1.2,
        y: 90,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
    });
    gsap.from("#lasttext p", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
    });
    gsap.from("#learnmore", {
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
    gsap.from("#page4 #firstchild , #secondchild .elem img", {
        duration: 1.5,
        opacity: 0,
        delay: 0.8,
        stagger: 0.4,
    });
}

textAnimation();


    let child1 = document.querySelector("#child1");
    let child2 = document.querySelector("#child2");
    let child3 = document.querySelector("#child3");
    let child4 = document.querySelector("#child4");
    let child5 = document.querySelector("#child5");
    let headingParent = document.querySelector("#headingparent");

    let heading = document.createElement("h1");
    heading.classList.add("heading");
    headingParent.appendChild(heading);
    heading.classList.add(".heading");

    child1.addEventListener("click", function () {
        heading.textContent =
            "You are the most amazingpeople. Keep doing what youare doing. <3";
    });
    child2.addEventListener("click", function () {
        heading.textContent =
            "Thank you so much for the beautiful meals - it has madea great difference to us!";
    });
    child3.addEventListener("click", function () {
        heading.textContent =
            "Thank you so much for the beautiful catering; it means alot working with a companysuch as Two Good Co.";
    });
    child4.addEventListener("click", function () {
        heading.textContent =
            "Purchased for a friend who needed a hug - the bonus is that one was donated too!";
    });
    child5.addEventListener("click", function () {
        heading.textContent =
            "Everyone at Two Good are lovely to work with. Catering was excellent and well priced, all for a good cause... what's not to love?";
    });

