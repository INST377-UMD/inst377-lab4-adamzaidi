document.getElementById("alert-btn").addEventListener("click", function() {
    let name = document.getElementById("name").value.trim();
    if (name) {
        alert("Hi " + name + "!");
    } else {
        alert("Please enter your name!");
    }
});

let isBlue = true;
document.getElementById("change-color").addEventListener("click", function() {
    document.body.style.backgroundColor = isBlue ? "green" : "#b0d3e8";
    isBlue = !isBlue;
});

document.getElementById("validate-text").addEventListener("click", function() {
    let text = document.getElementById("text-input").value;
    let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert("alert - special character detected");
    } else {
        alert("sick valid text dude, i don't see any special characters");
    }
});

document.getElementById("add-text").addEventListener("click", function() {
    let title = document.getElementById("page-title");
    title.textContent += " Adding Text";
});