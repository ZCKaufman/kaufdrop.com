function adjustTextSizes() {
    const card = document.querySelector(".card");
    const headerContent = card.querySelector(".card-header-content");
    const name = headerContent.querySelector("h2");
    const description = headerContent.querySelector("p");
  
    // Get the card's current width
    const cardWidth = card.offsetWidth;
  
    // Dynamically calculate font sizes based on card width
    const baseNameFontSize = 22; // Base size for name in px
    const baseDescriptionFontSize = 14; // Base size for description in px
  
    const nameFontSize = Math.min(30, baseNameFontSize + (cardWidth - 400) * 0.06);
    const descriptionFontSize = Math.min(24, baseDescriptionFontSize + (cardWidth - 400) * 0.05);
  
    // Apply the calculated font sizes
    name.style.fontSize = `${nameFontSize}px`;
    description.style.fontSize = `${descriptionFontSize}px`;
  }
  
  function monitorCardWidthDuringTransition() {
    const card = document.querySelector(".card");
    let isTransitioning = true;
  
    function updateFontSizes() {
      if (isTransitioning) {
        adjustTextSizes(); // Recalculate text sizes based on the current card width
        requestAnimationFrame(updateFontSizes); // Continue monitoring
      }
    }
  
    // Start monitoring
    requestAnimationFrame(updateFontSizes);
  
    // Stop monitoring when the card transition ends
    card.addEventListener(
      "transitionend",
      () => {
        isTransitioning = false;
        adjustTextSizes(); // Final adjustment after the transition completes
      },
      { once: true } // Only trigger once per transition
    );
  }
  
  function toggleSection(sectionId) {
    const sections = document.querySelectorAll(".section-content");
    const card = document.querySelector(".card");
    let isExpanding = false;
  
    sections.forEach((section) => {
      if (section.id === sectionId) {
        if (section.classList.contains("active")) {
          // Collapse the section
          section.classList.remove("active");
          section.style.maxHeight = null;
          section.style.opacity = 0;
        } else {
          // Expand the section
          section.classList.add("active");
          section.style.maxHeight = "200px"; // Match the max-height in CSS
          section.style.opacity = 1;
          isExpanding = true;
        }
      } else {
        // Collapse other sections
        section.classList.remove("active");
        section.style.maxHeight = null;
        section.style.opacity = 0;
      }
    });
  
    // Adjust the card size
    if (isExpanding) {
      card.classList.add("expanded");
    } else {
      card.classList.remove("expanded");
    }
  
    // Dynamically monitor the width and update text sizes during the transition
    monitorCardWidthDuringTransition();
  }
  
  // Adjust text sizes on load and resize
  window.addEventListener("load", adjustTextSizes);
  window.addEventListener("resize", adjustTextSizes);

  
// Total number of profile images
const profileImagesCount = 4;

// Index to track the current image
let currentImageIndex = 0;

// Reference to the profile image element
const profilePic = document.getElementById('profile-pic');

// Function to cycle through images
function cycleProfilePic() {
    // Increment the index and wrap around using modulo
    currentImageIndex = (currentImageIndex + 1) % profileImagesCount;
  
    // Add a query parameter to bypass caching
    const timestamp = new Date().getTime(); // Unique value to prevent caching
    profilePic.src = `/images/profile${currentImageIndex + 1}.jpg?${timestamp}`;
  
    console.log(`Updated src: ${profilePic.src}`); // Debugging log
  }  
  

// Add a click event listener to the profile picture
profilePic.addEventListener('click', cycleProfilePic);
  