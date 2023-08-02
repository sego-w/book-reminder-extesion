
//alert("Loe raamatut!!!");

const GENERATEHTML = (pageName) => {
    return ` <img src="images/juku_logo.png">
    <h1 style="font-size:20px" style="font-family:Lora"><center>Instead of sitting and looking at ${pageName}, you could take a look at this excerpt from your latest book:</center><h1>
    <break>
    <p style="font-size:16px:><center>Sõua, laulik, lausa suuga,
    Sõua laululaevakesta,
    Pajataja paadikesta —
    Sõua neid senna kaldale,
    Kuhu kotkad kuldasõnu,
    Kaarnad hõbekuulutusi,
    Luiked vaskseid lunastusi
    Vanast ajast varistanud,
    Muiste päivist pillutanud.
    </center><p>
    
    <p>Test dogshit text print screen official</p>
    
    
    
    `;
};

switch (window.location.hostname) {
    case "www.google.com":
        document.body.innerHTML = GENERATEHTML("Google");
        break;
    case "www.youtube.com":
        document.body.innerHTML = GENERATEHTML("YouTube");
        break;
    case "www.twitter.com":
        document.body.innerHTML = GENERATEHTML("Twitter");
        break;
    case "www.tiktok.com":
        document.body.innerHTML = GENERATEHTML("TikTok");
        break;

}