var links = [
    {
        parentText: "Home Page",
        show: true,
        link: "../main-template/main_page.html",
        subs: [
        ]
    },
    {
        parentText: "Organizations",
        show: false,
        link: "",
        subs: [
            {
                childText: "Delete Organization",
                link: "../company-templates/delete_company_page.html"
            },
            {
                childText: "Register Organization",
                link: "../company-templates/register_company_page.html"

            },
            {
                childText: "Registered Organizations",
                link: "../company-templates/get_organizations_page.html"
            }
        ]
    },
    {
        parentText: "Carbon Market",
        show: false,
        link: "",
        subs: [
          {
              childText: "Create Certificates",
              link: "../carbon-market-templates/create_certificates.html"
          },
          {
              childText: "Requested Certificates",
              link: "../carbon-market-templates/requested_certificates.html"
          },
          {
              childText: "Owned Certificates",
              link: "../carbon-market-templates/owned_certificates.html"
          },
          {
              childText: "Buy X-Carbon Certificates",
              link: "../carbon-market-templates/buy_certificates.html"
          }
        ]
    },
    {
        parentText: "Carbon Market",
        show: false,
        link: "",
        subs: [
          {
              childText: "Market Options",
              link: "../carbon-market-templates/carbon_market_options.html"
          },
          {
              childText: "Certificate Requests",
              link: "#"
          }
        ]
    },
    {
        parentText: "Information",
        show: false,
        link: "../information-template/information.html",
        subs: [
        ]
    },
    {
        parentText: "Exit",
        show: true,
        link: "../login-template/login_page.html",
        subs: [
        ]
    }
];

if(sessionStorage.getItem("isItAdmin") == "true"){ // localStorage stores the data in string format
  links[1].show = true; // organizations
  links[3].show = true;// carbon market options
}
else if(sessionStorage.getItem("isItAdmin") == "false"){
  links[2].show = true; // carbon market
  links[4].show = true; // information
}

let listUl = document.getElementById("navigation_bar_ul");
links.forEach(element => {
  let subContent = "";
  if(element.show == true){
    if(element.subs.length != 0){
      subContent = "<ul>";
      element.subs.forEach(element => {
          subContent += `<li class='btn-block'><a class='btn btn-warning btn-block' href="${element.link}">${element.childText}</a></li>`;
      });
      subContent += "</ul>";
    }
    if(element.link != ""){
      listUl.innerHTML += `<li class='btn-block text-white'><a class="btn btn-success btn-block text-left" href="${element.link}">${element.parentText} ${subContent}</li>`;
    }
    else{
      listUl.innerHTML += `<li class="btn btn-success btn-block text-left">${element.parentText} ${subContent}</li>`;
    }

  }
});
