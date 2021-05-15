class GoogleCredential < ApplicationRecord

  def self.authenticate(google_uid:, email:, authenticated_at: Time.current)
    find_user(google_uid) || save_new_user(google_uid, email, authenticated_at)
  end

end
