function renderStartPage() {
    let userName;
    if (!localStorage.getItem("name_hw15")) {
        userName = "Stranger";
        document.body.insertAdjacentHTML("afterbegin", newUserAutorize());
    } else {
        userName = localStorage.getItem("name_hw15");
        document.body.insertAdjacentHTML("afterbegin", oldUserAutorize());
    }
    return document.getElementById("h2").innerHTML = "Hello, " + userName;
};

function saveNewUserToLocalStorage() {
    if (document.getElementById("password").value !== document.getElementById("password2").value) {
        document.getElementById("confirm").innerHTML = "Passwords are not the same";
        document.getElementById("password2").value = "";
    } else if (
        document.getElementById("name").validity.valid &&
        document.getElementById("email").validity.valid &&
        document.getElementById("password").validity.valid &&
        document.getElementById("password2").validity.valid
    ) {
        localStorage.setItem("name_hw15", document.getElementById("name").value);
        localStorage.setItem("email_hw15", document.getElementById("email").value);
        localStorage.setItem("password_hw15", document.getElementById("password").value);
        localStorage.setItem("date_hw15", new Date());
        //document.getElementById("form").submit();
        window.location.replace("hidden_content.html");
    }
};

function openContentForRegUser() {
    if (document.getElementById("password").value !== localStorage.getItem("password_hw15")) {
        document.getElementById("registeredUserPass").innerHTML = "Password incorrect";
        document.getElementById("password").value = "";
    } else {
        window.location.replace("hidden_content.html");
    }
};
