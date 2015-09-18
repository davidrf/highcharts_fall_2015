class Vote < ActiveRecord::Base
  belongs_to :artist
  validates :artist, presence: true
end
