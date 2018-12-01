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
            posX = centerX - dimension,
            posY = centerY - dimension,
            strokeColorRed = 50,
            strokeColorGreen = 50,
            strokeColorBlue = 50;
        ctx.moveTo(posX, posY);
        setInterval(function () {
            // TODO: Fix color
            strokeColor = "rgb(" + strokeColorRed + ", " + strokeColorGreen + ", " + strokeColorBlue + ")";
            counter++;
            switch (counter) {
                case 1:
                    posY -= dimension;
                    // debugger;
                    ctx.lineTo(posX, posY);
                    break;
                case 2:
                    posX += dimension * 2;
                    // debugger;
                    ctx.lineTo(posX, posY);
                    break;
                case 3:
                    posY += dimension;
                    // debugger;
                    ctx.lineTo(posX, posY);
                    break;
                case 4:
                    posX -=dimension * 2;
                    // debugger;
                    ctx.lineTo(posX, posY);
                    counter = 0;
                    if (strokeColorRed > 230) {
                        strokeColorRed = 10;
                        strokeColorGreen = 10;
                        strokeColorBlue = 10;
                    } else {
                        strokeColorRed += 20;
                        strokeColorGreen += 20;
                        strokeColorBlue += 20;
                    }
                    break;
                default:
                    alert("Irgendwas ist schief gegangen!");
                    break;
            }
            ctx.stroke();
            // ctx.lineTo(posX + 5, posY + 5);
            // ctx.stroke();
            // ctx.rotate(45);
        }, 1000);
    } else {
        alert("Der eingesetzte Browser unterstützt kein HTML5 <canvas>!");
    }
}