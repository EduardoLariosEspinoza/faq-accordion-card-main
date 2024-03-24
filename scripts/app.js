const preguntas = document.querySelectorAll(".question-div");

preguntas.forEach((pregunta) => {
  pregunta.addEventListener("click", () => {
    activarPregunta(pregunta);
    activarArrow(pregunta);
    mostrarRespuesta(pregunta);
  });
});

function activarPregunta(pregunta) {
  const p = pregunta.querySelector(".question-text");

  if (p.classList.contains("active-question")) {
    p.classList.remove("active-question");
    return;
  }

  p.classList.add("active-question");
}

function activarArrow(pregunta) {
  const arrow = pregunta.querySelector(".arrow");

  if (arrow.classList.contains("rotated-image")) {
    arrow.classList.remove("rotated-image");
    return;
  }

  arrow.classList.add("rotated-image");
}

function mostrarRespuesta(pregunta) {
  const respuesta = pregunta.querySelector(".responses");

  if (respuesta.style.display === "block") {
    respuesta.style.display = "none";
    return;
  }

  respuesta.style.display = "block";
}
