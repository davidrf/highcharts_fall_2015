artist_votes = {
  "2pac" => 2,
  "Amy Winehouse" => 1,
  "Ani Defranco" => 1,
  "Backstreet Boys" => 4,
  "Blink 182" => 2,
  "Britney Spears" => 1,
  "Foo Fighters" => 2,
  "Green Day" => 2,
  "Nirvana" => 1,
  "Nsync" => 1,
  "Pearl Jam" => 1,
  "Radiohead" => 1,
  "2Chainz" => 8,
  "Red Hot Chili Peppers" => 4,
  "Ween" => 1,
  "Whitney Houston" => 1
}

artist_votes.each do |artist, votes|
  artist = Artist.find_or_create_by!(name: artist)
  votes.times do
    Vote.create(artist: artist)
  end
end
