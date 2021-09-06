function registerNewCompany(){
  // geeksforgeeks.org/how-to-send-a-json-object-to-a-server-using-javascript/
  // https://stackoverflow.com/questions/24468459/sending-a-json-to-server-and-retrieving-a-json-in-return-without-jquery

  let name = document.querySelector("#name").value;
  let taxNumber = document.querySelector("#tax_number").value;
  let mail = document.querySelector("#mail").value;
  let password = document.querySelector("#password").value;

  if(name == ""){
    alert("Organization Name is Missing.");
  }
  else if(taxNumber == ""){
    alert("Organization Tax Number is Missing.");
  }
  else if(mail == ""){
    alert("Organization E-Mail is Missing.");
  }
  else if(!mail.includes("@")){
    alert("Enter a valid email address.")
  }
  else if(password == ""){
    alert("Organization Password is Missing.");
  }
  else if(!(document.getElementById("producer").checked || document.getElementById("trader").checked)){
    alert("Select Organization Type.")
  }
  else{
    let registerType = document.querySelector("input[name=register_type]:checked").value;
    console.log(name,taxNumber,mail,password,registerType);
    // Create new xhr object
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/company/register";

    xhr.onreadystatechange = function () {
      console.log(xhr.readyState, xhr.status)

      if (xhr.readyState == 4 && xhr.status == 200) {
        
        alert(xhr.responseText);
        if(xhr.responseText == "Tax number is already exists in database. Try another."){
          document.querySelector("#tax_number").style.color = "red";
        }
        else if(xhr.responseText == "Company could not be registered."){

        }
        else if(xhr.responseText == "Company is Registered."){
          document.querySelector("#tax_number").style.color = "black";
          document.getElementById("register_company_form").reset();
          console.clear();
        }

      }

    };

    // open the connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8");

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

  }

}
