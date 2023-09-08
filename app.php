<?php
error_reporting(-1);
ini_set('display_errors', '1');

$headers = getallheaders();

$jsonObject = file_get_contents('php://input');
print_r($jsonObject);
print_r($_POST);
print_r($_FILES);

$output = array_merge($headers, $_GET);



// header('Content-Type: application/json');
// echo json_encode($output);
