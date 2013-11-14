class Offering

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def pleasing?
    !!name.match(/([a-z])\1/)
  end

end

