let overlayActive = false;

function changeImage() {
  const img = document.getElementById("main-image");

  if (!overlayActive) {
    img.src = "/View5.jpg"; // Overlay image
  } else {
    img.src = "/Main-View.jpg"; // Original image
  }

  overlayActive = !overlayActive;
}
