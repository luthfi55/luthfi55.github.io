$(document).ready(function () {
    $("#registerForm").submit(function (event) {
        event.preventDefault();
        
        const username = $("#username").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const data = {
            username: username,
            email: email,
            password: password
        };

        $.ajax({
            type: "POST",
            url: "https://realtime-chat-production-e31d.up.railway.app/users/v1/register",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                // Response berhasil, pindah ke halaman home.html dengan data sebagai parameter query
                window.location.href = "index.html";
            },
            error: function (error) {
                // Response gagal, tampilkan pesan error
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
    });
});