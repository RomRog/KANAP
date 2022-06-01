/*Récupèrer l'id transmis dans le lien pour l'afficher*/
getOrderId();

function getOrderId() {
    let actualUrl = document.location.href;
    actualUrl = new URL(actualUrl);
    let id = actualUrl.searchParams.get("id");
  
    /*affiche l'id de commande dans le texte*/

    document.getElementById("orderId").textContent = id;
  }
  
  