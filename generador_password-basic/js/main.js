let btn = document.getElementById("btn-generar");
let input = document.getElementById("input-generar");

let caracteres = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "]",
  "{",
  "}",
  ",",
  ".",
  "<",
  ">",
  "|",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "@",
  "!",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
];
let password = "";

btn.addEventListener("submit", function (e) {
  e.preventDefault();
  generarPassword();
});

function generarPassword() {
  for (let index = 0; index < 10; index++) {
    let random = Math.floor(Math.random() * caracteres.length);
    password = password + caracteres[random];
    input.value = password;
  }
  console.log(password);
}

generarPassword();
