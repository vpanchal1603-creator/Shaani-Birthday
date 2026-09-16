/* ==================================================
   MUSIC
================================================== */

const music =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");


function startMusic() {

    if (!music) {
        return;
    }

    if (music.paused) {

        music.play()
            .then(function () {

                if (musicBtn) {
                    musicBtn.classList.add("playing");
                    musicBtn.innerHTML = "♫";
                }

            })
            .catch(function (error) {

                console.log(
                    "Music error:",
                    error
                );

            });

    }

}


if (musicBtn && music) {

    musicBtn.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            if (music.paused) {

                music.play()
                    .then(function () {

                        musicBtn.classList.add("playing");
                        musicBtn.innerHTML = "♫";

                    })
                    .catch(function (error) {

                        console.log(
                            "Music error:",
                            error
                        );

                        alert(
                            "Music play nahi ho rahi. Check karo musicx folder ke andar birthday.mp3 file hai."
                        );

                    });

            } else {

                music.pause();

                musicBtn.classList.remove(
                    "playing"
                );

                musicBtn.innerHTML = "🔇";

            }

        }
    );

}


/* ==================================================
   FIRST CLICK MUSIC
================================================== */

document.addEventListener(
    "click",
    function () {

        startMusic();

    },
    {
        once: true
    }
);


/* ==================================================
   PAGE 1 → PAGE 2
================================================== */

function openSurprise() {

    createHearts();

    setTimeout(function () {

        const pageTwo =
            document.getElementById(
                "pageTwo"
            );

        if (!pageTwo) {
            return;
        }

        pageTwo.classList.add("show");

        pageTwo.scrollTop = 0;

        document.body.style.overflow =
            "hidden";

    }, 500);

}


/* ==================================================
   TURN ON LIGHT
================================================== */

function turnOnLight() {

    const fairyLights =
        document.getElementById(
            "fairyLights"
        );

    const pageTwo =
        document.getElementById(
            "pageTwo"
        );


    if (fairyLights) {
        fairyLights.classList.add(
            "lights-on"
        );
    }

    if (pageTwo) {
        pageTwo.classList.add(
            "room-lit"
        );
    }

}


/* ==================================================
   PAGE 2 → PAGE 3
================================================== */

function goToNextPage() {

    const pageTwo =
        document.getElementById(
            "pageTwo"
        );

    const pageThree =
        document.getElementById(
            "pageThree"
        );


    if (!pageThree) {
        return;
    }


    if (pageTwo) {
        pageTwo.classList.remove(
            "show"
        );
    }


    pageThree.classList.add(
        "show"
    );

    pageThree.scrollTop = 0;

    document.body.style.overflow =
        "hidden";

}


/* ==================================================
   PAGE 3 → PAGE 4
================================================== */

function goToFourthPage() {

    const pageThree =
        document.getElementById(
            "pageThree"
        );

    const pageFour =
        document.getElementById(
            "pageFour"
        );


    if (!pageFour) {
        return;
    }


    if (pageThree) {
        pageThree.classList.remove(
            "show"
        );
    }


    pageFour.classList.add(
        "show"
    );

    pageFour.scrollTop = 0;

    document.body.style.overflow =
        "hidden";

}


/* ==================================================
   PAGE 4 → PAGE 5
================================================== */

function goToFifthPage() {

    const pageFour =
        document.getElementById(
            "pageFour"
        );

    const pageFive =
        document.getElementById(
            "pageFive"
        );


    if (!pageFive) {
        return;
    }


    if (pageFour) {
        pageFour.classList.remove(
            "show"
        );
    }


    pageFive.classList.add(
        "show"
    );

    pageFive.scrollTop = 0;

    document.body.style.overflow =
        "hidden";

}


/* ==================================================
   PAGE 5 → PAGE 6
================================================== */

function goToSixthPage() {

    const pageFive =
        document.getElementById(
            "pageFive"
        );

    const pageSix =
        document.getElementById(
            "pageSix"
        );


    if (!pageSix) {
        return;
    }


    /* Stop Page 5 continuous sparkle rain */

    stopContinuousSparkles();


    if (pageFive) {
        pageFive.classList.remove(
            "show"
        );
    }


    pageSix.classList.add(
        "show"
    );

    pageSix.scrollTop = 0;

    document.body.style.overflow =
        "hidden";


    createPageSixIntroSparkles();

}


/* ==================================================
   PAGE 6
   WISH DATA
================================================== */

const wishes = {

    1: {
        icon: "🌸",

        message:
            "I hope life always gives you reasons to smile, because honestly, your smile deserves all the happiness in the world. And I hope I get to see that smile for many, many years. 🥹💗"
    },


    2: {
        icon: "🦋",

        message:
            "Some people enter our lives and slowly become a beautiful part of our story. You are one of those people for me. I feel genuinely lucky that our paths crossed. 🌸🤍"
    },


    3: {
        icon: "💌",

        message:
            "I wish you never forget how special you are. Even on the days when you don't feel your best, I hope you remember that somewhere in this world, there is a friend who is always silently rooting for you. 🦋✨"
    },


    4: {
        icon: "🎀",

        message:
            "I wish our friendship stays just as crazy, comfortable, honest and beautiful as it is today. May we always have random conversations, stupid laughs and memories that make us smile years later. 😂💗"
    },


    5: {
        icon: "🌷",

        message:
            "I hope every dream you have slowly finds its way into reality. You deserve beautiful things, beautiful moments and a life that feels as wonderful as the person you are. 🌸✨"
    },


    6: {
        icon: "🌙",

        message:
            "If I could wish one thing for you, it would be happiness — the kind that stays even when life gets difficult. I hope your heart always finds its way back to peace. 🥹🫶🏻"
    },


    7: {
        icon: "🫂",

        message:
            "Thank you for being a friend with whom I can be completely myself. No pretending, no overthinking, just me. That comfort is something I will always be grateful for. 🫂🤍"
    },


    8: {
        icon: "💐",

        message:
            "There are friendships you remember, and then there are friendships you feel lucky to have. Ours will always be the second one for me. You are genuinely one of the most special people in my life. 💐🥹"
    },


    9: {
        icon: "🌙",

        message:
            "I hope that whenever life feels heavy, you always have someone beside you to remind you that things will be okay. And whenever you look back at life, I hope our memories make you smile. 🌙💞"
    },


    10: {
        icon: "✨",

        message:
            "May this new year of your life bring you new dreams, new adventures, unexpected happiness and countless little moments that make you think, 'Life is actually beautiful.' ✨🎂"
    },


    11: {
        icon: "🤍",

        message:
            "I don't know what the future holds for either of us, but I genuinely hope friendship remains one of the constants in our lives. No matter how much life changes, some bonds are worth keeping forever. 🫶🏻🤍"
    },


    12: {
        icon: "💗",

        message:
            "And my last little wish is for us — that we keep making memories, laughing at the same stupid things, supporting each other and someday look back and say... 'Damn, we really had the best friendship.' 🥹💖"
    }

};


/* ==================================================
   OPEN WISH
================================================== */

function openWish(number) {

    const overlay =
        document.getElementById(
            "wishOverlay"
        );

    const message =
        document.getElementById(
            "wishMessage"
        );

    const wishNumber =
        document.getElementById(
            "wishNumber"
        );

    const wishIcon =
        document.getElementById(
            "wishIcon"
        );


    if (
        !overlay ||
        !message ||
        !wishNumber ||
        !wishIcon
    ) {
        return;
    }


    const selectedWish =
        wishes[number];


    if (!selectedWish) {
        return;
    }


    wishIcon.innerText =
        selectedWish.icon;


    wishNumber.innerText =
        "WISH " +
        String(number).padStart(2, "0");


    message.innerText =
        selectedWish.message;


    overlay.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";


    /*
       Every time a wish opens,
       fresh sparkle rain starts.
    */

    createWishSparkles(42);


    /*
       Little extra heart burst.
    */

    createWishHeartBurst();

}


/* ==================================================
   CLOSE WISH
================================================== */

function closeWish() {

    const overlay =
        document.getElementById(
            "wishOverlay"
        );

    if (!overlay) {
        return;
    }


    overlay.classList.remove(
        "show"
    );


    const pageSix =
        document.getElementById(
            "pageSix"
        );


    if (
        pageSix &&
        pageSix.classList.contains("show")
    ) {

        document.body.style.overflow =
            "hidden";

    }

}


/* ==================================================
   CLOSE WISH BY CLICKING OUTSIDE
================================================== */

document.addEventListener(
    "click",
    function (event) {

        const overlay =
            document.getElementById(
                "wishOverlay"
            );


        if (!overlay) {
            return;
        }


        if (
            event.target === overlay
        ) {

            closeWish();

        }

    }
);


/* ==================================================
   ESC KEY
================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            const overlay =
                document.getElementById(
                    "wishOverlay"
                );

            if (
                overlay &&
                overlay.classList.contains("show")
            ) {

                closeWish();

            }

        }

    }
);


/* ==================================================
   WISH SPARKLES
================================================== */

function createWishSparkles(amount) {

    const container =
        document.getElementById(
            "wishSparkles"
        );


    if (!container) {
        return;
    }


    const symbols = [
        "✦",
        "✧",
        "⋆",
        "✨",
        "♡",
        "♥",
        "˚",
        "❀",
        "🎀"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            function () {

                const sparkle =
                    document.createElement(
                        "span"
                    );


                sparkle.className =
                    "wish-sparkle";


                sparkle.innerText =
                    symbols[
                        Math.floor(
                            Math.random() *
                            symbols.length
                        )
                    ];


                sparkle.style.left =
                    Math.random() *
                    100 +
                    "vw";


                sparkle.style.fontSize =
                    10 +
                    Math.random() *
                    18 +
                    "px";


                sparkle.style.animationDuration =
                    3 +
                    Math.random() *
                    2.5 +
                    "s";


                container.appendChild(
                    sparkle
                );


                setTimeout(
                    function () {

                        sparkle.remove();

                    },
                    6000
                );

            },
            i * 55
        );

    }

}


/* ==================================================
   PAGE 6 INTRO SPARKLES
================================================== */

function createPageSixIntroSparkles() {

    const container =
        document.getElementById(
            "wishSparkles"
        );


    if (!container) {
        return;
    }


    const symbols = [
        "✦",
        "✧",
        "♡",
        "⋆"
    ];


    for (
        let i = 0;
        i < 18;
        i++
    ) {

        setTimeout(
            function () {

                const sparkle =
                    document.createElement(
                        "span"
                    );


                sparkle.className =
                    "wish-sparkle";


                sparkle.innerText =
                    symbols[
                        Math.floor(
                            Math.random() *
                            symbols.length
                        )
                    ];


                sparkle.style.left =
                    Math.random() *
                    100 +
                    "vw";


                sparkle.style.fontSize =
                    10 +
                    Math.random() *
                    15 +
                    "px";


                sparkle.style.animationDuration =
                    3.5 +
                    Math.random() *
                    2 +
                    "s";


                container.appendChild(
                    sparkle
                );


                setTimeout(
                    function () {

                        sparkle.remove();

                    },
                    6000
                );

            },
            i * 80
        );

    }

}


/* ==================================================
   WISH HEART BURST
================================================== */

function createWishHeartBurst() {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧"
    ];


    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const item =
            document.createElement(
                "span"
            );


        item.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        item.style.position =
            "fixed";


        item.style.left =
            42 +
            Math.random() *
            16 +
            "vw";


        item.style.top =
            52 +
            Math.random() *
            8 +
            "vh";


        item.style.zIndex =
            "240";


        item.style.pointerEvents =
            "none";


        item.style.color =
            "#e8b49b";


        item.style.fontSize =
            13 +
            Math.random() *
            14 +
            "px";


        item.style.transition =
            "all 1.2s ease";


        document.body.appendChild(
            item
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            35 +
            Math.random() *
            70;


        setTimeout(
            function () {

                item.style.transform =
                    "translate(" +
                    Math.cos(angle) *
                    distance +
                    "px," +
                    Math.sin(angle) *
                    distance +
                    "px) rotate(180deg)";


                item.style.opacity =
                    "0";

            },
            40
        );


        setTimeout(
            function () {

                item.remove();

            },
            1300
        );

    }

}


/* ==================================================
   CUTE FLOATING HEARTS
================================================== */

function createHearts() {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✨",
        "🎀"
    ];


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );


        heart.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() *
            100 +
            "vw";

        heart.style.top =
            "70vh";

        heart.style.fontSize =
            14 +
            Math.random() *
            15 +
            "px";

        heart.style.zIndex =
            "100";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "all 1.8s ease";


        document.body.appendChild(
            heart
        );


        setTimeout(
            function () {

                heart.style.transform =
                    "translateY(-65vh) rotate(360deg)";

                heart.style.opacity =
                    "0";

            },
            50
        );


        setTimeout(
            function () {

                heart.remove();

            },
            2000
        );

    }

}


/* ==================================================
   PAGE 4
   BALLOON POP
================================================== */

const poppedBalloons = {
    1: false,
    2: false,
    3: false,
    4: false
};


function popBalloon(number) {

    if (poppedBalloons[number]) {
        return;
    }


    poppedBalloons[number] =
        true;


    const balloon =
        document.getElementById(
            "balloon" + number
        );

    const word =
        document.getElementById(
            "word" + number
        );


    if (!balloon || !word) {
        return;
    }


    balloon.classList.add(
        "popped"
    );


    createPopParticles(
        balloon
    );


    setTimeout(
        function () {

            word.classList.add(
                "revealed"
            );

        },
        250
    );


    setTimeout(
        function () {

            checkAllBalloons();

        },
        700
    );

}


/* ==================================================
   POP PARTICLES
================================================== */

function createPopParticles(balloon) {

    const rect =
        balloon.getBoundingClientRect();


    const particles = [
        "✦",
        "♡",
        "·",
        "✧",
        "✨",
        "♥"
    ];


    for (
        let i = 0;
        i < 10;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.innerText =
            particles[
                Math.floor(
                    Math.random() *
                    particles.length
                )
            ];


        particle.style.position =
            "fixed";

        particle.style.left =
            rect.left +
            rect.width / 2 +
            "px";

        particle.style.top =
            rect.top +
            rect.height / 2 +
            "px";

        particle.style.zIndex =
            "100";

        particle.style.pointerEvents =
            "none";

        particle.style.color =
            "#e8b49b";

        particle.style.fontSize =
            14 +
            Math.random() *
            12 +
            "px";

        particle.style.transition =
            "all 0.8s ease";


        document.body.appendChild(
            particle
        );


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            45 +
            Math.random() *
            65;


        setTimeout(
            function () {

                particle.style.transform =
                    "translate(" +
                    Math.cos(angle) *
                    distance +
                    "px," +
                    Math.sin(angle) *
                    distance +
                    "px) rotate(180deg)";

                particle.style.opacity =
                    "0";

            },
            20
        );


        setTimeout(
            function () {

                particle.remove();

            },
            900
        );

    }

}


/* ==================================================
   CHECK ALL BALLOONS
================================================== */

function checkAllBalloons() {

    const allPopped =
        poppedBalloons[1] &&
        poppedBalloons[2] &&
        poppedBalloons[3] &&
        poppedBalloons[4];


    if (!allPopped) {
        return;
    }


    const hint =
        document.getElementById(
            "balloonHint"
        );

    const message =
        document.getElementById(
            "specialMessage"
        );


    if (hint) {

        hint.style.opacity =
            "0";

        setTimeout(
            function () {

                hint.style.display =
                    "none";

            },
            500
        );

    }


    if (message) {

        setTimeout(
            function () {

                message.classList.add(
                    "show"
                );

            },
            500
        );

    }


    setTimeout(
        function () {

            createHearts();

        },
        900
    );

}


/* ==================================================
   PAGE 5
   BLOW CANDLES
================================================== */

let candlesBlown =
    false;


function blowCandles() {

    if (candlesBlown) {
        return;
    }


    const pageFive =
        document.getElementById(
            "pageFive"
        );

    const blowButton =
        document.getElementById(
            "blowButton"
        );


    if (!pageFive) {
        return;
    }


    candlesBlown =
        true;


    pageFive.classList.add(
        "candles-blown"
    );


    if (blowButton) {
        blowButton.disabled =
            true;
    }


    createBlowParticles();


    setTimeout(
        function () {

            createSmallCelebration();

        },
        500
    );

}


/* ==================================================
   BLOW PARTICLES
================================================== */

function createBlowParticles() {

    const pageFive =
        document.getElementById(
            "pageFive"
        );


    if (!pageFive) {
        return;
    }


    const particles = [
        "˚",
        "·",
        "✧",
        "♡"
    ];


    for (
        let i = 0;
        i < 14;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.innerText =
            particles[
                Math.floor(
                    Math.random() *
                    particles.length
                )
            ];


        particle.style.position =
            "fixed";

        particle.style.left =
            38 +
            Math.random() *
            24 +
            "vw";

        particle.style.top =
            35 +
            Math.random() *
            8 +
            "vh";

        particle.style.zIndex =
            "90";

        particle.style.pointerEvents =
            "none";

        particle.style.color =
            "#e7c0aa";

        particle.style.fontSize =
            12 +
            Math.random() *
            15 +
            "px";

        particle.style.transition =
            "all 1s ease";


        document.body.appendChild(
            particle
        );


        setTimeout(
            function () {

                particle.style.transform =
                    "translateX(" +
                    (
                        35 +
                        Math.random() *
                        55
                    ) +
                    "px)";

                particle.style.opacity =
                    "0";

            },
            30
        );


        setTimeout(
            function () {

                particle.remove();

            },
            1100
        );

    }

}


/* ==================================================
   SMALL CELEBRATION
================================================== */

function createSmallCelebration() {

    const symbols = [
        "♡",
        "✦",
        "✧",
        "˚"
    ];


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const item =
            document.createElement(
                "span"
            );


        item.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        item.style.position =
            "fixed";

        item.style.left =
            20 +
            Math.random() *
            60 +
            "vw";

        item.style.top =
            55 +
            Math.random() *
            10 +
            "vh";

        item.style.zIndex =
            "100";

        item.style.pointerEvents =
            "none";

        item.style.color =
            "#e9bda3";

        item.style.fontSize =
            14 +
            Math.random() *
            12 +
            "px";

        item.style.transition =
            "all 1.2s ease";


        document.body.appendChild(
            item
        );


        setTimeout(
            function () {

                item.style.transform =
                    "translateY(-60px) scale(1.4)";

                item.style.opacity =
                    "0";

            },
            50
        );


        setTimeout(
            function () {

                item.remove();

            },
            1300
        );

    }

}


/* ==================================================
   PAGE 5
   CUT CAKE
================================================== */

let cakeCut =
    false;

let sparkleRainInterval =
    null;


/* ==================================================
   CUT CAKE
================================================== */

function cutCake() {

    if (
        !candlesBlown ||
        cakeCut
    ) {
        return;
    }


    const pageFive =
        document.getElementById(
            "pageFive"
        );


    if (!pageFive) {
        return;
    }


    cakeCut =
        true;


    pageFive.classList.add(
        "cake-cut"
    );


    setTimeout(
        function () {

            startContinuousSparkles();

        },
        700
    );


    setTimeout(
        function () {

            createHearts();

        },
        1500
    );

}


/* ==================================================
   CONTINUOUS SPARKLE RAIN
================================================== */

function startContinuousSparkles() {

    if (sparkleRainInterval) {

        clearInterval(
            sparkleRainInterval
        );

    }


    createSparkleBatch(25);


    sparkleRainInterval =
        setInterval(
            function () {

                createSparklePiece();

            },
            260
        );

}


/* ==================================================
   INITIAL SPARKLE BATCH
================================================== */

function createSparkleBatch(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            function () {

                createSparklePiece();

            },
            i * 90
        );

    }

}


/* ==================================================
   ONE SPARKLE
================================================== */

function createSparklePiece() {

    const container =
        document.getElementById(
            "celebrationRain"
        );


    if (!container) {
        return;
    }


    const symbols = [
        "✦",
        "✧",
        "⋆",
        "✨",
        "♡",
        "♥",
        "˚",
        "❀",
        "🎀"
    ];


    const sparkle =
        document.createElement(
            "span"
        );


    sparkle.className =
        "sparkle-piece";


    sparkle.innerText =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    sparkle.style.left =
        Math.random() *
        100 +
        "vw";


    sparkle.style.animationDuration =
        3.5 +
        Math.random() *
        2 +
        "s";


    sparkle.style.animationDelay =
        "0s";


    sparkle.style.fontSize =
        10 +
        Math.random() *
        17 +
        "px";


    sparkle.style.transform =
        "rotate(" +
        Math.random() *
        360 +
        "deg)";


    container.appendChild(
        sparkle
    );


    setTimeout(
        function () {

            sparkle.remove();

        },
        6500
    );

}


/* ==================================================
   STOP SPARKLES
================================================== */

function stopContinuousSparkles() {

    if (sparkleRainInterval) {

        clearInterval(
            sparkleRainInterval
        );

        sparkleRainInterval =
            null;

    }

}


/* ==================================================
   PAGE 6 → PAGE 7
   OUR MEMORIES
================================================== */

function goToMemoriesPage() {

    const pageSix =
        document.getElementById(
            "pageSix"
        );

    const pageSeven =
        document.getElementById(
            "pageSeven"
        );


    if (!pageSeven) {

        console.error(
            "Page 7 not found."
        );

        return;
    }


    /*
       Stop Page 5 sparkle rain
       just to make sure no old
       animation continues.
    */

    stopContinuousSparkles();


    /*
       Hide Page 6
    */

    if (pageSix) {

        pageSix.classList.remove(
            "show"
        );

    }


    /*
       Show Page 7
    */

    pageSeven.classList.add(
        "show"
    );


    /*
       Always open Page 7
       from the top.
    */

    pageSeven.scrollTop =
        0;


    /*
       Keep body locked because
       Page 7 itself has scrolling.
    */

    document.body.style.overflow =
        "hidden";

}


/* ==================================================
   PAGE 7 → PAGE 8
   WISHES
================================================== */
/* ==================================================
   PAGE 7 → PAGE 8
================================================== */

let birthdayLetterSparkleInterval = null;

function goToWishesPage() {

    const pageSeven =
        document.getElementById("pageSeven");

    const pageEight =
        document.getElementById("pageEight");

    if (!pageEight) {
        console.error("Page 8 not found.");
        return;
    }

    /* Stop Page 7 */
    if (pageSeven) {
        pageSeven.classList.remove("show");
    }

    /* Show Page 8 */
    pageEight.classList.add("show");

    /* Start scrolling from top */
    pageEight.scrollTop = 0;

    /* Lock horizontal body scrolling */
    document.body.style.overflowX = "hidden";

    /* Keep vertical scrolling for long letter */
    document.body.style.overflowY = "hidden";

    /* Start LOTS of falling sparkles */
    startBirthdayLetterSparkles();
}


/* ==================================================
   PAGE 8 — FALLING SPARKLES
================================================== */

function startBirthdayLetterSparkles() {

    const container =
        document.getElementById(
            "birthdayLetterSparkles"
        );

    if (!container) {
        return;
    }

    /* Prevent duplicate intervals */
    if (birthdayLetterSparkleInterval) {
        clearInterval(
            birthdayLetterSparkleInterval
        );
    }

    /* Initial huge burst */
    for (let i = 0; i < 70; i++) {
        createBirthdayLetterSparkle(
            container,
            true
        );
    }

    /* Continuous falling sparkles */
    birthdayLetterSparkleInterval =
        setInterval(function () {

            for (let i = 0; i < 7; i++) {

                createBirthdayLetterSparkle(
                    container,
                    false
                );

            }

        }, 230);
}


/* ==================================================
   CREATE ONE SPARKLE
================================================== */

function createBirthdayLetterSparkle(
    container,
    initial
) {

    const sparkle =
        document.createElement("span");

    sparkle.className =
        "birthday-letter-sparkle";

    const symbols = [
        "✦",
        "✧",
        "⋆",
        "♡",
        "·",
        "✦",
        "✧"
    ];

    sparkle.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.fontSize =
        (Math.random() * 13 + 8) + "px";

    sparkle.style.animationDuration =
        (Math.random() * 4 + 5) + "s";

    sparkle.style.animationDelay =
        initial
            ? -(Math.random() * 5) + "s"
            : "0s";

    sparkle.style.opacity =
        Math.random() * .7 + .3;

    container.appendChild(sparkle);


    /* Remove after animation */

    setTimeout(function () {

        if (sparkle.parentNode) {
            sparkle.remove();
        }

    }, 10000);
}


/* ==================================================
   PAGE 8 CLEANUP
================================================== */

function stopBirthdayLetterSparkles() {

    if (birthdayLetterSparkleInterval) {

        clearInterval(
            birthdayLetterSparkleInterval
        );

        birthdayLetterSparkleInterval = null;
    }
}


/* ==================================================
   PAGE LOAD
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const pageOne =
            document.getElementById(
                "pageOne"
            );

        const pageTwo =
            document.getElementById(
                "pageTwo"
            );

        const pageThree =
            document.getElementById(
                "pageThree"
            );

        const pageFour =
            document.getElementById(
                "pageFour"
            );

        const pageFive =
            document.getElementById(
                "pageFive"
            );

        const pageSix =
            document.getElementById(
                "pageSix"
            );

        const pageSeven =
            document.getElementById(
                "pageSeven"
            );


        /* ==================================================
           PAGE 1
        ================================================== */

        if (pageOne) {

            pageOne.style.display =
                "flex";

        }


        /* ==================================================
           HIDE OTHER PAGES INITIALLY
        ================================================== */

        if (pageTwo) {

            pageTwo.classList.remove(
                "show"
            );

        }


        if (pageThree) {

            pageThree.classList.remove(
                "show"
            );

        }


        if (pageFour) {

            pageFour.classList.remove(
                "show"
            );

        }


        if (pageFive) {

            pageFive.classList.remove(
                "show"
            );

        }


        if (pageSix) {

            pageSix.classList.remove(
                "show"
            );

        }


        if (pageSeven) {

            pageSeven.classList.remove(
                "show"
            );

        }


        /*
           Prevent horizontal scrolling.
        */

        document.body.style.overflowX =
            "hidden";

    }
);