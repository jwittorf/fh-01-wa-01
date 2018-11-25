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