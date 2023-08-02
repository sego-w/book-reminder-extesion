
//alert("Loe raamatut!!!");

//This code requires the use of the PDF.js library

//Include the PDF.js library
const PDFJS = require('pdfjs-dist');

//Create a PDF Document object
let pdfDoc = null;

//Create a loading task
let loadingTask = PDFJS.getDocument('sample.pdf');

//Execute the loading task
loadingTask.promise.then(function(pdf) {
pdfDoc = pdf;
//Get the first page of the PDF
return pdfDoc.getPage(1);
}).then(function(page) {
//Read the text from the page
return page.getTextContent();
}).then(function(textContent) {
//Print out the text
document.getElementById("texts").innerText = textContent;

});





