// Dome carousel and wellness retreats carousel aspect ratio handling
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Dome Carousels with unique IDs (1-6)
  for (let i = 1; i <= 6; i++) {
    const carouselId = `#carousel-dome-${i}`;
    $(carouselId).owlCarousel({
      navigation: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      navigationText: false,
      dots: false,
      loop: true
    });

    // Process images in each dome carousel
    const images = document.querySelectorAll(`${carouselId} .item img`);
    images.forEach((img) => {
      img.onload = function () {
        // Remove any existing classes
        this.classList.remove("portrait", "landscape", "square");

        // Calculate aspect ratio and add appropriate class
        const aspectRatio = this.naturalWidth / this.naturalHeight;
        if (aspectRatio > 1.2) {
          this.classList.add("landscape");
        } else if (aspectRatio < 0.8) {
          this.classList.add("portrait");
        } else {
          this.classList.add("square");
        }
      };

      // Trigger onload if image is already loaded
      if (img.complete) {
        img.onload();
      }
    });
  }

  // Initialize Wellness Retreats Carousel (uses dome carousel styling)
  const wellnessRetreatsId = '#carousel-wellness-retreats';
  $(wellnessRetreatsId).owlCarousel({
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    navigationText: false,
    dots: false,
    loop: true
  });

  // Process images in wellness retreats carousel
  const wellnessImages = document.querySelectorAll(`${wellnessRetreatsId} .item img`);
  wellnessImages.forEach((img) => {
    img.onload = function () {
      // Remove any existing classes
      this.classList.remove("portrait", "landscape", "square");

      // Calculate aspect ratio and add appropriate class
      const aspectRatio = this.naturalWidth / this.naturalHeight;
      if (aspectRatio > 1.2) {
        this.classList.add("landscape");
      } else if (aspectRatio < 0.8) {
        this.classList.add("portrait");
      } else {
        this.classList.add("square");
      }
    };

    // Trigger onload if image is already loaded
    if (img.complete) {
      img.onload();
    }
  });
});
