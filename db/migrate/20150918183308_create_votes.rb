class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.belongs_to :artist, null: false, index: true
      t.timestamps
    end
  end
end
