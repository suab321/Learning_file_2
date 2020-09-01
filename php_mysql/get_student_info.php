<?php
    require_once("./mysql_connector.php");
    $query = "select id,name,email from new_table";
    $response = @mysqli_query($dbc, $query) or die("Could not fetch data");

    if($response){
        while($row = mysqli_fetch_array($response)){
            echo $row["name"]. "    " . $row["email"] . '<a href=edit_student.php?id='.$row["id"].'>delete</a>'. "<br>";
        }
    }
    else
        echo mysqli_error($dbc);
    mysqli_close($dbc);
?>
