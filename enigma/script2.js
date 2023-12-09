function checkPassword() {
    var input = document.getElementById("passwordInput").value;
    var correctPassword = "citron"; // Replace with the actual password
    if(input === correctPassword) {
        window.location.href = "pouic.html"; // Redirect to the next enigma
    } else {
        var errorMessages = ["Non !", "Pas bon !", "C fo wesh !"];
        document.getElementById("errorMessage").innerText = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    }
}


