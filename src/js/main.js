// This file keeps all our functions, we call them in init.js

// Load a document's content into a html element, specified by id
function loadDocument(filename = "ajax/hello-world.txt", resultHtmlId = "ajax-demo-content") {
    // Explanation see here: https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp
    // Create a new request object
    var xhttp = new XMLHttpRequest();
    // Specify the request, don't do anything yet
    xhttp.open("GET", filename, true);
    // Define what to do when the request changes
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(resultHtmlId).innerHTML = this.responseText;
        } else {
            document.getElementById(resultHtmlId).innerHTML = "<p class=\"alert alert-danger\">Etwas ist schief gelaufen!<br>" +
                "Fehlercode: " + this.status + "<br>" +
                "Fehlermeldung: " + this.statusText + "</p>";
        }
    };
    // Send the actual request
    xhttp.send();
}

// Send form information via ajax [not really yet, using FormData API
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
function sendFormAjax(filename = "ajax-form-result.php", resultHtmlId = "ajax-form-result", formSubmitted) {
    // Create a new request object to store the data in
    var xhttp = new XMLHttpRequest();

    // Create formData object to keep all the forms data
    var data = new FormData(formSubmitted);

    // Specify the request, don't do anything yet (third parameter is for asynchronous request)
    xhttp.open("POST", filename, true);

    // Define what to do when the request changes
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Write the content
            document.getElementById(resultHtmlId).innerHTML = this.responseText;
        } else {
            document.getElementById(resultHtmlId).innerHTML = "<p class=\"alert alert-danger\">Etwas ist schief gelaufen!<br>" +
                "Fehlercode: " + this.status + "<br>" +
                "Fehlermeldung: " + this.statusText + "</p>";
        }
    };

    // Send the actual request with the formData
    xhttp.send(data);
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