def fizzbuzz(num)
  if num % 15 == 0
    puts "Fizzbuzz"
  elsif num % 3 == 0
    puts "Fizz"
  elsif num % 5 == 0
    puts "Buzz"
  else
    puts num
  end
end

100.times do |x|
  fizzbuzz(x+1)
end
