let counter = 0;

function repeat(operation, num) {
  for (var i = 0; i < num; i++) {
    operation();
  }
}

function operation(){
  counter += 1;
}

repeat(operation, 4);

//console.log("must call operation 4 times ", counter === 4);
// Do not remove the line below
module.exports = repeat
