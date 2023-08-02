
//alert("Loe raamatut!!!");

const GENERATEHTML = (pageName) => {
    return ` <div content-align="center">Instead of sitting and watching ${pageName}, you could take a look at this excerpt from your latest book:

    
    <p>hi lol</p>
    
    
    
    `;
};

switch (window.location.hostname) {
    case "www.google.com":
        document.body.innerHTML = GENERATEHTML("Google");
        break;
}