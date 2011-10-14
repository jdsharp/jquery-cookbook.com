<?php
error_reporting(E_ALL);

function lookup($key) {
	foreach (file('urls.txt') as $line_num => $line) {
		$line = trim($line);
		$eq   = strpos('=', $line);
		$k    = substr($key, 0, $eq);
		$v    = substr($key, $eq+1);

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
header('Location: ' . lookup($match[1]));
