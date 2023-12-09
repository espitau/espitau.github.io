function checkPassword() {
    var input = document.getElementById("passwordInput").value;
    var correctPassword = "DoleskDeDoleskville"; // Replace with the actual password
    if(input === correctPassword) {
        window.location.href = "enigma6.html"; // Redirect to the next enigma
    } else {
        var errorMessages = ["PERDU !! HAHA !"];
        document.getElementById("errorMessage").innerText = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    }
}


