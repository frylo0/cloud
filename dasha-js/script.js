////alert('hi');
////prompt('how are you?');

//console.log('hello');

//let a = 5;
//a = 4;

//if (a == 5) {
//  a = 3;
//  console.log(a);
//  a = 2;
//} else
//  console.log(a);

//let i = 0;
//while (i < 3) {
//  console.log(i);
//  i++;
//}

//for (let i = 0; i < 3; i++) console.log(i);

//let user1 = 'Fedor Nikonov';
//let user2 = 'Dasha Gurina';

//let users = [
//  'Nikonov Fedor',
//  'Dasha Gurina',
//  'Enime Saakyan',
//];

//console.log(users[0]);
//console.log(users[1]);
//console.log(users[2]);

//for (let i = 0; i < 3; i++) {
//  let user = users[i];
//  console.log(user);
//}

//for (let user of users)
//  console.log(user);

//console.log('hello');
//console.log('world');

//function helloWorld() {
//  console.log('hello');
//  console.log('world');
//}

//helloWorld();
//helloWorld();
//helloWorld();

//helloWorld();

//helloWorld();
//helloWorld();
//helloWorld();
//helloWorld();
//helloWorld();

//multiHelloWorld(5);
//multiHelloWorld(4);

//function multiHelloWorld(n) {
//  for (let i = 0; i < n; i++)
//    helloWorld();
//}
//let a = multiHelloWorld;

//let a = function (n) {
//  for (let i = 0; i < n; i++)
//    helloWorld();
//};

//function log(message) {
//  console.log(message);
//}

//let a = console.log;
//a('Hello, World');
//console.log('Hello, World');

//// TODO: завтра
//let users = [
//  'Nikonov Fedor',
//  'Dasha Gurina',
//  'Enime Saakyan',
//], usersDup = [];

//for (let i = 0; i < users.length; i++) {
//  console.log(users[i]);
//}
//forEachUser(function (i) {
//  console.log(users[i]);
//});
//for (let i = 0; i < users.length; i++) {
//  console.log('hello');
//  console.log('world');
//}
//forEachUser(function (i) {
//  console.log('hello');
//  console.log('world');
//});
//forEachUser(helloWorld);
//for (let i = 0; i < users.length; i++) {
//  usersDup[i] = users[i];
//}
//forEachUser(function (i) {
//  usersDup[i] = users[i];
//});

//function forEachUser(callback) {
//  for (let i = 0; i < users.length; i++) {
//    callback(i);
//  }
//}

//let a = function (a, b, c) {
//  console.log(a, b, c);
//};
//let a = (a, b, c) => {
//  console.log(a, b, c);
//};
//let a = (a, b, c) => console.log(a, b, c);

//let a = function (b) {
//  console.log(b);
//};
//let a = (b) => {
//  console.log(b);
//};
//let a = (b) => console.log(b);
//let a = b => console.log(b);

//for (let i = 0; i < users.length; i++) {
//  console.log(users[i]);
//}
//forEachUser(function (i) {
//  console.log(users[i]);
//});
//forEachUser((i) => {
//  console.log(users[i]);
//});
//forEachUser((i) => console.log(users[i]));
//forEachUser(i => console.log(users[i]));

//function factorial(n) {
//  if (n == 1) return 1;
//  return n * factorial(n - 1);
//}

//factorial(5); // 120

//5! = 5 * 4! = 5 * 4 * 3!