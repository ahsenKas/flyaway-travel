const butonlar = document.querySelectorAll(".ucus-btn");

butonlar.forEach((buton) => {
  buton.addEventListener("click", () => {
    butonlar.forEach((b) => b.classList.remove("active"));
    buton.classList.add("active");
  });
});
const menuOgeleri = document.querySelectorAll(".nav-links .liste");

menuOgeleri.forEach(function (menu) {
  menu.addEventListener("click", function () {
    menuOgeleri.forEach(function (item) {
      item.classList.remove("active");
    });

    menu.classList.add("active");
  });
});
