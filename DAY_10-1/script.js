console.log("Multidimenstional Array ");

const nameAndNumberList = [
  ["adarsh", 75],
  ["Akash ", 90],
  ["anuraghg", 79],
];



const TicTacToe = [
    ['X',null,null],
    [null,null,'0'],
    ['0',null, 'X']
]

let pp =TicTacToe[0][0]
console.log(pp)

let cities = [
  ["Mumbai", "Delhi", "Chennai"],
  ["Sydney", "Melbourne", "Brisbane"],
  ["Berlin", "Munich", "Hamburg"]
];

console.log(cities);



for (let i = 0; i < cities.length; i++) {
  for (let j = 0; j < cities[i].length; j++) {
    console.log(cities[i][j]);
  }
}


// All Cities Comes Line by Line .