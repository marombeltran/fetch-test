<?php
error_reporting(-1);
ini_set('display_errors', '1');

$headers = getallheaders();

print_r($_POST);
print_r($_FILES);

// header('Content-Type: application/json');
// echo json_encode($_POST);
