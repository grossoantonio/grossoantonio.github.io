const featuresSection = document.getElementById("featuresSection");
const diamond1 = document.getElementById("diamond-1");
const diamond3 = document.getElementById("diamond-3");
const features = document.querySelectorAll(".feature");

const animateDiamondsAndText = () => {
  // Move diamonds apart
  diamond1.classList.add("move-left");
  diamond3.classList.add("move-right");

  // Show features with a staggered delay
  features.forEach((feature, index) => {
    setTimeout(() => {
      feature.classList.add("show");
    }, 1200 + index * 200); // Start after 1.2 seconds, then stagger by 200ms
  });

  // Wait for 10 seconds, then reverse the animation
  setTimeout(() => {
    reverseAnimation();
  }, 7000); // Delay before reversing
};

const reverseAnimation = () => {
  // Hide features first
  features.forEach((feature) => {
    feature.classList.remove("show");
  });

  // Move diamonds back to center
  diamond1.classList.remove("move-left");
  diamond3.classList.remove("move-right");

  // Reset positions after a short delay
  setTimeout(() => {
    // Wait before starting the second separation animation
    setTimeout(() => {
      animateDiamondsAndText(); // Start the cycle again
    }, 1200); // Wait before restarting (adjust as needed)
  }, 1200); // Match this with the transition duration
};

const handleScroll = () => {
  const rect = featuresSection.getBoundingClientRect();

  // Check if the section is in the viewport
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    animateDiamondsAndText();

    // Remove event listener after animation is triggered
    window.removeEventListener("scroll", handleScroll);
  }
};

// Add event listener for scroll
window.addEventListener("scroll", handleScroll);
