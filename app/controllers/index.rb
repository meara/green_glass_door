get '/' do
  session.clear #can't leave this in for non js versions
  erb :index
end

get '/offering' do
  offering = Offering.new(params[:offering])
  if offering.pleasing?
    session[:accepted] = true
    accepted = {'accepted' => 'true'}.to_json
  else
    session[:accepted] = false
    accepted = {'accepted' => 'false'}.to_json
  end
  # redirect '/'
  return accepted
end

