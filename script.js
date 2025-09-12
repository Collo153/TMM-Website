// Placeholder for future interactivity (like dynamic event loading or animations)
console.log("The Messengers Ministers website loaded.");
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

function donate(method) {
  switch(method) {
    case 'mpesa':
      alert("M-Pesa: Paybill 123456, Account: Messengers");
      break;
    case 'paypal':
      alert("PayPal: messengersministers@gmail.com");
      break;
    case 'bank':
      alert("Bank Transfer: Acc No. 987654321, Messengers Bank");
      break;
  }
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting us! We will respond soon.");
});
