<?php

include 'header.php';
require_once 'db.php';

include 'parts/people-block.php';

query('SELECT * FROM people', function ($row) {
  echo people_block($row);
});

?>

<?php include 'footer.php'; ?>