links = [
    {
        parentText: "Organizations",
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
    }
]

let listUl = document.getElementById("navigation_bar_ul");

links.forEach(element => {
    let subContent = "<ul>";
    element.subs.forEach(element => {
        subContent += `<li><a href="${element.link}">${element.childText}</a></li>`; 
    });
    subContent += "</ul>";

    listUl.innerHTML += `<li>${element.parentText} ${subContent}</li>`;
});

