<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if (!isset($_POST['lat']) || !isset($_POST['lon'])) {
    echo json_encode([
        'status' => 'Failed',
        'msg' => 'Missing parameters: lat or lon'
    ]);
    exit;
}

$lat = $_POST['lat'];
$lon = $_POST['lon'];



$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => "https://weatherapi-com.p.rapidapi.com/current.json?q=$lat,$lon",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTPHEADER => [
        "x-rapidapi-host: weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key: 939e5fb587msh0f94bc1bfde9e8ep14e9fbjsne1e56a937b70"
    ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

if ($err) {
    echo json_encode([
        'status' => 'Failed',
        'msg' => 'Curl error',
        'error' => $err
    ]);
} else {
    // ההחזרה כאן כבר JSON מוכן מה־API → אין צורך ב-encode נוסף
    echo $response;
}


/**
 * Initialize cURL session
 * %$ch = curl_init();
 *
 * //Set basic optins
 * curl_setopt($ch, CURLPT_URL,'https://api.example.com');
 * curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
 * //Execute&Close
 * //Exexute requset
 * $response = curl_exec($ch);
 *
 * //Check for errors
 * $err = curl_error($ch);
 *
 * //Close session
 * curl_close($ch);
 */
