<?php
    require_once('./mysql_connector.php');

    $query="insert into new_table(name,email,password) values(?,?,?);";
    $stmt = mysqli_prepare($dbc, $query);

    mysqli_stmt_bind_param($stmt,"sss",$_POST["name"],$_POST["email"],$_POST["password"]);

    mysqli_stmt_execute($stmt);

    echo mysqli_stmt_affected_rows($stmt);
    mysqli_stmt_close($stmt);

    mysqli_close($dbc);

?>