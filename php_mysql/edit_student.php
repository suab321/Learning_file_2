

<?php
    require_once("./mysql_connector.php");
    $query = "delete from new_table where id=?";
    $stmt=mysqli_prepare($dbc,$query);
    $id=3;
    mysqli_stmt_bind_param($stmt,'i',$_GET["id"]);
    if(mysqli_stmt_execute($stmt)){
        echo "success";
        // header("location:./get_student_info.php");
        // exit();
    }
    else
        echo "error serving your respone";
?>