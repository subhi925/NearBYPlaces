<?php

$apiKey = "YOUR_API_KEY";

$lat = 32.12345;
$lng = 35.12345;

$url = "https://places.googleapis.com/v1/places:searchNearby";

$data = [
    "includedTypes" => ["restaurant"],
    "maxResultCount" => 10,
    "locationRestriction" => [
        "circle" => [
            "center" => [
                "latitude" => $lat,
                "longitude" => $lng
            ],
            "radius" => 5000
        ]
    ]
];

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "X-Goog-Api-Key: $apiKey",
    "X-Goog-FieldMask: places.displayName,places.location,places.rating"
]);

curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
curl_close($ch);

$result = json_decode($response, true);

echo "<pre>";
print_r($result);
echo "</pre>";
?>