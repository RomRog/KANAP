/*lien pour récuperer des canapés*/

const url = "http://localhost:3000/api/products";
console.log('test');

function ajax(url) {
  fetch(url)
    .then(function (res) {
      console.log(res);
      if (res.ok) {
        res.json().then(function (articles) {

          console.log(articles);

          for (let article of articles) {
            addItemAtHome(
              article._id,
              article.imageUrl,
              article.altTxt,
              article.name,
              article.description
            );
          }
        }).catch(function (err) {
          console.log(err);
        })
      }
    }).catch(function (err) {
      console.log(err);
    })

    .catch(function (err) {
      console.log(err);
    });
}

function addItemAtHome(idItem, imageUrl, imageAlt, name, description) {
  var items = document.getElementById("items");

  /*création du liens de l'article*/

  let linkItem = document.createElement("a");
  linkItem.href = "product.html?id=" + idItem;
  items.append(linkItem);

  /*création de l'article*/

  let articleItem = document.createElement("article");
  linkItem.append(articleItem);

  /*création de l'image de l'article*/

  let pictureItem = document.createElement("img");
  pictureItem.src = imageUrl;
  pictureItem.alt = imageAlt;
  articleItem.append(pictureItem);

  /*création du titre de l'article*/

  let titleItem = document.createElement("h3");
  titleItem.textContent = name;
  titleItem.classList.add("productName");
  articleItem.append(titleItem);

  /*création de la description de l'article*/

  let descriptionItem = document.createElement("p");
  descriptionItem.textContent = description;
  descriptionItem.classList.add("productDescription");
  articleItem.append(descriptionItem);
}

ajax(url);