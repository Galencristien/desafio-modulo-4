function main() {
  addForm(document.querySelector(".contact"));

  const botonAbrirMenu = document.querySelector(".header__nav-button");
  botonAbrirMenu.addEventListener("click", (click) => {
    click.preventDefault();
    document.querySelector(".menu").style.display = "initial";
  });

  const botonCerrarMenu = document.querySelector(".menu__close");

  botonCerrarMenu.addEventListener("click", (click) => {
    click.preventDefault();
    document.querySelector(".menu").style.display = "none";
  });
}
main();
