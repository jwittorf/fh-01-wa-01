<?php

// IMPORTANT: Copy this file to htdocs/cgi/echo.php

$mode = (!(empty($argv[0]))) ? die("This script should only be run from a browser via GET query strings, not via CLI.") : "browser";

if ($mode == "browser") {
	if (sizeof($_GET) != 0) {
		echo "<p class=\"alert alert-success\">Starte Ausgabe ...</p>";
		echo "<pre>";
		$counter = 1;
		foreach ($_GET as $key => $value) {
			if (!empty($value)) {
				echo "Ausgabe von Parameter Nummer " . $counter . ": \"" . $key . "\" mit Wert \"" . $value . "\"\n";
			} else {
				echo "Ausgabe von Parameter Nummer " . $counter . ": \"" . $key . "\" mit leerem Wert\n";
			}
			$counter++;
		}
		echo "</pre>";
		echo "<p class=\"alert alert-success\">... Ausgabe beendet.</p>";
	} else {
		echo "<p class=\"alert alert-danger\">Keine Parameter übergeben!</p>";
	}
}
