let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

let summary = document.getElementById("summary");
let practical = document.getElementById("practical");
let contact = document.getElementById("contact");

function showTab1() {
    if (summary.style.display === "none") {
        summary.style.display === "block";
    }
}

function showTab2() {
    if (practical.style.display === "none") {
        practical.style.display === "block";
    }
}

function showTab3() {
    if (contact.style.display === "none") {
        contact.style.display === "block";
    }
}

tab1.addEventListener("click", showTab1);
tab2.addEventListener("click", showTab2);
tab3.addEventListener("click", showTab3);