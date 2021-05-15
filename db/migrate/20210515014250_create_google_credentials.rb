class CreateGoogleCredentials < ActiveRecord::Migration[6.0]
  def change
    create_table :google_credentials do |t|
      t.references "user", null: false, index: { unique: true }
      t.string "google_uid", null: false
      t.string "email", null: false
      t.timestamps
    end
  end
end
