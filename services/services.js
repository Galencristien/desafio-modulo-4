function addservicesCard(params = {}) {
  const template = document.querySelector("#template");
  const container = document.querySelector(".services__card-container");
  template.content.querySelector(".services__card-title").textContent =
    params.titulo;
  template.content.querySelector(".services__card-text").textContent =
    params.descripcion;
  template.content.querySelector(".services__card-img").src = params.imagen;

  clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/o9rsl9km4ubv/environments/master/entries?access_token=KzcCZtl5-YMeRiIWahZXF_10NCKn8d1CR8FJdetwwGc&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldColleccion = data.items.map((item) => {
        const image = buscarEnAsset(item.fields.imagen.sys.id, data);
        const imgUrl = image.fields.file.url;
        return {
          titulo: item.fields.titulo,
          descripcion: item.fields.descripcion,
          imagen: imgUrl,
        };
      });
      return fieldColleccion;
    });
}
function buscarEnAsset(id, data) {
  const arrayEncontrado = data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });
  return arrayEncontrado;
}

function main() {
  addFooter(document.querySelector(".footer"));
  addHeader(document.querySelector(".header"));

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
  getServices().then((services) => {
    for (const w of services) {
      addservicesCard(w);
    }
  });
}
main();
