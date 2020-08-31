<?php
 
    $dbh = new PDO('mysql:host=db;dbname=mysql', 'root', 'rootpass');

    foreach($dbh->query('SHOW DATABASES') as $row) {
        echo $row[0]. '<br/>';
    }

?>