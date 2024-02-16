<?php

$filename = $_POST['filename'];
$content = $_POST['content'];

echo $filename;

file_put_contents("../groupFile/" . $filename . ".rtf", $content);

