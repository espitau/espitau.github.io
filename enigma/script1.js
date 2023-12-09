function checkPassword() {
    var input = document.getElementById("passwordInput").value;
    var correctPassword = "ami"; // Replace with the actual password
    if(input === correctPassword) {
        window.location.href = "truc.html"; // Redirect to the next enigma
    } else {
        var errorMessages = ["Non !", "Pas bon !", "C fo wesh !"];
        document.getElementById("errorMessage").innerText = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    }
}


