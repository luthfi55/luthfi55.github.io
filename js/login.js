function login() {
    const email = $("#email").val();
    const password = $("#password").val();
    const data = {
        email: email,
        password: password
    };

    $.ajax({
        type: "POST",
        url: "https://realtime-chat-production-e31d.up.railway.app/users/v1/login",
        data: JSON.stringify(data),
        contentType: "application/x-www-form-urlencoded",
        success: function (response) {
            const token = response.token;
            localStorage.setItem("authToken", token);
            // console.log(token);
            window.location.href = "home.html?data=" + encodeURIComponent(JSON.stringify(response.data));            
        },
        error: function (error) {
            console.error("Error:", error.responseJSON);
            const errorAlert = $("#errorAlert");
            if (error.responseJSON.error && error.responseJSON.message) {
                errorAlert.text("Error: " + error.responseJSON.error + " - " + error.responseJSON.message);
            } else {
                errorAlert.text("An error occurred.");
            }
            errorAlert.show();
        }
    });
}
