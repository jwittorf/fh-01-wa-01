// Initialize/call the methods from main.js
window.onload = function () {
	// Load demo "Hello World" content via ajax
    document.getElementById("ajax-demo-button").onclick = function() {
        loadDocument("ajax/hello-world.txt", "ajax-demo-content");
    };
//    Cookie();
    DynamicJS();

};
window.onbeforeunload = function () {
Cookie();
};
