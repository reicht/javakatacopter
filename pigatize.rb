VOWELS = ['a', 'e', 'i', 'o', 'u']

y_not = rand(1..2)

if y_not == 2
  VOWELS << 'y'
end

def pigatize(text)
  if starts_with_vowel?(text)
    puts text + "way"
  else
    text_arr = text.chars
    pop = text_arr.shift
    text_arr << pop
    puts text_arr.join('') + "ay"
  end
end

def starts_with_vowel?(text)
  if VOWELS.include?(text.chars.first)
    true
  end
end


pigatize("alphabet")
pigatize("garrett")
pigatize("illinoise")
pigatize("regency")
pigatize("yokel")
