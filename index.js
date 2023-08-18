document.addEventListener("DOMContentLoaded", function () {
  const bookImgUrl = document.getElementById("url");
  const status = document.querySelector(".status");
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pageInput = document.getElementById("page");
  const btnNewBook = document.querySelector(".newBook");
  const form = document.querySelector(".comment-form");
  const overlay = document.getElementById("overlay");
  const overlayResult = document.getElementById("overlayResult");
  const closePopupButton = document.getElementById("popup-close");
  const resultClosePopupButton = document.getElementById("popup-close2");
  const btnFormSubmit = document.getElementById("formSubmit");
  const contentDiv = document.querySelector(".content");
  const myLibrary = [];

  //card elemanları
  let cardTitle = document.getElementById("cardTitle");
  let cardAuthor = document.getElementById("cardAuthor");
  let cardImg = document.getElementById("cardImg");
  let cardPage = document.getElementById("cardPage");

  // card div
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  // card left div
  const cardLeftDiv = document.createElement("div");
  cardLeftDiv.classList.add("cardLeft");

  // img
  cardImg = document.createElement("img");
  cardImg.classList.add("bookImg");
  cardImg.id = "cardImg";
  cardImg.src = "./img/cd.png";
  cardImg.alt = "";
  cardImg.srcset = "";
  cardLeftDiv.appendChild(cardImg);

  // status button
  const statusButton = document.createElement("button");
  statusButton.textContent = "okundu";
  const statusDiv = document.createElement("div");
  statusDiv.classList.add("status");
  statusDiv.appendChild(statusButton);
  cardLeftDiv.appendChild(statusDiv);

  cardDiv.appendChild(cardLeftDiv);

  // card right div
  const cardRightDiv = document.createElement("div");
  cardRightDiv.classList.add("cardRigth");

  const cardInfoDiv1 = document.createElement("div");
  cardInfoDiv1.classList.add("cardInfo");
  const cardIcon1 = document.createElement("img");
  cardIcon1.classList.add("cardIcon");
  cardIcon1.src = "./img/book_icon.png";
  cardIcon1.alt = "";
  cardIcon1.srcset = "";
  cardTitle = document.createElement("h4");
  cardTitle.classList.add("title");
  cardTitle.id = "cardTitle";
  cardTitle.textContent = "Çizginin Dışındakiler";
  cardInfoDiv1.appendChild(cardIcon1);
  cardInfoDiv1.appendChild(cardTitle);

  const cardInfoDiv2 = document.createElement("div");
  cardInfoDiv2.classList.add("cardInfo");
  const cardIcon2 = document.createElement("img");
  cardIcon2.classList.add("cardIcon");
  cardIcon2.src = "./img/poem.png";
  cardIcon2.alt = "";
  cardIcon2.srcset = "";
  cardAuthor = document.createElement("p");
  cardAuthor.classList.add("author");
  cardAuthor.id = "cardAuthor";
  cardAuthor.textContent = "Malcolm Gladwell";
  cardInfoDiv2.appendChild(cardIcon2);
  cardInfoDiv2.appendChild(cardAuthor);

  const cardInfoDiv3 = document.createElement("div");
  cardInfoDiv3.classList.add("cardInfo");
  const cardIcon3 = document.createElement("img");
  cardIcon3.classList.add("cardIcon");
  cardIcon3.src = "./img/document.png";
  cardIcon3.alt = "";
  cardIcon3.srcset = "";
  cardPage = document.createElement("p");
  cardPage.classList.add("page");
  cardPage.id = "cardPage";
  cardPage.textContent = "280 Sayfa";
  cardInfoDiv3.appendChild(cardIcon3);
  cardInfoDiv3.appendChild(cardPage);

  cardRightDiv.appendChild(cardInfoDiv1);
  cardRightDiv.appendChild(cardInfoDiv2);
  cardRightDiv.appendChild(cardInfoDiv3);

  cardDiv.appendChild(cardRightDiv);

  contentDiv.appendChild(cardDiv);

  btnNewBook.addEventListener("click", () => {
    openForm();
  });

  //New Book Form
  function openForm() {
    overlay.style.display = "block";
  }

  //popup close button
  resultClosePopupButton.addEventListener("click", function () {
    overlay.style.display = "none";
    overlayResult.style.display = "none";
  });
  closePopupButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  btnFormSubmit.addEventListener("click", (e) => {
    const titleform = titleInput.value;
    const authorForm = authorInput.value;
    const pageForm = pageInput.value;
    const urlForm = bookImgUrl.value;

    const newBook = new Book(titleform, authorForm, pageForm, urlForm, status);
    myLibrary.push(newBook);
    e.preventDefault();
    console.log(myLibrary);

    overlay.style.display = "none";
    overlayResult.style.display = "block";

    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
    }

    // Her bir kitap için cardDiv
    myLibrary.forEach((book) => {
      const cardClone = cardDiv.cloneNode(true);

      const cardTitle = cardClone.querySelector(".title");
      const cardAuthor = cardClone.querySelector(".author");
      const cardPage = cardClone.querySelector(".page");
      const cardImg = cardClone.querySelector(".bookImg");

      cardTitle.textContent = book.title;
      cardAuthor.textContent = book.author;
      cardPage.textContent = book.page;
      cardImg.src = book.imageUrl;

      contentDiv.appendChild(cardClone);
    });
    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    bookImgUrl.value = "";
  });
});
class Book {
  constructor(title, author, page, imageUrl, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.imageUrl = imageUrl;
    this.status = status;
  }
}
