// var check = function (n) {
//    if (n < 21) console.log("Too Young");
//    else console.log("Proceed");
// };

// for(var i = 18; i < 24; i++) {
//   check(i)
// };

var arrCheck = function (arr) {
    arr.forEach( function (n) {
        if (n < 21) console.log("Too Young");
        else console.log("Proceed");
    });
};

var ages = [18, 19, 20, 21, 22, 23, 24];
arrCheck(ages);
