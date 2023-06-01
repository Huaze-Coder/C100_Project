var username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "<u>Welcome " + username + "!</u>";

function logout(){
    localStorage.removeItem("user_name");
    window.location = "index.html";
}

function addroom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }
