// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const card = document.querySelector(".cards-container");

function NewArticle(article) {
  // create elements it!
  const newCard = document.createElement("div"),
    headline = document.createElement("div"),
    authorDiv = document.createElement("div"),
    imgDiv = document.createElement("div"),
    img = document.createElement("img"),
    name = document.createElement("span");

  // add classes it!
  newCard.classList.add("card");
  headline.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  // text content it!
  name.textContent = `${article.authorName}`;
  headline.textContent = `${article.headline}`;
  img.src = `${article.authorPhoto}`;

  // append it!

  newCard.append(headline);
  newCard.append(authorDiv);
  newCard.append(name);
  authorDiv.append(imgDiv);
  imgDiv.append(img);

  //   now return it

  return newCard;
}

// axios & for each
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const types = Object.values(response.data.articles);

    types.forEach(articleType => {
      articleType.forEach(article => {
        const newArticle = NewArticle(article);
        card.append(newArticle);
      });
    });
  });
