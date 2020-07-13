var form = document.getElementById("form");

function handleForm(event) {
  event.preventDefault();
  makeCard();
  clearForm();
}

function clearForm() {
  var inputs = document.getElementsByTagName("input");
  document.getElementById("description").value = "";
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function makeCard() {
  let outerDiv = document.createElement("div");
  outerDiv.classList.add("card");
  outerDiv.style.width = "18rem";

  let image = document.createElement("img");
  image.setAttribute("class", "card-img-top");
  image.setAttribute(
    "src",
    "https://www.gannett-cdn.com/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp"
  );
  if (document.getElementById("photo").value.length > 0) {
    image.setAttribute("src", document.getElementById("photo").value);
  }

  outerDiv.appendChild(image);

  let innerDiv = document.createElement("div");
  innerDiv.classList.add("card-body");

  outerDiv.appendChild(innerDiv);

  let hTag = document.createElement("h5");
  hTag.classList.add("card-title");
  hTag.innerHTML = document.getElementById("dName").value;
  innerDiv.appendChild(hTag);

  let loc = document.createElement("h6");
  loc.setAttribute("class", "card-subtitle mb-2 text-muted");
  loc.innerHTML = document.getElementById("location").value;
  innerDiv.appendChild(loc);

  let pTag = document.createElement("p");
  pTag.setAttribute("class", "card-text");
  pTag.innerHTML = document.getElementById("description").value;
  innerDiv.appendChild(pTag);

  let buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "bdiv");
  innerDiv.appendChild(buttonDiv);

  let editButton = document.createElement("a");
  editButton.setAttribute("href", "#");
  editButton.setAttribute("class", "btn btn-primary");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", edit);
  buttonDiv.appendChild(editButton);

  let deleteButton = document.createElement("a");
  deleteButton.setAttribute("href", "#");
  deleteButton.setAttribute("class", "btn btn-primary");
  deleteButton.innerHTML = "Remove";
  deleteButton.addEventListener("click", remove);
  buttonDiv.appendChild(deleteButton);

  document.querySelector("#cards").appendChild(outerDiv);
}

function edit(event) {
  let cardDiv = event.target.parentElement.parentElement;
  let dest = cardDiv.children[0];
  let loc = cardDiv.children[1];
  let card = cardDiv.parentElement;
  let url = card.children[0];

  let newDest = prompt("Enter new name");
  let newLoc = prompt("Enter new location");
  let newUrl = prompt("Enter new photo url");

  if (newDest.length > 0) {
    dest.innerText = newDest;
  }

  if (newLoc.length > 0) {
    loc.innerText = newLoc;
  }

  if (newUrl.length > 0) {
    url.setAttribute("src", newUrl);
  }
}

function remove(event) {
  var card = event.target.parentElement.parentElement.parentElement;
  card.remove();
}

form.addEventListener("submit", handleForm);
