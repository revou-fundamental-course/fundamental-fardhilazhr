// Function to prompt the user on page load
window.onload = function() {
    // Prompt the user for their name
    let userName = prompt("Welcome! Please enter your name:", "");

    // Display the name in the greeting if provided
    if (userName) {
        document.getElementById('greeting').innerHTML = `<strong>Hi ${userName}!</strong>`;    }
};


let slideIndex = 0;
let slideBanner = document.querySelectorAll('.slide-banner');
let slideProfile = document.querySelectorAll('.slide-profile');

showSlides(slideBanner, 0); 
showSlides(slideProfile, 0); 

// show slides auto
function showSlides(slides, slideIndex) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    
    setTimeout(function() { showSlides(slides, slideIndex); }, 3000);
}

// button slides
function plusSlides(n) {
    slideIndex += n;
    let slides = document.querySelectorAll('.slide-banner');
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// button show more
function showMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btnShow");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more about me!"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

// message  validation
function validationForm() {
    // Get form elements
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('pesan').value.trim();

    // Validate each field
    if (!name || !dob) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Get gender value
    const genderValue = gender ? gender.value : '';

    // Create result summary
    const summary = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${genderValue}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    const title = `<p><strong>Hi, ${name}! This is your Summary message</strong>`;

    // Display the summary in the result container
    document.getElementById('resultContent').innerHTML = summary;

    document.getElementById('resultTitle').innerHTML = title;

    document.getElementById('userForm').reset();
}