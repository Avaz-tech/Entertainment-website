<?php

echo "Hello";

echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");

    <?php
// prints: mysql link
$c = mysql_connect();
echo get_resource_type($c) . "\n";

// prints: stream
$fp = fopen("foo", "w");
echo get_resource_type($fp) . "\n";

// prints: domxml document
$doc = new_xmldoc("1.0");
echo get_resource_type($doc->doc) . "\n";


}

<?php
	// Switch Statement Example
	switch ($i) {
    	case "free":
    	    echo "i is free";
    	    break;
    	case "code":
    	    echo "i is code";
    	    break;
    	case "camp":
    	    echo "i is camp";
    	    break;
    	default:
    	    echo "i is freecodecamp";
            break;
	}
?>
