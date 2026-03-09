const catImgElem = document.getElementById("cat-img");

fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then(data => {
    if (data.length > 0) {
      catImgElem.src = data[0].url;
    } else {
      console.error("No images found");
      catImgElem.alt = "No cat images available";
    }
  })
  .catch(e => {
    console.error(e);
    catImgElem.alt = "Failed to load cat image";
  });

/* About box */
const aboutBox = document.getElementById("about-box");
const aboutBtn = document.querySelector(".taskbar div:nth-child(2)");
const closeBtn = document.getElementById("close-about");

if (aboutBtn && aboutBox && closeBtn) {
  aboutBtn.addEventListener("click", () => {
    aboutBox.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    aboutBox.style.display = "none";
  });
}

/* Contact box */
const contactBox = document.getElementById("contact-box");
const contactBtn = document.querySelector(".taskbar div:nth-child(3)");
const closeContactBtn = document.getElementById("close-contact");

if (contactBtn && contactBox && closeContactBtn) {
  contactBtn.addEventListener("click", () => {
    contactBox.style.display = "flex";
  });

  closeContactBtn.addEventListener("click", () => {
    contactBox.style.display = "none";
  });
}

/* Confetti button */
const confettiBtn = document.getElementById("confetti-btn");

if (confettiBtn) {
  confettiBtn.addEventListener("click", () => {

    for (let i = 0; i < 100; i++) {

      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      document.body.appendChild(confetti);

      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.backgroundColor = `hsl(${Math.random() * 360},70%,60%)`;
      confetti.style.width = Math.random() * 10 + 5 + "px";
      confetti.style.height = Math.random() * 10 + 5 + "px";

      const fallDuration = Math.random() * 3000 + 2000;

      confetti.animate(
        [
          { transform: `translateY(0) rotate(0deg)` },
          { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random()*720}deg)` }
        ],
        {
          duration: fallDuration,
          easing: "linear"
        }
      );

      setTimeout(() => confetti.remove(), fallDuration);
    }
  });
}

/* Lightbox */
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    lightbox.style.display = "none";
  }
}
