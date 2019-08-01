// tabs
let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

// content of tabs
let summary = document.getElementById("summary");
let practical = document.getElementById("practical");
let contact = document.getElementById("contact");

// previous and next buttons for slider
let previous = document.querySelector(".slideshow > .prev");
let next = document.querySelector(".slideshow > .next");

// get each image separately
let purpleSky = document.getElementById("purpleSky");
let galaxySky = document.getElementById("galaxySky");
let blueSky = document.getElementById("blueSky");

// get all images together
let slides = document.getElementsByClassName("meteor");

// declare slide index
let slideIndex = 1;

// variables for form
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let country = document.getElementById("country");
let textbox = document.getElementById("subject");
let submit = document.getElementById("button");

// set original display properties of targeted elements
window.onload = function () {
    summary.style.display = "none";
    practical.style.display = "none";
    contact.style.display = "none";
    purpleSky.style.display = "block";
}

// click events for each tab
tab1.addEventListener("click", showTab1);
tab2.addEventListener("click", showTab2);
tab3.addEventListener("click", showTab3);

// show and hide each tab based on which one is visible, and allow it to become visible again and change conditions according to which tab is still visible.
function showTab1() {
    if (summary.style.display == "none") {
        summary.style.display = "block";
        practical.style.display = "none";
        contact.style.display = "none";
    } else if (summary.style.display == "block") {
        summary.style.display = "none";
    }
}

function showTab2() {
    if (practical.style.display == "none") {
        practical.style.display = "block";
        summary.style.display = "none";
        contact.style.display = "none";
    } else if (practical.style.display == "block") {
        practical.style.display = "none";
    }
}

function showTab3() {
    if (contact.style.display == "none") {
        contact.style.display = "block";
        summary.style.display = "none";
        practical.style.display = "none";
    } else if (contact.style.display == "block") {
        contact.style.display = "none";
    }
}


// slider composition
previous.addEventListener("click", goBack);
next.addEventListener("click", goForward);

// go back in slider index
function goBack() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slideIndex--;
    if (slideIndex == 0) {
        slideIndex = 3;
    }
}

// go forward in slider index
function goForward() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    slideIndex++;
    if (slideIndex == 3) {
        slideIndex = 0;
    }
}

// disable send button if all fields are not filled in
if (firstName.value.length > 0 && lastName.value.length > 0 && email.value.length > 0 && textbox.value.length > 0) {
    submit.style.cssText = "background-color: #663367;";
} else {
    submit.style.cssText = "background-color: #AEA5AE;";
}
