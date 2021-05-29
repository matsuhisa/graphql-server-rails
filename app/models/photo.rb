class Photo < ApplicationRecord
  validates :title, length: { in: 2..5 }
  validates :image_url, presence: true, format: /\A#{URI::regexp(%w(http https))}\z/

  has_many :photo_tags
  has_many :tags, through: :photo_tags

  enum category: { selfie: 0, landscape: 1, graphic: 2 }
end
