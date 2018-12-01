							<?php
							// Collect all results, make sure to update this if new fields in index.shtml
							if (!empty($_POST)) {
								$results = [
									"Benutzername" => $_POST["username"],
									"Passwort" => $_POST["password"],
									"E-Mail" => $_POST["email"],
									"Geburtsdatum" => $_POST["dob"]
								];
								foreach ($results as $name => $input) {
									if (!empty($input)) {
										// Output every filled input with the $results key as heading
										//(useful for multi-language websites with same html name attribute but different labels
										echo "<div class=\"list-group-item\">";
										echo "<h3 class=\"list-group-item-heading\">" . $name . "</h3>";
										echo "<p class=\"list-group-item-text\">" . $input . "</p>";
										echo "</div>";
									}
								}
							} else {
								// If the html validation fails and the user submits empty values (or file was accessed directly)
								echo "<p class=\"alert alert-danger\">Achtung, alle Felder sind leer!</p>";
							}