const students = [
  "Cameron",
  "Kimberly",
  "Ashley",
  "Daniel",
  "Justin",
  "Dustin",
  "Max",
  "Fred",
];

for (let i = 0; i < students.length; i += 2) {
  console.log(students[i]);
}
// for (let asingleThing of agroupOfThings)
//   for (let singular of plural)
// for (let student of students) {
//   console.log(student);
// }

const pokemon = [
  "Pikachu",
  "Charmander",
  "Squirtle",
  "Bulbasaur",
  "Jigglypuff",
  "Eevee",
  "Snorlax",
  "Mewtwo",
  "Gyarados",
  "Dragonite",
];
for (let poke of pokemon) {
  console.log(poke);
}
let counter = 0;
while (counter < 5) {
  console.log("What a cool dude");
  counter++;
}

function thisIsMyName(name) {}

thisIsMyName();

function personalStats(height, weight, age) {
  console.log(`Your height is ${height}.`);

  let kiloWeight = Math.round(weight * 0.45359237);

  console.log(`You weigh approximately ${kiloWeight} kilograms.`);

  let ageMinutes = Math.round(age * 525600);
}

personalStats(70, 165, 26);
