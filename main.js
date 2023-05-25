const titulo = document.querySelector(".digitando");

function ativaLetra(elemento) {
  const arrTexto = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}

ativaLetra(titulo);

/*const slides = document.querySelectorAll(".slide");
const texts = document.querySelectorAll(".slide-text h3");
const navigation = document.querySelector(".navigation");

// Exibe o texto1 por padrão
texts[0].style.display = "block";
slides[0].checked = true;

// Adiciona um ouvinte de eventos para cada label
navigation.addEventListener("click", (event) => {
  const label = event.target;
  if (label.tagName === "LABEL") {
    const index = label.getAttribute("for").slice(-1) - 1;

    // Oculta todos os textos
    texts.forEach((text) => {
      text.style.display = "none";
    });

    // Exibe o texto correspondente à label selecionada
    texts[index].style.display = "block";
  }
});*/

const slides = document.querySelectorAll(".slide");
const texts = document.querySelectorAll(".slide-text a");
const navigation = document.querySelector(".navigation");

// Oculta todos os textos, exceto o texto1
texts.forEach((text, index) => {
  if (index !== 0) {
    text.style.display = "none";
  }
});

// Marca o primeiro input como selecionado por padrão
slides[0].checked = true;

// Adiciona um ouvinte de eventos para cada label
navigation.addEventListener("click", (event) => {
  const label = event.target;
  if (label.tagName === "LABEL") {
    const index = label.getAttribute("for").slice(-1) - 1;

    // Oculta todos os textos
    texts.forEach((text) => {
      text.style.display = "none";
    });

    // Exibe o texto correspondente à label selecionada
    texts[index].style.display = "block";
  }
});
