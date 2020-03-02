var button = document.querySelector(".feedback-button");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

var isStorageSupport = true;
var savedUsername = "";
var savedEmail = "";
  
try {
    savedUsername = localStorage.getItem("username");
    savedEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (savedUsername) {
        username.value = savedUsername;
    }
    if (savedEmail) {
        username.value = savedEmail;
    }

    if (savedUsername && savedEmail) {
        message.focus();
    } else {
        username.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
    if (!username.value || !email.value || !message.value) {
        evt.preventDefault();
        console.log("Введите, пожалуйста, ваше имя, email и текст сообщения");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("username", username.value);
            localStorage.setItem("email", email.value);
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