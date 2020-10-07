<?php
include 'header.php';

echo $a;

$a = 'Hello, 
  World';
$a;

$name = 'Fedya';
$hello = "Hello, $name"; // Hello, Fedya

$hello = 'Hello' . 'Fedya'; // 'HelloFedya'

$arr = array(1, 2, 3, 4);
$arr = [1, 2, 3, 4];
$arr = [1, 'Hello', true, false];
count($arr); // посчитать длину массива

$arr[0]; // 1

$arr_assoc = [
  'fedya' => ['Fedor Nikonov', 19],
  'emi' => ['Emine Abibulaeva', 17],
];
$arr_assoc['fedya'][0]; // 'Fedor Nikonov'
$arr_assoc['fedya'][1]; // 19

//$dog; // объект собаки
//$dog->run(); // метод
//$dog->legs_number; // свойство

echo '<strong>Hello</strong>, World!<br>'; // вывод в код страницы
$a = 5;
echo $a . '<br>';
echo "Number: $a";

?>

<strong><?php echo $a; ?></strong>
<strong><?= $a ?></strong> <!-- короткая запись echo -->

<?php
$i = 0;
while ($i < 10) {  ?>
  <div style="color: red"><?= $i ?></div>
<?php
  $i++;
}  ?>

<?php $i = 0; ?>
<?php while ($i < 10) : ?>
  <div style="color: blue"><?= $i ?></div>
  <?php $i++; ?>
<?php endwhile; ?>

<?php
while (false) {
  echo 'Hello';
}

do {
  echo 'Hello';
} while (false);

for ($i = 0; $i < 10; $i++) :
  echo 'Hello';
  echo 'World';
endfor;
//0  1  2  3  4  5  6
$arr = [5, 2, 3, 4, 1, 6, 7];
for ($i = 0; $i < count($arr); $i++)
  echo $arr[$i];
foreach ($arr as $key => $number) {
  echo "<br>Key: $key => Value: $number";
}

$arr_assoc = [
  'fedya' => 'Fedor Nikonov',
  'emi' => 'Emine Abibulaeva',
];
foreach ($arr_assoc as $key => $value) {
  echo "<br>$key: $value";
}

function hello($name)
{
  return "Hello, $name!";
}

echo hello('Fedya'); // "Hello, Fedya"

$name = 'Feya';
$blue_text = "
  <span style=\"color: blue\">
    <span style=\"font-family: monospace\">
      $name
    </span>
  </span>";
echo $blue_text;

$blue_text = <<<HTML
  <span style="color: blue">
    <span style="font-family: monospace">
      $name
    </span>
  </span>
HTML;
echo $blue_text;


include_once 'footer.php';
