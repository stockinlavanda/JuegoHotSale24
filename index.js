function revealProduct(cardNumber) {
    var card = document.querySelector(".card[data-card='" + cardNumber + "']");
    card.classList.add("flipped");
}
