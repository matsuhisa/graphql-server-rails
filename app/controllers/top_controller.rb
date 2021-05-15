class TopController < ApplicationController
  skip_before_action :require_session, only: %i(index)

  def index
  end
end
