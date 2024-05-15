function revealProduct(cardNumber) {
    var message;

    switch(cardNumber) {
            case 1:
                message = "Felicidades!! Ganaste una Mascara almendras x 270 grs. - Fidelite 😎";
                break;
            case 2:
                message = " Felicidades!! Ganaste una Cera x 50 grs. Iyosei 😜 ";
                break;
            case 3:
                message = " Felicidades!! Ganaste una Crema corporal x 250 gr.- Arvensis 🥰";
                break;
            case 4:
                message = " Felicidades!! Ganaste 3 pouch a eleccion x 20 grs. - Primont 🎉 ";
                break; 
            case 5:
                message = " Felicidades!! Ganaste un Reparador yhr106 - Iyosei 🎊 ";
                break; 
            case 6:
                message = " Felicidades!! Ganaste una Leche siliconada x120ml - iyosei 🎁 ";
                break; 
            case 7:
                message = "Felicidades!! Ganaste un Shampoo x250ml - Mav 🧴";
                break;
            case 8:
                message = " Felicidades!! Ganaste una Crema corporal x 250 gr.- Arvensis ❣️ ";
                break;
            case 9:
                message = " Felicidades!! Ganaste 4 perlas a eleccion - Iyosei ✅ ";
                break;
            case 10:
                message = " Felicidades!! Ganaste un Shampoo x 1L - Mixtio 💥 ";
                break; 
            case 11:
                message = " Felicidades!! Ganaste una Mascara Keratina x 270 grs. - Fidelite 💣 ";
                break; 
            case 12:
                message = " Felicidades!! Ganaste Cera x 50 grs. Iyosei 🤩";
                break;                      
           default:
            message = "Mensaje por defecto para tarjetas no especificadas.";
    }

    alert(message);

    var card = document.querySelector('.card[data-product="' + cardNumber + '"]');
    card.querySelector('.card-inner').classList.toggle("flipped");
}



// function revealProduct(cardNumber) {
//     // Voltea la tarjeta correspondiente
//     var card = document.querySelector('.card[data-product="' + cardNumber + '"]');
//     card.querySelector('.card-inner').classList.toggle("flipped");
// }
