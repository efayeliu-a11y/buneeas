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
  