<?php
error_reporting(E_ALL);
function lookup($key) {
	foreach (file('urls.txt') as $line_num => $line) {
    	$line = split("=", $line);
    	if ($line[0] == $key) {
    		return $line[1];
    	}
	}
	die("No URL for $key available.");
}
if (!isSet($_GET['go'])) {
	die("Missing parameter, call via .../go/[key]");
}

// add logging here?

header('Location: ' . lookup($_GET['go']));
