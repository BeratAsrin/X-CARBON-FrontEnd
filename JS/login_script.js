// dataUrl is used to determine the source of database.
var isLocal = true;
var dataUrl;
var ipOfDevice = "111.111.1.1";
if(isLocal == true){
  dataUrl = `${ipOfDevice}:8080`; // while not working on local
  // default port of tomcat is 8080.
}
else{
  dataUrl = "localhost:8080"; // localhost
}

let isItAdmin;
function whoIsLogining(check){
  isItAdmin = Boolean(check == "true");
  document.getElementById("login_selection_div").style.display = "none";
  document.getElementById("login_information_getter_div").style.display = "block";
}

function cancelButton(){
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("login_selection_div").style.display = "flex";
  document.getElementById("login_information_getter_div").style.display = "none";
}

function postLoginInformation(){

  if(
    document.getElementById("username").value != ""
    &&
    document.getElementById("password").value != ""
  ){

    sessionStorage.setItem("isItAdmin",isItAdmin);
    window.location.href = "../company-templates/register_company_page.html";

//    username = document.getElementById("username").value;
  //  password = document.getElementById("password").value;

    /*let xhr = new XMLHttpRequest();
    let url = `http://${dataUrl}/`;

    if(isItAdmin){
      url += "login/admin"
    }
    else{
      url+= "login/organization"
    }

    xhr.onreadystatechange = function () {
      console.log(xhr.readyState, xhr.status)

      if (xhr.readyState == 4 && xhr.status == 200) {
        //var responseOfAPI = JSON.parse(xhr.responseText); design later
        if(true && isItAdmin){ // information is correct and admin
          adjustNavigationBar();
        }
      }

    };

    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8");

    let data = JSON.stringify({
      "username": username,
      "password": password
    });

    xhr.send(data);*/
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
  else{
    alert("Username or password field is empty.");
  }


}
