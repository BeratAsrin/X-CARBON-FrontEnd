function postJSON(){
  // geeksforgeeks.org/how-to-send-a-json-object-to-a-server-using-javascript/
  // https://stackoverflow.com/questions/24468459/sending-a-json-to-server-and-retrieving-a-json-in-return-without-jquery
  let name = document.querySelector("#name").value;
  let taxNumber = document.querySelector("#tax_number").value;
  let mail = document.querySelector("#mail").value;
  let password = document.querySelector("#password").value;
  let registerType = document.querySelector("input[name=register_type]:checked").value;
  console.log(name,taxNumber,mail,password,registerType);

  // Create new xhr object
  let xhr = new XMLHttpRequest();
  let url = "http://localhost:8080/company/register";

  // open the connection
  xhr.open("POST", url, true);

  // Set the request header i.e. which type of content you are sending
  xhr.setRequestHeader("Content-Type", "application/json");

  /*
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

        // Print received data from server
        result.innerHTML = this.responseText;

    }
  };
  */
 
  // Converting JSON data to string
  let data = JSON.stringify({ 
    "organizationName": name,
    "taxNumber": taxNumber,
    "mail": mail,
    "registerType": registerType,
    "password": password
  });

  // Sending data with the request
  xhr.send(data);

  alert("Company Registered");
}
