json.array!(@shoes) do |shoe|
  json.extract! shoe, :id, :material
  json.url shoe_url(shoe, format: :json)
end
