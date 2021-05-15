class ApplicationController < ActionController::Base
  before_action :require_session

  def require_session
    redirect_to new_session_path if current_user.nil? || expired_session?
  end

  helper_method def current_user
    @current_user ||= session[:user_id] && User.find(session[:user_id])
  end

  def expired_session?
    session[:sign_in_at] < current_user.authenticated_at.to_i
  end
end
