#!/usr/bin/env ruby

require 'sinatra'

@home = false
@current = ''

get '/' do
  @home = true
  @current = 'home'
  erb :index
end

get '/about' do
  @current = 'about'
  erb :about
end

get '/portfolio' do
  @current = 'portfolio'
  erb :portfolio
end

get '/resume' do
  @current = 'resume'
  erb :resume
end

get '/contact' do
  @current = 'contact'
  erb :contact
end

not_found do
  status 404
  erb :not_found
end
