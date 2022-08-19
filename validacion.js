const inputs = document.querySelectorAll(".formcontato__input");

// const validadores = {
//   nombre: (input) => console.log("validador de nombres"),
//   email: (input) => console.log("validador de email"),
//   asunto: (input) => console.log("validador de asunto"),
//   mensaje: (input) => console.log("validador de mensaje"),
// };

const mensajesDeError = {
  nombre: {
    valueMissing:
      "El campo nombre no puede estar vacío y debe tener un máximo de 50 caracteres",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing:
      "El campo asunto no puede estar vacío y debe tener un máximo de 50 caracteres",
  },
  mensaje: {
    valueMissing:
      "El campo mensaje no puede estar vacío y debe tener un máximo de 300 caracteres",
  },
};

const tipoDeErrores = ["valueMissing", "typeMismatch"];

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

function valida(input) {
  const tipoDeInput = input.dataset.tipo;
//   if (validadores[tipoDeInput]) {    //verifica que exista el nombre del tipo de data (dataset).
//     validadores[tipoDeInput](input); //ejecuta la funcion asociada al nombre dentro del objeto "validadores".
//   }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".formcontato__input").classList.add("borde-azul");
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".formcontato__input").classList.remove("borde-azul");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;

}
