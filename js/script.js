/* =====================================================
   WEDDING INVITATION
   EVENT LINK SYSTEM
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
   GET INVITATION CODE
===================================================== */

function getInvitationCode() {

    let code = window.location.hash
        .substring(1)
        .toLowerCase()
        .trim();

    /*
       If no code is provided,
       show all events.
    */

    if (!code) {
        return "mbw";
    }

    /*
       Only allow these codes
    */

    const validCodes = [
        "m",
        "b",
        "w",
        "mb",
        "bw",
        "mw",
        "mbw"
    ];

    if (!validCodes.includes(code)) {
        return "mbw";
    }

    return code;
}


/* =====================================================
   SHOW ONLY SELECTED EVENTS
===================================================== */

function setupInvitation() {

    const code = getInvitationCode();


    /* -----------------------------------------------
       HIDE ALL EVENTS FIRST
    ------------------------------------------------ */

    if (mehendi) {
        mehendi.style.display = "none";
    }

    if (barat) {
        barat.style.display = "none";
    }

    if (walima) {
        walima.style.display = "none";
    }


    /* -----------------------------------------------
       SHOW MEHENDI
    ------------------------------------------------ */

    if (code.includes("m") && mehendi) {
        mehendi.style.display = "flex";
    }


    /* -----------------------------------------------
       SHOW BARAT
    ------------------------------------------------ */

    if (code.includes("b") && barat) {
        barat.style.display = "flex";
    }


    /* -----------------------------------------------
       SHOW WALIMA
    ------------------------------------------------ */

    if (code.includes("w") && walima) {
        walima.style.display = "flex";
    }


    console.log("Invitation code:", code);

}


/* Run immediately */

setupInvitation();


/* =====================================================
   OPEN INVITATION
===================================================== */

if (openInvitation) {

    openInvitation.addEventListener("click", function() {

        /* Start music */

        if (weddingMusic) {

            weddingMusic.volume = 0.35;

            weddingMusic.play().catch(function(error) {

                console.log("Music error:", error);

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


        /* Stop scrolling during animation */

        document.body.style.overflow = "hidden";


        setTimeout(function() {

            document.body.style.overflow = "";

        }, 1200);

    });

}


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

        const targetID = this.getAttribute("href");

        /*
           Don't interfere with event-selection hash.
        */

        if (!targetID || targetID === "#") {
            return;
        }

        const target = document.querySelector(targetID);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});