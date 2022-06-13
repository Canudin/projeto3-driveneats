function highlight(choiceBox) {
  const selected = document.querySelector(".highlight");
  if (selected !== null) {
    selected.classList.remove("highlight");
  }
  choiceBox.classList.toggle("highlight");
  purchase();
}

function highlight2(choiceBox) {
  const selected = document.querySelector(".highlight2");
  if (selected !== null) {
    selected.classList.remove("highlight2");
  }
  choiceBox.classList.toggle("highlight2");
  purchase();
}

function highlight3(choiceBox) {
  const selected = document.querySelector(".highlight3");
  if (selected !== null) {
    selected.classList.remove("highlight3");
  }
  choiceBox.classList.toggle("highlight3");
  purchase();
}

function purchase() {
  const button = document.querySelector(".request-button");
  const item1 = document.querySelector(".highlight");
  const item2 = document.querySelector(".highlight2");
  const item3 = document.querySelector(".highlight3");
  if (item1 && item2 && item3 !== null) {
    button.classList.add("request-button-highlight");
    button.innerHTML = "<p>Fechar Pedido</p>";
    button.onclick = function () {
      total();
    };
  }
}

function total() {
  const item1 = document.querySelector(".highlight");
  const item2 = document.querySelector(".highlight2");
  const item3 = document.querySelector(".highlight3");
  const food = item1.querySelector(".food-title").textContent;
  const drink = item2.querySelector(".food-title").textContent;
  const dessert = item3.querySelector(".food-title").textContent;
  let priceFood = item1.querySelector(".food-price").textContent;
  let priceDrink = item2.querySelector(".food-price").textContent;
  let priceDessert = item3.querySelector(".food-price").textContent;
  priceFood = priceFood.replace("R$ ", "");
  priceDrink = priceDrink.replace("R$ ", "");
  priceDessert = priceDessert.replace("R$ ", "");
  typeof(priceFood);
  console.log(priceFood);
  console.log(priceDrink);
  console.log(priceDessert);
  const sum = Number(priceFood)+Number(priceDrink)+Number(priceDessert);
  console.log(sum);
  let message = `Olá, gostaria de fazer o pedido:
  - Prato: ${food}
  - Bebida: ${drink}
  - Sobremesa: ${dessert}
  Total: R$ ${sum}`;
  const encode = encodeURIComponent(message);
  
  //https://wa.me/1519981652372?text=urldamensagempronta
}