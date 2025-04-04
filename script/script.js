const form = document.getElementById('gift-card-form');
const formScreen = document.getElementById('form-screen');
const consoleScreen = document.getElementById('console');
const codeContainer = document.getElementById('code');
const accessDenied = document.getElementById('accessDenied');
const typingSound = new Audio('./audio/keyboard-typing-sound-247417.mp3');
const accessDeniedAudio = new Audio('./audio/ALERT_WARNING_SOUND_EFFECT___NO_COPYRIGHT(128k).mp3');

let userData = {};

// Show form when "Claim Now" button is clicked
document.querySelectorAll('.claim-btn').forEach(button => {
  button.addEventListener('click', () => {
    formScreen.style.display = 'block'; // Show form
    consoleScreen.style.display = 'none'; // Hide console if visible
  });
});

// Form submission logic
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect user data
  userData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    giftCard: document.getElementById('gift-card').value,
    address: document.getElementById('address').value
  };

  // Trigger confetti animation
  const duration = 3 * 1000; // 3 seconds
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FFD700', '#FF4500', '#FF6347']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#FFD700', '#FF4500', '#FF6347']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  // Show pop-up message
  setTimeout(() => {
    alert('Your form is submitted! Click OK to proceed.');
    formScreen.style.display = 'none'; // Hide form
    consoleScreen.style.display = 'block'; // Show console
    startHackingSimulation(); // Start hacking simulation
  }, duration);
});

function startHackingSimulation() {
  const commands = [
    `Initializing hacking sequence for ${userData.name}...`,
    `Email address: ${userData.email}`,
    `Gift Card: ${userData.giftCard}`,
    `Address: ${userData.address}`,
    `Loading system modules...`,
    "Scanning for vulnerabilities...",
    "Fetching sensitive data...",
    "Decrypting payload...",
    "Uploading to dark web...",
    "System breach detected!",
    `Fetching user data...`,
    `Connecting to secure servers...`,
    `Decrypting payload...`,
    `Uploading data to external servers...`,
    `Scanning for vulnerabilities...`,
    `Exploiting open ports...`,
    `Fetching sensitive credentials...`,
    `Encrypting stolen data...`,
    `Uploading stolen payload to dark web markets...`,
    `Bypassing firewall...`,
    `Injecting malicious code...`,
    `Accessing root system...`,
    `Mobile approved the access...`,
    `Looking for Banking App...`,
    `Connecting to your bank server...`,
    `Fetching the Pin...`,
    `BOOM..BOOM........BOOM...`
  ];

  let index = 0;

  function typeCommand() {
    if (index < commands.length) {
      const command = commands[index];
      let charIndex = 0;

      typingSound.currentTime = 0;
      typingSound.play();

      const interval = setInterval(() => {
        if (charIndex < command.length) {
          codeContainer.innerHTML += command[charIndex];
          charIndex++;
        } else {
          clearInterval(interval);
          codeContainer.innerHTML += '<br>';
          index++;
          typeCommand();
        }
      }, 10);
    } else {
      triggerAccessDenied();
    }
  }

  typeCommand();
}

function triggerAccessDenied() {
  accessDenied.style.display = 'block'; // Show "Access Denied" message
  accessDeniedAudio.currentTime = 0;
  accessDeniedAudio.play();

  setTimeout(() => {
    accessDenied.style.display = 'none'; // Hide "Access Denied" message
  }, 12000);
}