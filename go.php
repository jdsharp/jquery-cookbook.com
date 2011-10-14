<?php
error_reporting(E_ALL);

function lookup($key) {
	foreach (file('urls.txt') as $line_num => $line) {
		$line = trim($line);
		$eq   = strpos($line, '=');
		$k    = substr($line, 0, $eq);
		$v    = substr($line, $eq+1);

    	if ($k == $key) {
    		return $v;
    	}
	}
	die("No URL for $key available.");
}
preg_match('/\/go\/(.*)/', $_SERVER['REQUEST_URI'], $match);
if (!isset($match[1])) {
	die("Missing parameter, call via /go/[key]");
}
$url = lookup($match[1]);
echo 'Redirecting to: <a href="' . $url . '">' . $url . '</a><meta http-equiv="Refresh" content="5; URL=' . $url . '">';
