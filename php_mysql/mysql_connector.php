<?php
    define('DB_USER', "root");
    define('DB_PASS','');
    define("DB_NAME","studentDB");
    define("DB_HOST","localhost");

    $dbc = @mysqli_connect(
        DB_HOST, DB_USER,DB_PASS,DB_NAME,3306
    ) or die(mysqli_connect_error());
?>