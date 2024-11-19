// Characters available for the password
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Function to generate the password
function generatePassword() {
    // Get user inputs
    const length = parseInt(document.getElementById("length").value);
    const allowRepetition = document.getElementById("repetition").value === "true";

    // Validate inputs
    if (isNaN(length) || length <= 0) {
        document.getElementById("output").innerText = "Please enter a valid password length.";
        return;
    }

    if (!allowRepetition && length > characters.length) {
        document.getElementById("output").innerText = `Password length exceeds available characters for unique values. Max length: ${characters.length}`;
        return;
    }

    let password = "";
    if (allowRepetition) {
        // Allow repetition
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    } else {
        // No repetition
        const shuffledCharacters = characters.split('').sort(() => 0.5 - Math.random());
        password = shuffledCharacters.slice(0, length).join('');
    }

    // Display the password
    document.getElementById("output").innerText = `Generated Password: ${password}`;
}
