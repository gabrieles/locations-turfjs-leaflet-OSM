// ******************************************************************************************************
// Function to display the HTML as a webApp
// ******************************************************************************************************
function doGet(e) {
  
  var favicon_url = 'https://res.cloudinary.com/gabrieles/image/upload/v1536163902/quill.png';
  var template = HtmlService.createTemplateFromFile('index');
  var htmlOutput = template.evaluate()
                   .setSandboxMode(HtmlService.SandboxMode.IFRAME)
                   .setTitle('Locations')
                   .addMetaTag('viewport', 'width=device-width, initial-scale=1')
                   .setFaviconUrl(favicon_url);

  return htmlOutput;
};



// ******************************************************************************************************
// Function to print out the content of an HTML file into another (used to load the CSS and JS)
// ******************************************************************************************************
function getContent(filename) {
  var pageContent = HtmlService.createTemplateFromFile(filename).getRawContent();
  return pageContent;
}


