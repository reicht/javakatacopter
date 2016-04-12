function pigatize(text) {
    var pop = text.slice(0,1);
    if ( vowelCheck(text) === true ) console.log(text + 'way');
    else  console.log(text.slice(1) + pop + 'ay');
}

var vowelCheck = function (text) {
  if ( text[0].search(/[aeiouAEIOU]/) === 0 ) return true;
  else return false;
};

pigatize("alphabet");
pigatize("germanic");
pigatize("oligarchy");
pigatize("populations");
