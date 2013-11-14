get '/' do
  erb :index
end

get '/offering' do
  offering = Offering.new(params[:offering])
  if offering.pleasing?
    session[:accepted] = true
  else
    session[:accepted] = false
  end
  redirect '/'
end

