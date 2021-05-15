class GoogleCredential < ApplicationRecord
  belongs_to :user

  def self.authenticate(google_uid:, email:, authenticated_at: Time.current)
    find_user(google_uid) || save_new_user(google_uid, email, authenticated_at)
  end

  private

    def self.find_user(google_uid)
      GoogleCredential.find_by(google_uid: google_uid)&.user
    end

    def self.save_new_user(google_uid, email, authenticated_at)
      user = User.new(authenticated_at: authenticated_at)
      user.build_google_credential(google_uid: google_uid, email: email)
      transaction do
        user.save!
      end
      user
    end
end
