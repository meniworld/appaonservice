const texts = [
    "Seamless Invitations, Effortless Gatherings.",
    "Plan, Invite, Confirm - All in One Place.",
    "Smart Invites for Smarter Events.",
    "Your Event, Your Guests, Our Service.",
    "Simplify Invitations, Elevate Your Events.",
    "Hassle-Free Event Invitations",
    "Connecting Guests, One Invite at a Time.",
    "Effortless Planning, Perfect Attendance.",
    "Invite with Ease, Celebrate with Confidence.",
    "Making Guest Management a Breeze."
];

const animations = [
    "fadeInUp",
    "zoomIn",
    "slideLeft",
    "bounceIn",
    "flipIn",
    "fadeInDown",
    "slideUp",
    "fadeInRight"
];
let count = 0;
const changingText = document.getElementById('changing-text');

function changeText() {
    count = (count + 1) % texts.length;
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

    // Reset animation
    changingText.style.animation = 'none';
    void changingText.offsetWidth; // Trigger reflow (very important)

    changingText.innerText = texts[count];
    changingText.style.animation = `${randomAnimation} 1.5s ease`;
}

setInterval(changeText, 8000);
