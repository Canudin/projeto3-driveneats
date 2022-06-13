function highlight(choiceBox) {
    const selecionado = document.querySelector(".highlight");
    console.log(selecionado);
    if (selecionado !== null) {
        selecionado.classList.remove("highlight");
    }
  choiceBox.classList.toggle("highlight");
  console.log("highlight toggle funcionou!");
  purchase();
}

function highlight2(choiceBox) {
    const selecionado = document.querySelector(".highlight2");
    console.log(selecionado);
    if (selecionado !== null) {
        selecionado.classList.remove("highlight2");
    }
  choiceBox.classList.toggle("highlight2");
  console.log("highlight toggle funcionou!");
  purchase();
}

function highlight3(choiceBox) {
    const selecionado = document.querySelector(".highlight3");
    console.log(selecionado);
    if (selecionado !== null) {
        selecionado.classList.remove("highlight3");
    }
  choiceBox.classList.toggle("highlight3");
  console.log("highlight toggle funcionou!");
  purchase();
}

function purchase(){
    const button = document.querySelector(".request-button")
    const item1 = document.querySelector(".highlight");
    const item2 = document.querySelector(".highlight2");
    const item3 = document.querySelector(".highlight3");
    if (item1 && item2 && item3 !== null) {
        button.classList.add("request-button-highlight")
        button.innerHTML = "<p>Fechar Pedido</p>"
    }
}