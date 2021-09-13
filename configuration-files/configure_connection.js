function createConnectionUrl(){
  // clear the data remaining from previous session
  sessionStorage.clear();
  // dataUrl is used to determine the source of database.
  var isLocal = true;
  var dataUrl;
  var ipOfDevice = "111.111.1.1";
  if(isLocal == false){
    dataUrl = `${ipOfDevice}:8080`; // while not working on local
    // default port of tomcat is 8080.
  }
  else{
    dataUrl = "localhost:8080"; // localhost
  }
  sessionStorage.setItem("dataUrl",dataUrl);
}
