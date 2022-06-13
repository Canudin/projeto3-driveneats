function highlight(choiceBox) {
    const selecionado = document.querySelector(".highlight");
    console.log(selecionado);
    if (selecionado !== null) {
        selecionado.classList.remove("highlight");
    }
  choiceBox.classList.toggle("highlight");
  purchase();
}

function highlight2(choiceBox) {
    const selecionado = document.querySelector(".highlight2");
    if (selecionado !== null) {
        selecionado.classList.remove("highlight2");
    }
  choiceBox.classList.toggle("highlight2");
  purchase();
}

function highlight3(choiceBox) {
    const selecionado = document.querySelector(".highlight3");
    if (selecionado !== null) {
        selecionado.classList.remove("highlight3");
    }
  choiceBox.classList.toggle("highlight3");
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
    const name1 = item1.querySelector(".food-title").textContent
    console.log(name1)
    const name2 = item2.querySelector(".food-title").textContent
    console.log(name2)
    const name3 = item3.querySelector(".food-title").textContent
    console.log(name3)
}
