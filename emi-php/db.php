<?php

$db = new mysqli('localhost', 'phpMyAdminUser', 'basketball-sport', 'emi-php');
$db->set_charset('utf8');

function query($sql, $row_callback)
{
  global $db;
  $res = $db->query($sql);
  while ($row = $res->fetch_assoc())
    $row_callback($row, $db);
}
