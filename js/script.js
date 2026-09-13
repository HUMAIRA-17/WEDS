/* =====================================================
   WEDDING INVITATION
   MULTIPLE EVENT LINK SYSTEM
===================================================== */


/* =====================================================
   GET ELEMENTS
===================================================== */

const openingScreen = document.getElementById("openingScreen");
const openInvitation = document.getElementById("openInvitation");
const mainInvitation = document.getElementById("mainInvitation");
const weddingMusic = document.getElementById("weddingMusic");

const mehendi = document.getElementById("mehendi");
const barat = document.getElementById("barat");
const walima = document.getElementById("walima");


/* =====================================================
   EVENT LINK SYSTEM
===================================================== */

function applyInvitationCode() {

    let code = window.location.hash.substring(1).toLowerCase();

    console.log("Invitation code:", code);


    /* If no code is present, show everything */

    if (code === "") {
        code = "mbw";
    }


    /* Valid codes */

    const validCodes = ["m", "b", "w", "mb", "bw", "mw", "mbw"];


    /* Invalid code = show everything */

    if (!validCodes.includes(code)) {
        code = "mbw";
    }


    /* =================================================
       HIDE ALL EVENTS FIRST
    ================================================= */

    if (mehendi) {
        mehendi.style.display = "none";
    }

    if (barat) {
        barat.style.display = "none";
    }

    if (walima) {
        walima.style.display = "none";
    }


    /* =================================================
       SHOW SELECTED EVENTS
    ================================================= */

    if (code.includes("m")) {

        if (mehendi) {
            mehendi.style.display = "";
        }

    }


    if (code.includes("b")) {

        if (barat) {
            barat.style.display = "";
        }

    }


    if (code.includes("w")) {

        if (walima) {
            walima.style.display = "";
        }

    }


    console.log("Showing events for:", code);

}


/* Run immediately */

applyInvitationCode();


/* =====================================================
   OPEN INVITATION + MUSIC
===================================================== */

if (openInvitation) {

    openInvitation.addEventListener("click", function () {

        /* Start music */

        if (weddingMusic) {

            weddingMusic.volume = 0.35;

            weddingMusic.play().catch(function (error) {

                console.log("Music could not start:", error);

            });

        }


        /* Show main invitation */

        if (mainInvitation) {
            mainInvitation.classList.add("visible");
        }


        /* Hide opening screen */

        if (openingScreen) {
            openingScreen.classList.add("opened");
        }


        /* Prevent scrolling during animation */

        document.body.style.overflow = "hidden";


        setTimeout(function () {

            document.body.style.overflow = "";

        }, 1200);

    });

}


/* =====================================================
   EVENT ANIMATION
===================================================== */

const eventContents = document.querySelectorAll(".event-content");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


eventContents.forEach(function (content) {

    observer.observe(content);

});