var buyButtons = document.querySelectorAll(".buy");

var popupCart = document.querySelector(".product-added");
var closeCart = popupCart.querySelector(".modal-close");

var cart = document.querySelector(".cart");
var cartCounter = cart.querySelector("#cart-counter");

for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cartCounter.textContent++;
        cart.classList.add("cart--active");
        popupCart.classList.add("modal-show");
    });
}

closeCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupCart.classList.contains("modal-show")) {
            popupCart.classList.remove("modal-show");
        }
    }
});

var map = document.querySelector(".contacts-map");

var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

map.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupMap.classList.contains("modal-show")) {
            popupMap.classList.remove("modal-show");
        }
    }
});


var button = document.querySelector(".feedback-button");

var popup = document.querySelector(".modal-feedback");
try {
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
        popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function(evt) {
        if (!username.value || !email.value || !message.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
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
                popup.classList.remove("modal-error");
            }
        }
    });
} catch (err) {
    console.warn(err);
}