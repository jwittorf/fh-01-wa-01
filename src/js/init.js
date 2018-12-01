// Initialize/call the methods from main.js
window.onload = function () {
	// Load demo "Hello World" content via ajax
    document.getElementById("ajax-demo-button").onclick = function() {
        loadDocument("ajax/hello-world.txt", "ajax-demo-content");
    };

	// Handle the form via ajax
    document.getElementById("form-demo").onsubmit = function (event) {
        // Prevent the form being submitted regularly
        event.preventDefault();
        // Let the submit be handled via ajax
        // Parameters: url to handle the request, id to write the result into, current form element (containing the data)
        sendFormAjax("ajax-form-result.php", "ajax-form-result", this);
    };

//    Cookie();
    DynamicJS();
};

window.onbeforeunload = function () {
	Cookie();
};