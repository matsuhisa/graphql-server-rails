class AddCategoryToPhotos < ActiveRecord::Migration[6.0]
  def change
    add_column :photos, :category, :int
  end
end
