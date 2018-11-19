function loadDocument() {
    // Explanation see here: https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp
    // Create a new request object
    var xhttp = new XMLHttpRequest();
    // Define what to do when the request changes
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("ajax-demo-content").innerHTML = this.responseText;
        }
    };
    // Specify the request, don't do anything yet
    xhttp.open("GET", "ajax/hello-world.txt", true);
    // Send the actual request
    xhttp.send();
}