require_relative '../../app/models/product.rb'
describe Product do
  let(:subject) do
    Product.new(
      product_name: "cat food",
      price: 100000,
      description: "it's... cat food",
      specs: "10lbs 5oz",
      quantity: 5
      )
  end

  describe "#already_exists" do

    context 'when the category already has the product' do
      it "returns nil" do
        except { subject.already_exists }.to be_nil
      end
    end
  end

end
