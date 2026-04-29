/* ─── TYPEWRITER ───────────────────────────────────────────────
   Uses slice() — never reads beyond array length, no undefined.
   Type → pause 1.8s → delete → next role, looping forever.
─────────────────────────────────────────────────────────────── */
const roles  = ["FULL STACK DEVELOPER", "DSA ENTHUSIAST", "UI / UX DESIGNER"];
const roleEl = document.getElementById("role");

let charIndex  = 0;
let roleIndex  = 0;
let isDeleting = false;
let paused     = false;

function tick() {
  if (paused) return;

  const word = roles[roleIndex];

  if (!isDeleting) {
    // Add one character
    roleEl.textContent = word.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === word.length) {
      // Done typing → pause, then delete
      paused = true;
      setTimeout(() => {
        paused     = false;
        isDeleting = true;
      }, 1800);
    }
  } else {
    // Remove one character
    roleEl.textContent = word.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex  = (roleIndex + 1) % roles.length;
    }
  }
}

// Typing is faster than deleting — looks more natural
setInterval(() => {
  if (!isDeleting) tick();
}, 110);

setInterval(() => {
  if (isDeleting) tick();
}, 60);


/* ─── LIGHT / DARK TOGGLE ────────────────────────────────────── */
const modeBtn = document.getElementById("change-mode");

// Page loads in light mode (no class on body)
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeBtn.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
});