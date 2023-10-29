function auth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password"). value;
    if (email== "admin@gmail.com" && password=="admin123") {
        window.location.assign("http://127.0.0.1:5500/front.html");
        alert("Korek!");
    } 
    else {
        alert("Mali!");
        return;
    }

    
}
