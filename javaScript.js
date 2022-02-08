const selecao = document.getElementById("selecao");

const contador = document.getElementById("info");

const selectionStart = document.getElementById("start-caixa");
const gravetoStart = document.createElement("div");
gravetoStart.className = "graveto-Start";
selectionStart.appendChild(gravetoStart);

//Graveto - Offset
const selectionOffset = document.getElementById("offset-caixa");
const gravetoOffset = document.createElement("div");
gravetoOffset.className = "graveto-Offset";
selectionOffset.appendChild(gravetoOffset);

//Graveto - End
const selectionEnd = document.getElementById("end-caixa");
const gravetoEnd = document.createElement("div");
gravetoEnd.className = "graveto-End";
selectionEnd.appendChild(gravetoEnd);
//Fim Graveto

/* Torres*/
//Start
const startTorre = document.getElementById("start");
//Offset
const offsetTorre = document.getElementById("offset");
//End
const endTorre = document.getElementById("end");

/*----- Criando Disco -----*/

//StartTorre
const discoId = [
  "disc-red",
  "disc-green",
  "disc-roxo",
  "disc-azul",
  "disc-amarelo",
  "disc-magenta",
  "disc-laranja",
  "disc-ciano",
];

let valor = -1;
const select = document.getElementById("dificuldade");

const label = document.getElementById("label");
function update() {
  valor = select.options[select.selectedIndex].value;

  criarDisco(valor);
}

let tmGravetoStart = 600;
let vitoria = 0;

function criarDisco(valor) {
  if (valor == 1) {
    for (let i = 0; i < 4; i++) {
      const disco = document.createElement("div");
      disco.id = discoId[i];
      tmGravetoStart -= 58;
      gravetoStart.style.height = tmGravetoStart + "px";
      startTorre.appendChild(disco);
      select.remove();
      label.remove();
    }
    vitoria = 4;

    const restart = document.createElement("a");
    restart.innerText = "Restart";
    restart.href = "index.html";

    selecao.appendChild(restart);
  } else if (valor == 2) {
    for (let i = 0; i < 6; i++) {
      const disco = document.createElement("div");
      disco.id = discoId[i];
      tmGravetoStart -= 58;
      gravetoStart.style.height = tmGravetoStart + "px";
      startTorre.appendChild(disco);
      select.remove();
      label.remove();
    }
    vitoria = 6;

    const restart = document.createElement("a");
    restart.innerText = "Restart";
    restart.href = "index.html";

    selecao.appendChild(restart);
  } else if (valor == 3) {
    for (let i = 0; i < 8; i++) {
      const disco = document.createElement("div");
      disco.id = discoId[i];
      tmGravetoStart -= 58;
      gravetoStart.style.height = tmGravetoStart + "px";
      startTorre.appendChild(disco);
      select.remove();
      label.remove();
    }
    vitoria = 8;

    const restart = document.createElement("a");
    restart.innerText = "Restart";
    restart.href = "index.html";

    selecao.appendChild(restart);
  }
}
/* Movimentação de Torre */
let evento = null;
let tmGraveto = null;
let tmGravetoOffset = 600;
let tmGravetoEnd = 600;
let cont = 0;

selectionStart.addEventListener("click", (event) => {
  if (evento != null) {
    if (startTorre.childElementCount == 0) {
      startTorre.appendChild(evento);
      evento = null;

      if (tmGraveto === gravetoOffset.className) {
        tmGravetoOffset += 58;
        gravetoOffset.style.height = tmGravetoOffset + "px";

        tmGraveto = null;
      }

      if (tmGraveto === gravetoEnd.className) {
        tmGravetoEnd += 58;
        gravetoEnd.style.height = tmGravetoEnd + "px";

        tmGraveto = null;
      }

      tmGravetoStart -= 58;

      gravetoStart.style.height = tmGravetoStart + "px";

      cont++;
    } else if (
      startTorre.childElementCount > 0 &&
      evento.clientWidth < startTorre.lastElementChild.clientWidth
    ) {
      startTorre.appendChild(evento);
      evento = null;

      if (tmGraveto === gravetoOffset.className) {
        tmGravetoOffset += 58;
        gravetoOffset.style.height = tmGravetoOffset + "px";

        tmGraveto = null;
      }

      if (tmGraveto === gravetoEnd.className) {
        tmGravetoEnd += 58;
        gravetoEnd.style.height = tmGravetoEnd + "px";

        tmGraveto = null;
      }

      tmGravetoStart -= 58;

      gravetoStart.style.height = tmGravetoStart + "px";

      cont++;
    } else {
      evento = null;
      alert("Movimento Invalido!");
    }
  } else {
    evento = startTorre.lastElementChild;

    tmGraveto = selectionStart.lastElementChild.className;
  }
  console.log(cont);
});

selectionOffset.addEventListener("click", (event) => {
  if (evento != null) {
    if (offsetTorre.childElementCount == 0) {
      offsetTorre.appendChild(evento);
      evento = null;

      if (tmGraveto === gravetoStart.className) {
        tmGravetoStart += 58;
        gravetoStart.style.height = tmGravetoStart + "px";

        tmGraveto = null;
      }

      if (tmGraveto === gravetoEnd.className) {
        tmGravetoEnd += 58;
        gravetoEnd.style.height = tmGravetoEnd + "px";

        tmGraveto = null;
      }

      tmGravetoOffset -= 58;

      gravetoOffset.style.height = tmGravetoOffset + "px";

      cont++;
    } else if (
      offsetTorre.childElementCount > 0 &&
      evento.clientWidth < offsetTorre.lastElementChild.clientWidth
    ) {
      offsetTorre.appendChild(evento);
      evento = null;

      if (tmGraveto === gravetoStart.className) {
        tmGravetoStart += 58;
        gravetoStart.style.height = tmGravetoStart + "px";

        tmGraveto = null;
      }

      if (tmGraveto === gravetoEnd.className) {
        tmGravetoEnd += 58;
        gravetoEnd.style.height = tmGravetoEnd + "px";

        tmGraveto = null;
      }

      tmGravetoOffset -= 58;

      gravetoOffset.style.height = tmGravetoOffset + "px";

      cont++;
    } else {
      evento = null;
      alert("Movimento Invalido!");
    }
  } else {
    evento = offsetTorre.lastElementChild;

    tmGraveto = selectionOffset.lastElementChild.className;
  }
  console.log(cont);
});

selectionEnd.addEventListener("click", (event) => {
  let quant = endTorre.childElementCount;

  if (quant != vitoria) {
    if (evento != null) {
      if (endTorre.childElementCount == 0) {
        endTorre.appendChild(evento);
        evento = null;

        if (tmGraveto === gravetoStart.className) {
          tmGravetoStart += 58;
          gravetoStart.style.height = tmGravetoStart + "px";

          tmGraveto = null;
        }

        if (tmGraveto === gravetoOffset.className) {
          tmGravetoOffset += 58;
          gravetoOffset.style.height = tmGravetoOffset + "px";

          tmGraveto = null;
        }

        tmGravetoEnd -= 58;

        gravetoEnd.style.height = tmGravetoEnd + "px";

        cont++;
      } else if (
        endTorre.childElementCount > 0 &&
        evento.clientWidth < endTorre.lastElementChild.clientWidth
      ) {
        endTorre.appendChild(evento);
        evento = null;

        if (tmGraveto === gravetoStart.className) {
          tmGravetoStart += 58;
          gravetoStart.style.height = tmGravetoStart + "px";

          tmGraveto = null;
        }

        if (tmGraveto === gravetoOffset.className) {
          tmGravetoOffset += 58;
          gravetoOffset.style.height = tmGravetoOffset + "px";

          tmGraveto = null;
        }

        tmGravetoEnd -= 58;

        gravetoEnd.style.height = tmGravetoEnd + "px";

        cont++;
      } else {
        evento = null;
        alert("Movimento Invalido!");
      }
    } else {
      evento = endTorre.lastElementChild;

      tmGraveto = selectionEnd.lastElementChild.className;
    }
  } else {
    alert("Parabens Você Completou a Torre!");

    if (contador.childElementCount <= 1) {
      const spam = document.createElement("span");
      spam.innerText = "Foi realizado " + cont + " Movimentos.";

      contador.appendChild(spam);
    }
  }
  console.log(cont);
});
