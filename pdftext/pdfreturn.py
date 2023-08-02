import PyPDF2
  
# creating a pdf file object
pdfFileObj = open('pdftext/sample.pdf', 'rb')
  
# creating a pdf reader object
pdfReader = PyPDF2.PdfReader(pdfFileObj)
  

  
# creating a page object
pageObj = pdfReader.pages[1]
  
# extracting text from page
x = pageObj.extract_text()

  
# closing the pdf file object
pdfFileObj.close()