require 'rails_helper'

RSpec.describe Product, :type => :model do
  let(:category) do
    Category.new(section: "nip")
  end
  let(:subject) do
    category.products.new(
      product_name: "cat food",
      price: 100000,
      description: "it's... cat food",
      specs: "10lbs 5oz",
      quantity: 5
      )
  end

  describe "#already_exists" do
    let (:subject_two) do
      category.products.new(
      product_name: "cat food",
      price: 100000,
      description: "it's... cat food",
      specs: "10lbs 5oz",
      quantity: 5
      )
    end

    context 'when the category already has the product' do
      it "returns nil" do
        expect subject_two.already_exists(category).to be_nil
      end
    end
  end
end
