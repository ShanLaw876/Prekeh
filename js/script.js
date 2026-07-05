// Shannon Lawrence
// Prekeh Landing Page
// Filename: script.js
// Create Date: July 4, 2026


const form = document.getElementById("waitlist-form");
const formMsg = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();

    console.log(firstName, lastName, email);
    formMsg.textContent = `Thanks ${firstName}! You're on the Prekeh waitlist.`;
   
    form.reset();
});


