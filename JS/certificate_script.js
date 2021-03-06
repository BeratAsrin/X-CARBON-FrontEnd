let dataUrl = sessionStorage.getItem("dataUrl");

var pageNumber = 0;
var certificates = [];

function getRequestedCertificates(){

  let requestedCertificatesTable = document.getElementById("requested_certificates_table_body");
  requestedCertificatesTable.innerHTML = "";

  let url = `http://${dataUrl}/certificate/get/requests/taxnumber=${Number(sessionStorage.getItem("username"))}`;
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    console.log(xhr.readyState, xhr.status)

    if (xhr.readyState == 4 && xhr.status == 200) {
        certificates = JSON.parse(xhr.responseText);
        certificates.slice(pageNumber*10,pageNumber*10+10).forEach(element => {
          let lastRow = requestedCertificatesTable.insertRow(-1);
          let processId = lastRow.insertCell(0);
          processId.innerHTML = element.id;
          let numberOfRequestedCertificates = lastRow.insertCell(1);
          numberOfRequestedCertificates.innerHTML = element.numberOfCertificates;
          let statusLabel = lastRow.insertCell(2);
          if(element.status = "Waiting"){
            statusLabel.innerHTML = `<label class="btn btn-block btn-warning">${element.status}</label>`
          }
          else if(element.status = "Approved"){
            statusLabel.innerHTML = `<label class="btn btn-block btn-success">${element.status}</label>`
          }
          else if(element.status = "Denied"){
            statusLabel.innerHTML = `<label class="btn btn-block btn-danger">${element.status}</label>`
          }
        });
    }

  }

  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8");
  xhr.send();

}

function getOwnedCertificates(){

  let certificatesTable = document.getElementById("certificates_table_body");
  certificatesTable.innerHTML = "";

  let url = `http://${dataUrl}/certificate/get/taxnumber=${Number(sessionStorage.getItem("username"))}`;
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    console.log(xhr.readyState, xhr.status)

    if (xhr.readyState == 4 && xhr.status == 200) {
        certificates = JSON.parse(xhr.responseText);
        certificates.slice(pageNumber*10,pageNumber*10+10).forEach(element => {
          let lastRow = certificatesTable.insertRow(-1);
          let tupleStartId = lastRow.insertCell(0);
          tupleStartId.innerHTML = element.tupleStartId;
          let tupleFinishId = lastRow.insertCell(1);
          tupleFinishId.innerHTML = element.tupleFinishId;
          let numberOfCertificates = lastRow.insertCell(2);
          numberOfCertificates.innerHTML = element.numberOfCertificates;
          let registerMonth = lastRow.insertCell(3);
          registerMonth.innerHTML = element.registerMonth;
          let registerYear = lastRow.insertCell(4);
          registerYear.innerHTML = element.registerYear;
          let expirationMonth = lastRow.insertCell(5);
          expirationMonth.innerHTML = element.expirationMonth;
          let expirationYear = lastRow.insertCell(6);
          expirationYear.innerHTML = element.expirationYear;
          let sellButton = lastRow.insertCell(7);
          sellButton.innerHTML = '<button type="button" class="btn btn-success btn-block">Sell</button>';
          // satma i??lemi daha sonra tamamlanacak
        });
    }

  }

  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8");
  xhr.send();

}


function nextPage(){
 if(certificates.length == 0){
  alert("No data.")
 }
 else if(!(pageNumber*10+10 > certificates.length)){
   pageNumber++;
   getOwnedCertificates();
 }
 else{
   alert("You are viewing last page.")
 }
}

function previousPage(){
  if(certificates.length == 0){
    alert("No data.")
   }
  else if(pageNumber != 0){
    pageNumber--;
    getOwnedCertificates();
  }
  else{
    alert("You are viewing first page.")
  }
}

// only admin will be able to access this function
function createCertificates(){

}

function sendCreateRequestToAdmin(){

  let numberInput = document.getElementById("numberOfCertificates").value;
  if(numberInput == ""){
    alert("Enter a number.")
  }
  else{
    let url = `http://${dataUrl}/certificate/request`;
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      console.log(xhr.readyState, xhr.status)

      if (xhr.readyState == 4 && xhr.status == 200) {
          if(JSON.parse(xhr.response)){
            document.getElementById("numberOfCertificates").value = "";
            alert("Certificate request is sent to the Admin.")
            window.location.replace("../carbon-market-templates/requested_certificates.html");
          }
          else{
            alert("An error is occurred.")
          }
      }

    }

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json", "charset=UTF-8");
    xhr.send(JSON.stringify({
      "ownerTaxNumber": Number(sessionStorage.getItem("username")),
      "numberOfCertificates": Number(numberInput)
      }
    ));
  }

}
