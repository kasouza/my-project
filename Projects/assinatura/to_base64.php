<?php

$imagePath = $argv[1];

if (!file_exists($imagePath)){ 
    printf("File not found\n");
    die();
}

$pathInfo = pathinfo($imagePath);

$type = $pathInfo['extension'];
$data = file_get_contents($imagePath);

$base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);

printf("%s\n", $base64);
