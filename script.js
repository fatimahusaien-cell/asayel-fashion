document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".collection-card, .journal-card, .product-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px)";
      card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      card.style.boxShadow = "0 18px 36px rgba(0, 0, 0, 0.18)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });
});