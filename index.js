function revealProduct(cardNumber) {
    alert("¡Felicidades! Has ganado el Producto " + cardNumber);
    document.querySelector(".card:nth-child(" + cardNumber + ")").classList.toggle("flipped");
}
