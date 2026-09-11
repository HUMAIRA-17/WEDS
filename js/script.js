/* =====================================================
   OPEN INVITATION + MUSIC
===================================================== */

const openingScreen = document.getElementById("openingScreen");
const openInvitation = document.getElementById("openInvitation");
const mainInvitation = document.getElementById("mainInvitation");
const weddingMusic = document.getElementById("weddingMusic");


openInvitation.addEventListener("click", function () {

    /* Music volume */
    weddingMusic.volume = 0.35;


    /* Start wedding music */
    weddingMusic.play().catch(function(error) {

        console.log("Music could not start:", error);

    });


    /* Show main invitation */
    mainInvitation.classList.add("visible");


    /* Fade away opening screen */
    openingScreen.classList.add("opened");


    /* Prevent scrolling during opening animation */
    document.body.style.overflow = "hidden";


    /* Enable scrolling after animation */
    setTimeout(function() {

        document.body.style.overflow = "";

    }, 1200);

});


/* =====================================================
   EVENT SCROLL ANIMATION
===================================================== */

const eventSections = document.querySelectorAll(".event-content");


const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);


eventSections.forEach(function(section) {

    observer.observe(section);

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});