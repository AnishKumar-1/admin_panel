document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();  // prevent the form from submitting

    var username = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    var errorEmailMessage = document.getElementById("errorEmailMessage");
    var errorPasswordMessage = document.getElementById("errorPasswordMessage");
    if (username === "" && password === "") {
        errorEmailMessage.textContent = "Please enter Email";
        errorPasswordMessage.textContent = "Please enter Password";
    }
    else {
        errorEmailMessage.textContent = "";
        errorPasswordMessage.textContent = "";
    }

    if (username === "") {
        errorEmailMessage.textContent = "Please enter Email";
    }
    if (password === "") {
        errorPasswordMessage.textContent = "Please enter Password";
    }

    if (username && password) {

        fetch('http://localhost:3000/api/adlogin', {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            response.json().then((data) => {

                if (data.message === "login success") {
                    alert("login success")
                    sessionStorage.setItem("username", username);
                    sessionStorage.setItem("password", password);
                    errorEmailMessage.textContent = "";
                    errorPasswordMessage.textContent = "";
                    window.location.href = "index.html";

                }
                else if (data.message === "incorrect username") {
                    errorEmailMessage.textContent = "incorrect username";
                }
                else {
                    errorPasswordMessage.textContent = "incorrect password";
                }
            })
        }).then(err => {
            console.log(err);
        })






    }
});

