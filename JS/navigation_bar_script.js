var links = [
    {
        parentText: "Organizations",
        show: true,
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
    }
];

if(sessionStorage.getItem("isItAdmin") == "false"){ // localStorage stores the data in string format
  links[0].show = false;
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
    listUl.innerHTML += `<li>${element.parentText} ${subContent}</li>`;
  }
});

//sessionStorage.removeItem("isItAdmin"); sistemden çıkış yaparken sil.
