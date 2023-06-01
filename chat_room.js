var username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "<u>Welcome " + username + "!</u>";

function logout(){
    localStorage.removeItem("user_name");
    window.location = "index.html";
}