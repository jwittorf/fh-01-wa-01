// This file keeps all our functions, we call them in init.js

// Load a document's content into a html element, specified by id
function loadDocument(filename = "ajax/hello-world.txt", htmlId = "ajax-demo-content") {
    // Explanation see here: https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp
    // Create a new request object
    var xhttp = new XMLHttpRequest();
    // Define what to do when the request changes
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(htmlId).innerHTML = this.responseText;
        }
    };
    // Specify the request, don't do anything yet
    xhttp.open("GET", filename, true);
    // Send the actual request
    xhttp.send();
}

function DynamicJS () {
    var CookieContent = document.cookie;
    var CookieContentSliced = CookieContent.slice(10,105);
    document.getElementById("Browser").innerHTML = "Offizieller Name Ihres Browsers: " + navigator.appName + "<br>"
                                                 + "Version Ihres Browsers: " + navigator.appVersion + "<br>"
                                                 + "HTTP Indentifikation Ihres Browsers: " + navigator.userAgent + "<br>";
    document.getElementById("Cookie").innerHTML  =  CookieContentSliced;
    console.log(navigator.appName);
    console.log(navigator.appVersion);
    console.log(navigator.userAgent);
    console.log(document.cookie);
}

function Cookie () {
    document.cookie = "LastVisit=Zeitpunkt des letzten Besuchs: " + new Date() + "; expires= Mon 31 Dec 2018 12:00:00 UTC;";
    console.log(document.cookie);
}
