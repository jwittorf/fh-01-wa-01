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
    var CookieContentSliced = CookieContent.slice(CookieContent.indexOf("=") + 1,CookieContent.lastIndexOf(")") + 1);
    document.getElementById("Browser").innerHTML = "Offizieller Name Ihres Browsers: " + navigator.appName + "<br>"
                                                 + "Version Ihres Browsers: " + navigator.appVersion + "<br>"
                                                 + "HTTP Indentifikation Ihres Browsers: " + navigator.userAgent + "<br>";
    document.getElementById("Cookie").innerHTML  =  CookieContentSliced;
    console.log("Die Funktion DynamicJS wurde aufgerufen");
    console.log(navigator.appName);
    console.log(navigator.appVersion);
    console.log(navigator.userAgent);
    console.log(document.cookie);
}

function Cookie () {
    document.cookie = "LastVisit=Zeitpunkt des letzten Besuchs: " + new Date() + "; expires= Mon 31 Dec 2018 12:00:00 UTC;";
    console.log(document.cookie);
}

function Init () {
    document.getElementById("form-input-username").value = "MaxMustermann";
    document.getElementById("form-input-password").value = "geheim";
    document.getElementById("form-input-email").value    = "MaxMustermann@hotmail.com";
    document.getElementById("form-input-dob").value      = "1965-05-15";
}

function DebuggerTest () {
    for ( i = 0; i <= 50; i++) {
        if ( i % 5 === 0) {
            console.log(i);
            debugger;
        }
    }
}

function paintCanvas(htmlId = "demo-canvas") {

    var canvas = document.getElementById(htmlId);
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d"),
            cWidth = 300,
            cHeight = 300,
            centerX = cWidth / 2,
            centerY = cHeight / 2,
            dimension = 50,
            counter = 0,
            posX = centerX - dimension + (dimension / 2),
            posY = centerY - dimension + (dimension + dimension / 2);
        // Go to 0
        ctx.moveTo(posX, posY);
        ctx.strokeStyle = "#ff0000";
        // TODO: get widths right again
        /*
        1       2

        0/4     3
         */
        setInterval(function () {
            counter++;
            switch (counter) {
                case 1:
                    // Start the path
                    ctx.beginPath();
                    // Go back up to 1 (for continuous interval, draws blank on first run)
                    ctx.lineTo(posX, posY);
                    posY -= dimension;
                    // Go up to 1
                    ctx.lineTo(posX, posY);
                    ctx.stroke();
                    break;
                case 2:
                    ctx.beginPath();
                    ctx.moveTo(posX, posY);
                    posX += dimension;
                    // Go right to 2
                    ctx.lineTo(posX, posY);
                    ctx.stroke();
                    break;
                case 3:
                    ctx.beginPath();
                    ctx.moveTo(posX, posY);
                    posY += dimension;
                    // Go down to 3
                    ctx.lineTo(posX, posY);
                    ctx.stroke();
                    break;
                case 4:
                    ctx.beginPath();
                    ctx.moveTo(posX, posY);
                    posX -= dimension;
                    // Go left to 4
                    ctx.lineTo(posX, posY);
                    ctx.stroke();
                    // change color for next run
                    switch (ctx.strokeStyle) {
                        // red
                        case "#ff0000":
                            ctx.strokeStyle = "#48ff00";
                            break;
                        // green
                        case "#48ff00":
                            ctx.strokeStyle = "#ff00f2";
                            break;
                        // fucsia
                        case "#ff00f2":
                            ctx.strokeStyle = "#ff0000";
                            break;
                    }
                    counter = 0;
                    break;
                default:
                    alert("Irgendwas ist schief gegangen!");
                    break;
            }
        }, 1000);
    } else {
        alert("Der eingesetzte Browser unterstützt kein HTML5 <canvas>!");
    }
}