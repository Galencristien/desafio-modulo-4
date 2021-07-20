function addHeader(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = ` <header class="header">
  <div class="header__nav-container">
    <div class="menu">
      <div class="menu__container">
        <div class="menu__close-container">
          <button class="menu__close fas fa-window-close"></button>
        </div>
        <a href="./index.html" class="menu__menu-link">Menu</a>
        <a href="./portfolio.html" class="menu__porfolio-link"
          >Portfolio</a
        >
        <a href="./servicios.html" class="menu__services-link"
          >Servicios</a
        >
        <a href="./contacto.html" class="menu__contact-link">Contacto</a>
      </div>
    </div>
    <nav class="header__nav">
      <h3 class="header__nav-name">Galen</h3>
      <button class="header__nav-button fas fa-bars"></button>
      <div class="header__nav-link">
        <a href="./index.html" class="menu__menu-link">Menu</a>
        <a href="./portfolio.html" class="menu__porfolio-link"
          >Portfolio</a
        >
        <a href="./servicios.html" class="menu__services-link"
          >Servicios</a
        >
        <a href="./contacto.html " class="menu__contact-link">Contacto</a>
      </div>
    </nav>
  </div>
</header>`;
  el.appendChild(componentEl);
}
