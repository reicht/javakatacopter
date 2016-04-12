def check(n)
  if n < 21
    puts "Too young"
  else
    puts "Proceed"
  end
end

(18..24).each do |x|
  check(x)
end
