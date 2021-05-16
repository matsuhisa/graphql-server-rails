class SessionsController < ApplicationController
  skip_before_action :require_session, only: %i(new create)

  def new
  end

  def create
    auth_hash = request.env['omniauth.auth']
    logger.debug('-----------')
    logger.debug(auth_hash)
    logger.debug('-----------')

    user = GoogleCredential.authenticate(
      google_uid: auth_hash['uid'],
      email: auth_hash['info']['email']
    )

    session[:user_id] = user.id
    session[:sign_in_at] = Time.zone.now.to_i
    redirect_to root_path
  end

  def destroy
    session[:user_id] = nil
    session[:sign_in_at] = nil
    redirect_to new_session_path
  end
end
