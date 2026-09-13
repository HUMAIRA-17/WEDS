/* =====================================================
   WEDDING INVITATION LINK SYSTEM
===================================================== */

const openingScreen = document.getElementById("openingScreen");
const openInvitation = document.getElementById("openInvitation");
const mainInvitation = document.getElementById("mainInvitation");
const weddingMusic = document.getElementById("weddingMusic");

const mehendi = document.getElementById("mehendi");
const barat = document.getElementById("barat");
const walima = document.getElementById("walima");


/* =====================================================
   READ INVITATION CODE FROM URL
===================================================== */

let invitationCode = window.location.hash
    .replace("#", "")
    .toLowerCase()
    .trim();


/*
    If no code is provided,
    show all events.
*/

if (!invitationCode) {
    invitationCode = "mbw";
}


/* =====================================================
   VALID CODES
===================================================== */

const validCodes = [
    "m",
    "b",
    "w",
    "mb",
    "bw",
    "mw",
    "mbw"
];


/*
    If someone enters an invalid code,
    show all events.
*/

if (!validCodes.includes(invitationCode)) {
    invitationCode = "mbw";
}


/* =====================================================
   HIDE / SHOW EVENTS
===================================================== */

function setupEvents() {

    /*
        Hide everything first
    */

    mehendi.classList.add("hidden-event");
    barat.classList.add("hidden-event");
    walima.classList.add("hidden-event");


    /*
        Show selected events
    */

    if (invitationCode.includes("m")) {
        mehendi.classList.remove("hidden-event");
    }

    if (invitationCode.includes("b")) {
        barat.classList.remove("hidden-event");
    }

    if (invitationCode.includes("w")) {
        walima.classList.remove("hidden-event");
    }

}


/* Run event setup */

setupEvents();


/* =====================================================
   OPEN INVITATION + MUSIC
===================================================== */

openInvitation.addEventListener("click", function () {

    /*
        Start music
    */

    weddingMusic.volume = 0.35;

    weddingMusic.play().catch(function(error) {

        console.log("Music could not start:", error);

    });


    /*
        Show invitation
    */

    mainInvitation.classList.add("visible");


    /*
        Fade opening screen
    */

    openingScreen.classList.add("opened");


    /*
        Prevent scrolling during opening
    */

    document.body.style.overflow = "hidden";


    /*
        Enable scrolling after animation
    */

    setTimeout(function() {

        document.body.style.overflow = "";

    }, 1200);

});


/* =====================================================
   EVENT SCROLL ANIMATION
===================================================== */

const eventContents = document.querySelectorAll(".event-content");


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


eventContents.forEach(function(content) {

    observer.observe(content);

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {

    anchor.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target && !target.classList.contains("hidden-event")) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});