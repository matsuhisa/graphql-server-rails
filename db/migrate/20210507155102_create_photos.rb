class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :title
      t.string :image_url
      t.text :description

      t.timestamps
    end
  end
end
