var link = document.querySelector(".product__order-button");
var popup = document.querySelector(".modal--bying");
var close = document.querySelector(".modal__white-background");
var focusButton = document.querySelector(".modal__button");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  focusButton.focus();

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");


});


window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
