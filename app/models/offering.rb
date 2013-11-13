class Offering

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def pleasing?
    !!name.match(/([a-z])\1/)
  end

end



def includes_double?(string)
  for letter in “a”..”z”
    return true if string.downcase.include?(letter * 2)
  end
  false
end

def accept_notice
  puts “Well done!  Your offering has pleased the guardians”
  puts “of the green glass door.  You may enter!”
end

def reject_notice
    puts “Your pathetic offering has been rejected.”
    puts “It can’t come in, and neither can you!”
end

def try_again?
  puts “Would you like to try again, puling mortal?”
  try_again = gets.chomp
  if try_again.downcase.include?(“yes”)
    puts “All right.  What have you brought this time?”
    offering = gets.chomp
    green_glass_door?(offering)
  else
    puts “FINE! *slams door*”
  end
end
 
def green_glass_door?(offering)
  if includes_double?(offering)
    accept_notice
  else
    reject_notice
    gets.chomp
    try_again?
  end
end

puts “Hello human!”
puts “What pitiful offering have you brought to place before”
puts “the exalted guardians of the green glass door?”

offering = gets.chomp
green_glass_door?(offering)
