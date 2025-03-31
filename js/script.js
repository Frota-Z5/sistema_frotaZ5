// Função para alternar a classe "active" no dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
      dropdown.addEventListener("click", function (event) {
          event.stopPropagation();
          this.classList.toggle("active");
      });
  });

  // Fechar dropdown ao clicar fora
  document.addEventListener("click", function () {
      dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
  });
});
