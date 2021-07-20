function addFooter(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `<div class="footer__container">
  <div class="footer__title-container">
    <h2 class="footer__title">GALEN</h2>
    </div>
    <div class="footer__img-container">
    <img src="./img/instagram-footer.png" alt="" class="footer__img" />
    <img src="./img/LinKedin.png" alt="" class="footer__img" />
    <img src="./img/Gibhut.png" alt="" class="footer__img" />
    </div>
  </div>`;
  el.appendChild(componentEl);
}
