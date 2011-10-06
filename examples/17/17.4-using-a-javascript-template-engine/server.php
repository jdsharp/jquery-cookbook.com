<?php
$result = new StdClass();
switch( $_GET['id'] ) {
 case 1:
   $result->title = 'Interactions of Thought and Language in Old English Poetry';
   $result->author = array(
			   (object)array('name'=>'Peter Clemoes'));
   $result->year = '1995';
   $result->rating = '4.5';
   $result->location = 'Santiago';
   break;
 case 2:
   $result->title = 'Democracy and the Post-Totalitarian Experience';
   $result->author = array(
			   (object)array('name'=>'leszek Koczanowicz'),
			   (object)array('name'=>'Beth J. Singer'));
   $result->year = '2005';
   $result->rating = '3';
   $result->location = 'Mandalay';
   break;
 case 3:
   $result->title = 'Mean Oscillations and Equimeasurable Rearrangements of Functions';
   $result->author = array(
			   (object)array('name'=>'Anatolii Korenovskii'));
   $result->year = '2007';
   $result->rating = '3.5';
   $result->location = 'Sofia';
   break;
 case 4:
   $result->title = 'The Guide of the Perplexed';
   $result->author = array(
			   (object)array('name'=>'Moses Maimonides'),
			   (object)array('name'=>'Shlomo Pines'),
			   (object)array('name'=>'Leo Strauss'));
   $result->year = '1974';
   $result->rating = '2';
   $result->location = 'Juma';
   break;
 case 5:
   $result->title = 'The Road to Serfdom';
   $result->author = array(
			   (object)array('name'=>'Frederich August Hayek'));
   $result->year = '2001';
   $result->rating = '5';
   $result->location = 'Marstrand';
   break;
 default: 
   $result->none = TRUE;
 }
echo json_encode($result);
?>