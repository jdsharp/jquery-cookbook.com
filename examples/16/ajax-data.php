<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Sat, 26 Jul 1997 05:00:00 GMT');
sleep(2);
echo '<h1>Ajax date: ' . date('r') . '</h1>';