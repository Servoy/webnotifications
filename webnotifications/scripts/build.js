var AdmZip = require('adm-zip');

// creating archives
var zip = new AdmZip();

zip.addLocalFolder("./webnotifications/", "/webnotifications/");
zip.addLocalFolder("./META-INF/", "/META-INF/");
zip.addLocalFolder("./dist/servoy/webnotifications/", "/dist/servoy/webnotifications/");

zip.writeZip("webnotifications.zip")