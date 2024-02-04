const imageUrls = [
    'images/indiana.png',
    'images/indiana010.png',
    'images/indiana12.png',
    'images/visa.jpg',
    'images/student.jpg',
    'images/pic23.jpg',
    'images/pic3.webp',
];

let currentIndex = 0;

function updateImage() {
    const rotatingImage = document.getElementById('rotating-image');
    rotatingImage.style.transform = `translateX(-${currentIndex * (100 / imageUrls.length)}%)`;

    // Clear previous images
    rotatingImage.innerHTML = '';

    // Add all images to the container
    imageUrls.forEach((imageUrl) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        rotatingImage.appendChild(imgElement);
    });
}

function goToPrevious() {
    currentIndex = currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1;
    updateImage();
}

function goToNext() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateImage();
}

// Automatically slide images every 3 seconds
setInterval(goToNext, 6000);

// Initial image update
updateImage();

const countryFlags = [ 'images/visa.jpg', 'images/student.jpg', 'images/serve.jpg', 'images/indiana12.png', 'images/pic23.jpg']; // Add the paths to your flag images

const flagContainerInner = document.querySelector('.flag-container-inner');

function createFlagElement(flagPath) {
  const flagElement = document.createElement('img');
  flagElement.src = flagPath;
  flagElement.classList.add('flag');
  return flagElement;
}

// Duplicate the images to ensure seamless rolling effect
const duplicatedFlags = [...countryFlags, ...countryFlags];

duplicatedFlags.forEach(flagPath => {
  const flagElement = createFlagElement(flagPath);
  flagContainerInner.appendChild(flagElement);
});

let currentPosition = 0;
const increment = 0.03; // Adjust the increment value for the desired speed

function rollFlags() {
  currentPosition -= increment;
  flagContainerInner.style.transform = `translateX(${currentPosition}%)`;

  if (currentPosition <= -100) {
    currentPosition = 0;
  }

  requestAnimationFrame(rollFlags);
}

// Start the animation loop
rollFlags();
  