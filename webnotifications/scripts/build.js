var AdmZip = require('adm-zip');

// creating archives
var zip = new AdmZip();

zip.addLocalFolder("./webNotifications/", "/webNotifications/");
zip.addLocalFolder("./toastr/", "/toastr/");
zip.addLocalFolder("./META-INF/", "/META-INF/");
zip.addLocalFolder("./dist/servoy/webnotifications/", "/dist/servoy/webnotifications/");

zip.writeZip("webnotifications.zip")