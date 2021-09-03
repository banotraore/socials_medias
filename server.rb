require 'sinatra'
require 'rest-client'

set :static, true
set :public_folder, File.dirname(__FILE__)
set :port, 3000

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

get '/' do
  content_type 'application/json'

  begin
    twitter_feed = RestClient.get(
      'https://takehome.io/twitter'
    )
  rescue RestClient::ExceptionWithResponse => e
    e.response
  end

  begin
    facebook_feed = RestClient.get(
      'https://takehome.io/facebook'
    )
  rescue RestClient::ExceptionWithResponse => e
    e.response
  end

  begin
    instagram_feed = RestClient.get(
      'https://takehome.io/instagram'
    )
  rescue RestClient::ExceptionWithResponse => e
    e.response
  end

  hash = {}

  unless twitter_feed.nil?
    parse_twitter_feed = JSON.parse(twitter_feed)
    hash[:twitter] = parse_twitter_feed.collect { |json| json['tweet'] }
  end

  unless facebook_feed.nil?
    parse_facebook_feed = JSON.parse(facebook_feed)
    hash[:facebook] = parse_facebook_feed.collect { |json| json['status'] }
  end

  unless instagram_feed.nil?
    parse_instagram_feed = JSON.parse(instagram_feed)
    hash[:instagram] = parse_instagram_feed.collect { |json| json['picture'] }
  end

  hash.to_json
end

get '/feeds' do
  content_type 'application/json'

  begin
    twitter_feed = RestClient.get(
      'https://takehome.io/twitter'
    )
  rescue RestClient::ExceptionWithResponse => e
    e.response
  end

  begin
    facebook_feed = RestClient.get(
      'https://takehome.io/facebook'
    )
  rescue RestClient::ExceptionWithResponse => e
    e.response
  end

  begin
    instagram_feed = RestClient.get(
      'https://takehome.io/instagram'
    )
  rescue RestClient::ExceptionWithResponse => e
    e.response
  end

  hash = {}

  hash[:twitter]  = JSON.parse(twitter_feed) unless twitter_feed.nil?

  hash[:facebook] = JSON.parse(facebook_feed) unless facebook_feed.nil?

  hash[:instagram] = JSON.parse(instagram_feed) unless instagram_feed.nil?

  hash.to_json
end
