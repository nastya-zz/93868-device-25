var contact = document.querySelector(".contact-us");
var popup = document.querySelector(".modal-contact-us");
var close = document.querySelector(".modal-close");

var form = popup.querySelector(".contact-us");
var userName = popup.querySelector("[name=user-name]");
var eMail = popup.querySelector("[name=user-email]");
// var storage = localStorage.getItem("name");

var isStoragSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contact.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  userName.focus();
  if (storage) {
    userName.value = storage;
  }
});

close.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !eMail.value){
    evt.preventDefault();
    console.log("Нужно ввести имя и почту");
  } else {
    if (isStorageSupport){
      localStorage.setItem("name", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});



var route = document.querySelector(".map");
var map = document.querySelector(".modal-map");
var closeMap = document.querySelector(".close-map");

route.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show");
    }
  }
});
