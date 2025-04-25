// let overlayActive = false;

// function changeImage() {
//   const img = document.getElementById("main-image");

//   if (!overlayActive) {
//     img.src = "assets/View5.png"; // Overlay image
//   } else {
//     img.src = "assets/Main-View.png"; // Original image
//   }

//   overlayActive = !overlayActive;
// }

let overlayActive = false;

function changeImage() {
  const img = document.getElementById("main-image");

  img.classList.add("opacity-0");

  setTimeout(() => {
    img.src = overlayActive ? "assets/Main-View.png" : "assets/View5.png";
    overlayActive = !overlayActive;

    // Fade it back in
    img.classList.remove("opacity-0");
  }, 300); // Wait slightly less than the transition duration
}
