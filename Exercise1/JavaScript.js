function validate() {

    var pass = document.getElementById("password");
    var vpass = document.getElementById("vpassword");
    if (pass.value.length < 8) {
    alert("The password must be at least 8 characters long.");
    }

    if(pass.value != vpass.value)
    {
        alert("The passwords do not match.");
    }
}
