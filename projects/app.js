//Apps

const appSource   = document.getElementById('app-template').innerHTML;
const appTemplate = Handlebars.compile(appSource);
const appContext = { appName: ['Quiz', 'StopWatch', 'Calculator', 'ToDo',
'ColorGuess', 'Weather', 'Timeline'], };
const appHtml    = appTemplate(appContext);
const displayApp = document.getElementById('app');
displayApp.innerHTML = appHtml;

//Certificates

const source   = document.getElementById('certificate-template').innerHTML;
const template = Handlebars.compile(source);
const context = { name: ['Vue', 'CreativeFrontend', 'Bootstrap', 'PHP', 'Git', 'Js', 'debugJs',
'Nodejs', 'CSS', 'CLI', 'Async'], };
const html    = template(context);
const displayCertificate = document.getElementById('certificate');
displayCertificate.innerHTML = html;
