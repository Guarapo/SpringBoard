# == Schema Information
#
# Table name: todo_lists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  details    :text
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TodoListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
