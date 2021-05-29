class Photo < ApplicationRecord
  validates :title, length: { in: 2..5 }
  validates :image_url, presence: true, format: /\A#{URI::regexp(%w(http https))}\z/

  enum category: { selfie: 0, landscape: 1, graphic: 2 }
end
