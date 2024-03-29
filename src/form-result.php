<!doctype html>
<html lang="de">
<head>
    <title>Aufgabenteil 2: Entwicklung von HTML5-Dokumenten, Formularen und Serveranfragen</title>
    <meta charset="utf-8">
    <meta name="author" content="Philipp Beeck, Julian Wittorf">
    <!-- Icon in der Adresszeile des Brpwsers -->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/main.css" media="all">
    <link rel="stylesheet" href="css/print.css" media="print">
</head>
<body>
<!-- Start umschließender #wrapper für die ganze Seite, für z. B. weitere Stile -->
<div id="wrapper">
    <!-- Start #header mit Titel und Logo -->
    <header id="header">
        <!-- Start allgemeiner umschließender .container für die einheitliche Ausrichtung der Seitenelemente -->
        <div class="container">
            <div class="grid-wrapper">
                <div class="grid-75-l">
                    <div class="grid-inner-l">
                        <div id="header-title">
                            <div class="h3">&lt;Aufgabenteil Nummer="2"/&gt;</div>
                            <div class="h4">{Entwicklung von HTML5-Dokumenten, Formularen und Serveranfragen}</div>
                        </div>
                    </div>
                </div>
                <div class="grid-25-r">
                    <div class="grid-inner-r">
                        <div id="header-logo">
                            <a target="_blank" href="https://www.fh-kiel.de/"><img src="img/logo-fh.gif" alt="FH Kiel"
                                                                                   width="634" height="168"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Ende allgemeiner umschließender .container für die einheitliche Ausrichtung der Seitenelemente -->
    </header>
    <!-- Ende #header -->
    <!-- Start #nav-main Hauptnavigation -->
    <nav id="nav-main">
        <!-- Start allgemeiner umschließender .container für die einheitliche Ausrichtung der Seitenelemente -->
        <div class="container">
            <ul>
                <li><a href="#">HTML</a></li>
                <li class="has-children"><a href="#">CSS</a>
                    <ul>
                        <li><a target="_blank" href="https://getbootstrap.com/">Twitter Bootstrap</a></li>
                        <li><a target="_blank" href="https://sass-lang.com/">SASS</a></li>
                    </ul>
                </li>
                <li class="has-children"><a href="#">JavaScript</a>
                    <ul>
                        <li><a target="_blank" href="https://jquery.com/">jQuery</a></li>
                        <li><a target="_blank" href="https://gulpjs.com/">Gulp</a></li>
                    </ul>
                </li>
                <li><a href="#">PHP</a></li>
                <li class="has-children"><a href="#">CMS</a>
                    <ul>
                        <li><a target="_blank" href="https://typo3.org/">TYPO3</a></li>
                        <li><a target="_blank" href="https://wordpress.org/">WordPress</a></li>
                        <li><a target="_blank" href="https://magento.com/">Magento</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- Ende allgemeiner umschließender .container für die einheitliche Ausrichtung der Seitenelemente -->
    </nav>
    <!-- Start allgemeiner umschließender .container für die einheitliche Ausrichtung der Seitenelemente -->
    <div class="container">
        <!-- Start allgemeiner Inhalt #content mit umschließendem .grid-wrapper für die Aufteilung der Inhaltsbereiche -->
        <div id="content" class="grid-wrapper">
            <!-- Start Hauptinhalt #content-main mit Aufteilung in 75% links der Inhaltsbereiche -->
            <main id="content-main" class="grid-75-l">
                <div class="grid-inner-l">
                    <section>
                        <header>
                            <h1>Ausgabe der Formulareingaben</h1>
                        </header>
                        <p>Hier werden die Daten ausgegeben, die zuvor in das Formular eingegeben wurden:</p>
                        <div class="list-group">
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
							?>
                        </div>
                        <a href="index.shtml" class="btn btn-warning"><i class="glyphicon glyphicon-chevron-left"></i>
                            Zurück zur Eingabe</a>
                    </section>
                </div>
            </main>
            <!-- Ende Hauptinhalt #content-main mit Aufteilung in 75% links der Inhaltsbereiche -->
            <!-- Start Nebeninhalt #content-side mit Aufteilung in 25% rechts der Inhaltsbereiche -->
            <aside id="content-side" class="grid-25-r">
                <div class="grid-inner-r">
                    <section>
                        <header class="h6">Hier befindet sich die Sidebar oder der "Nebeninhalt"</header>
                        <p>
                            Traditionell werden hier Anzeigen oder weitere "Nebeninformationen" angezeigt. Diese sind
                            aber
                            oft auch relevant, wir kombinieren hier beides und erfüllen damit auch den Aufgabenteil eine
                            <abbr title="Scalable Vector Graphic">SVG</abbr>-Datei in die Webseite einzubinden. Die
                            Anzeige
                            hat es
                            dafür aber in sich, wir verlinken auf den tollen, leichten, schnellen und mächtigen
                            Text-Editor
                            "Sublime Text". Sehensweit ist auch <a target="_blank"
                                                                   href="https://www.youtube.com/watch?v=SVkR1ZkNusI&amp;list=PLpcSpRrAaOaqQMDlCzE_Y6IUUzaSfYocK">diese
                                Playlist auf Youtube</a> zur näheren Demonstration der
                            Funktionen.
                        </p>
                        <div class="ad">
                            <a target="_blank" href="https://www.sublimetext.com/" class="no-icon"
                               title="'A sophisticated text editor for code, markup and prose'"><img
                                        src="img/Sublime-Text.svg" alt="Sublime Text" width="502" height="64"></a>
                        </div>
                    </section>
                </div>
            </aside>
            <!-- Ende Nebeninhalt #content-side mit Aufteilung in 25% rechts der Inhaltsbereiche -->
        </div>
        <!-- Ende allgemeiner Inhalt #content mit umschließendem .grid-wrapper für die Aufteilung der Inhaltsbereiche -->
    </div>
    <!-- Ende allgemeiner umschließender .container für die einheitliche Ausrichtung der Seitenelemente -->
    <!-- Start Fußzeile mit Urherberinformationen -->
    <footer id="footer">
        <!-- Start allgemeiner umschließender .container für die einheitliche Ausrichtung der Seitenelemente -->
        <div class="container">
            Konzeption, Gestaltung, Umsetzung und Verantwortung:<br><a
                    href="mailto:philipp.beeck@student.fh-kiel.de">Philipp
                Beeck</a> | <a href="mailto:julian.wittorf@student.fh-kiel.de">Julian Wittorf</a>
        </div>
        <!-- Ende allgemeiner umschließender .container für die einheitliche Ausrichtung der Seitenelemente -->
    </footer>
    <!-- Ende Fußzeile mit Urherberinformationen -->
</div>
<!-- Ende umschließender #wrapper für die ganze Seite, für z. B. weitere Stile -->
<!-- JavaScript am Ende der Seite laden, um ein Blockieren der Seite beim Ladevorgang zu unterbinden und so die Ladegeschwindigkeite zu erhöhen -->
<!-- https://www.guido-muehlwitz.de/2011/01/wieso-man-javascript-nicht-im-head-laedt-und-im-footer-besser-auch-nicht/ -->
<!--<script></script>-->
</body>
</html>