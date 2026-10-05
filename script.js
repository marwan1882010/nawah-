const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const buyButtons = document.querySelectorAll(".buy-btn");

menuBtn.onclick = function () {
  navLinks.classList.toggle("active");
};

buyButtons.forEach(function (button) {
  button.onclick = function () {
    const productName = button.dataset.product;
    const message = `مرحباً، أريد طلب ${productName} من نواه 🌿`;
    const phone = "201000000000";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.onclick = function () {
    navLinks.classList.remove("active");
  };
});
