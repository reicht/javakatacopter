var fizzBuzz = function (n) {
  if (n % 15 === 0) console.log("FizzBuzz");
  else if (n % 5 === 0) console.log("Buzz");
  else if (n % 3 === 0) console.log("Fizz");
  else console.log(n);
};

for(var i = 1; i <= 100; i++) {
  fizzBuzz(i)
};
