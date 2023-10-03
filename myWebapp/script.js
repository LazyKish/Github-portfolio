var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var imageClasses = ["img-fluid", "rounded-circle", "image3"];
imageClasses.forEach(function(className) {
  var images = document.getElementsByClassName(className);
  for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function() {
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
      });
  }
});



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Variables to track scroll direction and last scroll position
let lastScrollTop = 0;
let scrollingUp = false;

// Function to check the scroll direction
function checkScrollDirection() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        scrollingUp = false;
    } else {
        scrollingUp = true;
    }

    lastScrollTop = scrollTop;
}

// Function to toggle the class based on scroll direction
function toggleNavbarClass() {
    const navbar = document.querySelector(".navbar");

    if (scrollingUp) {
        navbar.classList.remove("navbar-hide");
        navbar.classList.add("navbar-show");
    } else {
        navbar.classList.remove("navbar-show");
        navbar.classList.add("navbar-hide");
    }
}

// Event listener for scroll
window.addEventListener("scroll", () => {
    checkScrollDirection();
    toggleNavbarClass();
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all "View" buttons and descriptions
    const viewButtons = document.querySelectorAll(".view-btn");
    const descriptions = document.querySelectorAll(".post-description");

    // Loop through each "View" button
    viewButtons.forEach((viewButton, index) => {
        // Handle "View" button click
        viewButton.addEventListener("click", function () {
            // Toggle the visibility of the description
            descriptions[index].classList.toggle("hidden");
        });
    });
});

