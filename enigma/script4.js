function checkPassword() {
    var input = document.getElementById("passwordInput").value;
    var correctPassword = "vampire"; // Replace with the actual password
    if(input === correctPassword) {
        window.location.href = "miam.html"; // Redirect to the next enigma
    } else {
        var errorMessages = ["NUL !"];
        document.getElementById("errorMessage").innerText = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    }
}


