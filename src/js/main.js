function loadDocument() {
    // TODO check the exact purposes, so you know, what you're doing
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("ajax-demo-content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax/hello-world.txt", true);
    xhttp.send();
}