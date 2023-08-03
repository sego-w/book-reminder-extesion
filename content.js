
//alert("Loe raamatut!!!");

const GENERATEHTML = (pageName) => {
    return `
    <style>
    div {
        font-size:18px;
        max-width:500px;
        margin: 0 auto !important; 
	    float: none !important; 
    }
    h2 {
        font-size:16px;
        float: right;
        margin-right: 300px;
        font-style: italic;
    }
    a {
        font-size:16px;
        float: right;
        margin-right: 100px;
        font-style: italic;
    }
    </style>

    <br>
    <img src="juku_logo.png">
    <br>
    <br>
    <h1 style="font-size:25px" style="font-family:Lora"><center>Instead of sitting and looking at ${pageName}, you could take a look at this excerpt from your latest book:</center><h1>
    <br>
    <div><center>
    Sõua, laulik, lausa suuga,
    Sõua laululaevakesta,
    Pajataja paadikesta —
    Sõua neid senna kaldale,
    Kuhu kotkad kuldasõnu,
    Kaarnad hõbekuulutusi,
    Luiked vaskseid lunastusi
    Vanast ajast varistanud,
    Muiste päivist pillutanud.
    10Teadanege, linnud targad,
    Vilistage vete laened,
    Avaldage, tuuled, armsad:
    Kus see Kalevide kätki,
    Kangemeeste kodupaika,
    Vikerlaste varjuvalda?
    Laula, laulik, miks ei laula,
    Miks ei, kulla, kuulutele!
     Mis ma kukun, kurva lindu,
    Mis ma laulan, närtsind nokka?
    20Noorus närtsinud nõmmessa,
    Kolletanud kanarpikku,
    Leinakase lehtedela.
     Enne, kui õnnes hõiskasin,
    Pääva paistel a'asin pilli,
    Hõbedasi laululõimeid
    Kuldakangaksa kudusin,
    Nägin mõnda naljakaida
    Salaliku sündimisi,
    Imeliku ilmutusi.
    </center></div>
    <br>
    <h2>F. R. Kreutzwald "Kalevipoeg"<br>Page 1</h2>
    <br><br>
    <a href=https://et.wikisource.org/wiki/Kalevipoeg/I>Keep Reading!</a>
    
    
    
    
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