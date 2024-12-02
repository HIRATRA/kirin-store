const menuToggle = document.getElementById("burger-checkbox");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("lucide-search");
const search = document.getElementById("search");
const loup = document.getElementById("search2");
const search2 = document.getElementById("search3");
const loup2 = document.getElementById("search4");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
  search.classList.toggle("hidden");
  loup.classList.toggle("hidden");
  search2.classList.toggle("hidden");
  loup2.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuPC = document.querySelector(".navigation");
  const flu = document.querySelector(".head");

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY / document.documentElement.scrollHeight) * 100;

    if (scrollPercentage > 20) {
      menuPC.classList.remove("md:flex");
      flu.classList.remove("bg-opacity-50");
      flu.classList.remove("backdrop-blur-md");
    } else {
      menuPC.classList.add("md:flex");
      flu.classList.add("bg-opacity-50");
      flu.classList.add("backdrop-blur-md");
    }
  });
});

// modal

const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

//saide barre

const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Ouvrir la sidebar
openSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
});

// Fermer la sidebar
closeSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
});

// Fermer la sidebar en cliquant sur l'overlay
overlay.addEventListener("click", () => {
  sidebar.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
});

// compteur

let quantity = 1;

function incrementQuantity() {
  quantity++;
  updateQuantityDisplay();
}

function decrementQuantity() {
  if (quantity > 1) {
    quantity--;
    updateQuantityDisplay();
  }
}

function updateQuantityDisplay() {
  document.getElementById("quantity-display").textContent = quantity;
}
