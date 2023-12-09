function checkPassword() {
    var input = document.getElementById("passwordInput").value;
    var correctPassword = "la poste"; // Replace with the actual password
    if(input === correctPassword) {
        window.location.href = "fin.html"; // Redirect to the next enigma
    } else {
        var errorMessages = ["Toujours pas, dolesk !"];
        document.getElementById("errorMessage").innerText = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    }
}


