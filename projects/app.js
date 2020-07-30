const source   = document.getElementById('text-template').innerHTML;
const template = Handlebars.compile(source);
const context = { name: ['Vue', 'CreativeFrontend', 'Bootstrap', 'PHP', 'Git', 'Js', 'debugJs',
'Nodejs', 'CSS', 'CLI', 'Async'], };
const html    = template(context);
const displayCertificate = document.getElementById('certificate');
displayCertificate.innerHTML = html;
