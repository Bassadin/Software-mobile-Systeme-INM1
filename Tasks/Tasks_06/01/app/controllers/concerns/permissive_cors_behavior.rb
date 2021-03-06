#---
# Excerpted from "Seven Mobile Apps in Seven Weeks",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
#---
module PermissiveCorsBehavior
  extend ActiveSupport::Concern

  included do
    before_action :add_permissive_cors_headers
  end

  def add_permissive_cors_headers
    headers['Access-Control-Allow-Origin'] = '*'
  end

end
