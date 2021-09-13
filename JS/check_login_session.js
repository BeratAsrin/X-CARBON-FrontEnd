function checkIfInformationIsFilled(username, password){
  if(
    username != null
    &&
    password != null
  ){
    return true;
  }
  else{
    return false;
  }
}

function checkIfDataExistsInDatabase(username, password, adminOrNot){
  let dataUrl = sessionStorage.getItem("dataUrl");
  let xhr = new XMLHttpRequest();
  let url = `http://${dataUrl}/`;
  if(adminOrNot){
    url += "login/admin"
  }
  else{
    url+= "login/organization"
  }

  xhr.onreadystatechange = function () {
    console.log(xhr.readyState, xhr.status)

    if (xhr.readyState == 4 && xhr.status == 200) {
      if(!JSON.parse(xhr.response)){
        window.location.href = "../login-template/login_page.html";
      }
    }

  };

  xhr.open("POST", url, false);

  xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8");

  let data = JSON.stringify({
    "username": username,
    "password": password
  });

  xhr.send(data);

}

function checkAdminLogin(){
  let username = sessionStorage.getItem("username");
  let password = sessionStorage.getItem("password");
  if(
    checkIfInformationIsFilled(username, password)
    &&
    JSON.parse(sessionStorage.getItem("isItAdmin"))
  ){
    checkIfDataExistsInDatabase(username, password, true);
  }
  else{
    window.location.href = "../login-template/login_page.html";
  }
}

function checkOrganizationLogin(){
  let username = sessionStorage.getItem("username");
  let password = sessionStorage.getItem("password");
  if(
    checkIfInformationIsFilled(username, password)
    &&
    sessionStorage.getItem("isItAdmin") == "false"
  ){
    checkIfDataExistsInDatabase(username, password, false);
  }
  else{
    window.location.href = "../login-template/login_page.html";
  }
}

function checkAnyLogin(){
  let username = sessionStorage.getItem("username");
  let password = sessionStorage.getItem("password");
  if(
    checkIfInformationIsFilled(username, password)
  ){
    if(sessionStorage.getItem("isItAdmin") == "true"){
      checkAdminLogin();
    }
    else{
      checkOrganizationLogin();
    }
  }
  else{
    window.location.href = "../login-template/login_page.html";
  }
}
