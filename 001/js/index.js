const nameField = document.getElementById("name-field")
const emailField = document.getElementById("email-field")
const submitBtn = document.getElementById("submit-btn")
const result = document.getElementById("result")

submitBtn.addEventListener("click", function() {
    result.textContent = "Thank you for signing up"
})