let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

let summary = document.getElementById("summary");
let practical = document.getElementById("practical");
let contact = document.getElementById("contact");

window.onload = function() {
    summary.style.display = "block";
    practical.style.display = "none";
    contact.style.display = "none";
}

tab1.addEventListener("click", showTab1);
tab2.addEventListener("click", showTab2);
tab3.addEventListener("click", showTab3);

function showTab1() {
    if (summary.style.display == "block") {
        summary.style.display = "none";
    } else if (summary.style.display == "none") {
        summary.style.display = "block";
    }
}

function showTab2() {
    if (practical.style.display == "none") {
        practical.style.display = "block";
    } else if (practical.style.display == "block") {
        practical.style.display = "none";
    }
}

function showTab3() {
    if (contact.style.display == "none") {
        contact.style.display = "block";
    } else if (contact.style.display == "block") {
        contact.style.display = "none";
    }
}
