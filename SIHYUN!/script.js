// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      e.preventDefault(); // Prevent default only for internal links
      window.scrollTo({
        top: targetSection.offsetTop - 60, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});



// Function to change the image on hover (used in the projects section)
function swapImage(element, newSrc) {
  const img = element.querySelector('img'); // Find the <img> inside the card
  if (img) {
    img.src = newSrc; // Update the source of the image
  }
}

// Function to Download CV (used in the "MY CV" button)
function downloadCV() {
  window.open('CV.pdf', '_blank');
}

// Function to navigate the user to about page
function navigateToAbout() {
  window.location.href = 'about.html';
}



// Array of images
const skillImages = ['bubbleImages/1.png','bubbleImages/2.png', 'bubbleImages/3.png', 'bubbleImages/4.png'];
let currentImageIndex = 0;


// Function to change the image (when clicked) used in the skills section
function changeImage() {
  // Get the image element
  const imageElement = document.getElementById('skills-image');
  
  // Increment the image index and reset if it exceeds the array length
  currentImageIndex = (currentImageIndex + 1) % skillImages.length;
  
  // Set the new image source
  imageElement.src = skillImages[currentImageIndex];
}

// Toggle the hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Show or hide the nav links
});

