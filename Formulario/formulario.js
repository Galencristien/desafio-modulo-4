function addForm(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `<div class="contact__container">
  <div class="contact__form-container">
    <form class="contac__form">
      <div class="contact__form-title-container">
        <h3 class="contact__form-title">Escribime</h3>
      </div>
      <div class="contact__form-label-container">
        <label class="contac__form-label">
          <h4 class="contact__form-label-title">Nombre</h4>
          <input type="text" class="contact__form-label-input" />
        </label>
        <label class="contac__form-label">
          <h4 class="contact__form-label-title">Email</h4>
          <input type="text" class="contact__form-label-input" />
        </label>
        <label class="contac__form-label">
          <h4 class="contact__form-label-title">Mensaje</h4>
          <textarea
            cols="30"
            rows="10"
            class="contact__form-label-textarea"
          ></textarea>
        </label>
        <button class="contact__form-button">Enviar</button>
      </div>
    </form>
  </div>
</div>`;
  el.appendChild(componentEl);
  enviarForm();
}

function enviarForm() {
  const myForm = document.querySelector(".contac__form");
  console.log(myForm);
  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objeto = Object.fromEntries(formData.entries());

    let mensaje = `${objeto.nombre} te ha enviado un mensaje! <br/>
    Mensaje: ${objeto.mensaje} <br/>
    Mail de ${objeto.nombre}: ${objeto.email}`;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "galencristien@gmail.com",
        message: mensaje,
      }),
    }).then(() => {
      alert("El mensaje se envio con exito");

      const inputsEl = document.querySelector(".contac__form-labels");
      inputsEl.forEach((input) => {
        input.value = "";
      });
      const textareaEl = formEl.querySelector(".contact__form-label-textareas");
      textareaEl.value = "";
    });
  });
}
