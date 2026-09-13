/* =====================================================
   WEDDING INVITATION
   MULTIPLE EVENT LINK SYSTEM
===================================================== */


/* =====================================================
   GET URL CODE
===================================================== */

function getInvitationCode() {

    const hash = window.location.hash;

    let code = hash.replace("#", "").toLowerCase().trim();

    /*
       No code = show all
    */

    if (code === "") {
        return "mbw";
    }


    /*
       Allowed invitation codes
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


    /*
       Invalid code = show all
    */

    if (!validCodes.includes(code)) {
        return "mbw";
    }


    return code;
}


/* =====================================================
   SET EVENT VISIBILITY
===================================================== */

function setInvitationEvents() {

    const code = getInvitationCode();


    console.log("================================");
    console.log("WEDDING INVITATION");
    console.log("URL:", window.location.href);
    console.log("CODE:", code);
    console.log("================================");


    /*
       Get event sections
    */

    const mehendi = document.getElementById("mehendi");
    const barat = document.getElementById("barat");
    const walima = document.getElementById("walima");


    /*
       Remove visibility from ALL events
    */

    if (mehendi) {
        mehendi.classList.remove("event-visible");
    }

    if (barat) {
        barat.classList.remove("event-visible");
    }

    if (walima) {
        walima.classList.remove("event-visible");
    }


    /*
       Show MEHENDI
    */

    if (code.includes("m")) {

        if (mehendi) {
            mehendi.classList.add("event-visible");
        }

    }


    /*
       Show BARAT
    */

    if (code.includes("b")) {

        if (barat) {
            barat.classList.add("event-visible");
        }

    }


    /*
       Show WALIMA
    */

    if (code.includes("w")) {

        if (walima) {
            walima.classList.add("event-visible");
        }

    }

}


/* =====================================================
   RUN EVENT FILTER
===================================================== */

setInvitationEvents();


/* =====================================================
   UPDATE IF URL HASH CHANGES
===================================================== */

window.addEventListener("hashchange", function () {

    setInvitationEvents();

});


/* =====================================================
   OPENING SCREEN
===================================================== */

const openingScreen =
    document.getElementById("openingScreen");

const openInvitation =
    document.getElementById("openInvitation");

const mainInvitation =
    document.getElementById("mainInvitation");

const weddingMusic =
    document.getElementById("weddingMusic");


if (openInvitation) {

    openInvitation.addEventListener("click", function () {


        /* Start music */

        if (weddingMusic) {

            weddingMusic.volume = 0.35;

            weddingMusic.play().catch(function (error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });

        }


        /* Show invitation */

        if (mainInvitation) {

            mainInvitation.classList.add("visible");

        }


        /* Hide opening screen */

        if (openingScreen) {

            openingScreen.classList.add("opened");

        }


        /* Lock scrolling temporarily */

        document.body.style.overflow = "hidden";


        setTimeout(function () {

            document.body.style.overflow = "";

        }, 1200);

    });

}


/* =====================================================
   EVENT SCROLL ANIMATION
===================================================== */

const eventContents =
    document.querySelectorAll(".event-content");


const observer =
    new IntersectionObserver(

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