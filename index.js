function revealProduct(cardNumber) {
    var card = document.querySelector('.card[data-card="' + cardNumber + '"]');
    var image = card.querySelector('.card-back');

    // Alternar la clase 'hidden' para mostrar u ocultar la imagen
    image.classList.toggle('hidden');
}
