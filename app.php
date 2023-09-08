<?php
error_reporting(-1);
ini_set('display_errors', '1');

$headers = getallheaders();

$output = array_merge($headers, $_GET);

header('Content-Type: application/json');
echo json_encode($output);
