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
        show: true,
        link: "",
        subs: [
            {
                childText: "Register Organization",
                link: "../company-templates/register_company_page.html"

            },
            {
                childText: "Delete Organization",
                link: "../company-templates/delete_company_page.html"
            },
            {
                childText: "Registered Organizations",
                link: "../company-templates/get_organizations_page.html"
            }
        ]
    },
    {
        parentText: "Carbon Market",
        show: true,
        link: "",
        subs: [
            {
                childText: "Market Place",
                link: "#"
            },
            {
                childText: "Statics About Market",
                link: "#"
            },
            {
                childText: "Market Status and News",
                link: "#"
            }
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

if(sessionStorage.getItem("isItAdmin") == "false"){ // localStorage stores the data in string format
  links[1].show = false;
}

let listUl = document.getElementById("navigation_bar_ul");
links.forEach(element => {
  let subContent = "";
  if(element.show == true){
    if(element.subs.length != 0){
      subContent = "<ul>";
      element.subs.forEach(element => {
          subContent += `<li><a href="${element.link}">${element.childText}</a></li>`;
      });
      subContent += "</ul>";
    }
    if(element.link != ""){
      listUl.innerHTML += `<li><a href="${element.link}">${element.parentText} ${subContent}</li>`;
    }
    else{
      listUl.innerHTML += `<li>${element.parentText} ${subContent}</li>`;
    }

  }
});

//sessionStorage.removeItem("isItAdmin"); sistemden çıkış yaparken sil.
