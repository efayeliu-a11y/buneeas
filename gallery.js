// About / Contact
const aboutBox = document.getElementById("about-box-gallery");
const aboutBtn = document.getElementById("about-btn-gallery");
const closeAbout = document.getElementById("close-about-gallery");
aboutBtn.addEventListener("click", () => { aboutBox.style.display = "flex"; });
closeAbout.addEventListener("click", () => { aboutBox.style.display = "none"; });

const contactBox = document.getElementById("contact-box-gallery");
const contactBtn = document.getElementById("contact-btn-gallery");
const closeContact = document.getElementById("close-contact-gallery");
contactBtn.addEventListener("click", () => { contactBox.style.display = "flex"; });
closeContact.addEventListener("click", () => { contactBox.style.display = "none"; });

// Lightbox + magnifier
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const magnifier = document.querySelector(".magnifier");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  magnifier.style.backgroundImage = `url(${img.src})`;
  magnifier.style.display = "block";

  lightboxImg.addEventListener("mousemove", moveMagnifier);
  lightboxImg.addEventListener("mouseleave", () => { magnifier.style.display = "none"; });
  lightboxImg.addEventListener("mouseenter", () => { magnifier.style.display = "block"; });

  function moveMagnifier(e) {
    const rect = lightboxImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const magW = magnifier.offsetWidth / 2;
    const magH = magnifier.offsetHeight / 2;

    let posX = x - magW;
    let posY = y - magH;

    // clamp inside image
    posX = Math.max(0, Math.min(posX, rect.width - magnifier.offsetWidth));
    posY = Math.max(0, Math.min(posY, rect.height - magnifier.offsetHeight));

    magnifier.style.left = rect.left + posX + "px";
    magnifier.style.top = rect.top + posY + "px";

    // Proper zoom using % relative to image
    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;
    magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const magnifier = document.querySelector(".magnifier");
  lightbox.style.display = "none";
  magnifier.style.display = "none";
}
