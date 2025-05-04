// Event Handling: Button Click
document.getElementById("showDetailsButton").addEventListener("click", function() {
    document.getElementById("details").innerHTML = `
        <p><strong>Qubits:</strong> Qubits are the basic unit of quantum information, similar to classical bits, but they can exist in a superposition of states.</p>
        <p><strong>Superposition:</strong> Superposition allows quantum systems to be in multiple states at once, allowing more computations in parallel.</p>
        <p><strong>Entanglement:</strong> When qubits become entangled, the state of one qubit directly affects the state of another, regardless of distance.</p>
    `;
});

// Form Validation for Email Submission
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("formFeedback");

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Thank you for your feedback!";
        feedback.style.color = "green";
    }
});
