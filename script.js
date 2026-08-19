const butonlar = document.querySelectorAll(".ucus-btn");

butonlar.forEach((buton) => {
  buton.addEventListener("click", () => {
    butonlar.forEach((b) => b.classList.remove("active"));
    buton.classList.add("active");
  });
});
