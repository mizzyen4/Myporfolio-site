
const introOverlay = document.querySelector("#intro-overlay");
const skipIntroButton = document.querySelector("#skip-intro-button");

const INTRO_DURATION = 2200;

let introHasClosed = false;
let introTimer;

function closeIntroAnimation() {

    // Stop if the intro is missing or already closing.
    if (!introOverlay || introHasClosed) {
        return;
    }

    introHasClosed = true;

    // Prevent the timer from running after a manual skip.
    window.clearTimeout(introTimer);

    // Trigger the CSS exit animation.
    introOverlay.classList.add("intro-closing");

    // Remove the overlay after its exit animation.
    introOverlay.addEventListener(
        "animationend",
        (event) => {

            // Ignore animation events from child elements.
            if (event.target !== introOverlay) {
                return;
            }

            introOverlay.remove();

        },
        { once: true }
    );
}

if (skipIntroButton) {
    skipIntroButton.addEventListener(
        "click",
        closeIntroAnimation
    );
}
if (introOverlay) {
    introTimer = window.setTimeout(
        closeIntroAnimation,
        INTRO_DURATION
    );
}
