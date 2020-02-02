json.extract! message, :id, :tweet, :created_at, :updated_at
json.url message_url(message, format: :json)
