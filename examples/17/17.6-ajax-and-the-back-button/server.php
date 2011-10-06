<?php
switch($_POST['word']) {
 case 'apples':
   echo "They're red, round, and grow on trees.";
   return;
 case 'oranges':
   echo "They're orange, round, and grow on trees.";
   return;
 case 'bananas':
   echo "They're not orange or red. They're not round. And, they don't grow on trees";
   return;
 }
?>