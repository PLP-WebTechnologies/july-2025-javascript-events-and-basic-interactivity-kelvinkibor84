// --- Form Validation ---
// Prevents submission if fields are invalid
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from refreshing page

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Custom validation rules
  if (username.length < 3) {
    message.textContent = "❌ Username must be at least 3 characters long.";
    message.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "❌ Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters long.";
    message.style.color = "red";
    return;
  }

  // Success
  message.textContent = "✅ Registration successful!";
  message.style.color = "green";
});


// --- Interactive Feature 1: Counter ---
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});


// --- Interactive Feature 2: Background Color Changer ---
document.getElementById("colorBtn").addEventListener("click", function() {
  const colors = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
