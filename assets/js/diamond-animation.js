const featuresSection = document.getElementById("featuresSection");
const diamond1 = document.getElementById("diamond-1");
const diamond3 = document.getElementById("diamond-3");
const features = document.querySelectorAll(".feature");

const handleScroll = () => {
  const rect = featuresSection.getBoundingClientRect();

  // Check if the section is in the viewport
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    diamond1.classList.add("move-left");
    diamond3.classList.add("move-right");

    // Show features with a larger delay
    features.forEach((feature, index) => {
      setTimeout(() => {
        feature.classList.add("show");
      }, 1200 + index * 200); // Start after 1 second, then stagger by 200ms
    });

    // Remove event listener after animation is triggered
    window.removeEventListener("scroll", handleScroll);
  }
};

window.addEventListener("scroll", handleScroll);
