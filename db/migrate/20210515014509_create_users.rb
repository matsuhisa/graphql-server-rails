class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.datetime "authenticated_at"
      t.string "nickname", null: true
      t.timestamps
    end
  end
end
