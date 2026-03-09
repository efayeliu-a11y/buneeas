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
  // Show about box
const aboutBox = document.getElementById("about-box");
const aboutBtn = document.querySelector(".taskbar div:nth-child(2)"); // "About" button
const closeBtn = document.getElementById("close-about");

aboutBtn.addEventListener("click", () => {
  aboutBox.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  aboutBox.style.display = "none";
});
// Contact box
const contactBox = document.getElementById("contact-box");
const contactBtn = document.querySelector(".taskbar div:nth-child(3)"); // "Contact" button
const closeContactBtn = document.getElementById("close-contact");

contactBtn.addEventListener("click", () => {
  contactBox.style.display = "flex";
});

closeContactBtn.addEventListener("click", () => {
  contactBox.style.display = "none";
});

  