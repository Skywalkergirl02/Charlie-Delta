// Funcionalidad del carrito de compras
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
    alert("Producto agregado al carrito");
  });
});

// Efecto de animación al hacer scroll
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".card, .reseña");
  const triggerPoint = window.innerHeight * 0.8;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
});

// Popup de confirmación al enviar el formulario
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita el envío automático para mostrar el popup
  alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
  form.submit(); // Ahora sí envía el formulario después del popup
});
