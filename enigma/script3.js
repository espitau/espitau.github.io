function checkPassword() {
    var input = document.getElementById("passwordInput").value;
    var correctPassword = "1312"; // Replace with the actual password
    if(input === correctPassword) {
        window.location.href = "coucou.html"; // Redirect to the next enigma
    } else {
        var errorMessages = ["Nenni !"];
        document.getElementById("errorMessage").innerText = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    }
}


