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


function searchToDelete(){
  document.getElementById("delete_form_div").style.display = "none";
  document.getElementById("delete_information_div").style.display = "flex";
}

function organizationInformationCancel(){
  document.getElementById("delete_information_div").style.display = "none";
  document.getElementById("delete_form_div").style.display = "flex";
}

function organizationInformationDelete(){
  
}

/*
var asideItems = [
  {
    text: "anasayfa",
    value: "index.html",
    onclick: "",
  },
  {
    text: "hakkımızda",
    value: "delete_company_page.html",
    onclick: "",
    subs: [
      {
        text: "hak 1",
        value: "javascript:void(0)",
        onclick: "organizationInformationCancel()",
      },
      {
        text: "hak 2",
        value: "javascript:void(0)",
        onclick: "searchToDelete()",
      },
    ]
  },
  {
    text: "kurumsal",
    value: "javascript:void(0)",
    onclick: "searchToDelete()",
    subs: [],
  },
  {
    text: "galeri",
    value: "javascript:void(0)",
    onclick: "searchToDelete()",
  },
]



var asideUl = document.getElementById('sideNav');

if(asideUl){
  asideItems.map(function(v){

    if(v.subs){
      var subs = '';
      v.subs.map(function(s){

        subs += '<li><a href='+s.value+' onclick='+s.onclick+'>'+s.text+'</a></li>'
      })

      if(window.location.pathname.split("/").pop() == v.value){
        asideUl.innerHTML += '<li><a href='+v.value+' onclick='+v.onclick+'>'+v.text+'</a><ul>'+subs+'</ul></li>';
      }
      else {
        asideUl.innerHTML += '<li><a href='+v.value+' onclick='+v.onclick+'>'+v.text+'</a></li>';

      }
      

    }
    else {
      asideUl.innerHTML += '<li><a href='+v.value+' onclick='+v.onclick+'>'+v.text+'</a></li>';

    }
  })
}


function delay(ms){
  return new Promise(function(resolve,reject){
    setTimeout(resolve, ms)
  })
}


var test = async function(){
  console.log('direk girdim');
  await delay(5000);
  console.log('1 sn sonra geldim')
  await delay(5000);
  console.log('1 sn sonra geldim')

} 
*/