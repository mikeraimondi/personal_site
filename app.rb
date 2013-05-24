#!/usr/bin/env ruby
require 'sinatra'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/portfolio' do
  erb :portfolio
end

get '/resume' do
  erb :resume
end

get '/contact' do
  erb :contact
end

not_found do
  status 404
  erb :not_found
end
