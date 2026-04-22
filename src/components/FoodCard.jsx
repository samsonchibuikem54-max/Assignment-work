import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Plus } from "lucide-react";

const FoodCard = ({ item }) => {
  const { cart, addToCart, increaseQty, decreaseQty } = useContext(CartContext);
  const cartItem = cart.find((i) => i.id === item.id);
  const quantity = cartItem ? cartItem.qty : 0;

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-3">
      <img
        src={item.image}
        className="rounded-xl h-32 w-full object-cover mb-3"
      />

      <h3 className="font-semibold text-lg">{item.name}</h3>

      <div className="flex justify-between items-center mt-2">
        <p className="text-green-500 font-bold text-2xl">${item.price}</p>
        <div
          className={`w-4 h-4 border rounded-sm flex items-center justify-center ${
            cartItem ? "border-red-500" : "border-green-500"
          }`}
        >
          <div
            className={`h-2.5 w-2.5 rounded-full ${
              cartItem ? "bg-red-500" : "bg-green-500"
            }`}
          ></div>
        </div>
      </div>

      {/* Quantity & Add Button */}
      <div className="flex items-center justify-between mt-3">
        {/* Quantity Controls */}
        <div className="flex items-center w-full">
          {/* Decrease */}
          <button
            onClick={() => quantity > 0 && decreaseQty(item.id)}
            className="w-10 h-10 flex justify-center items-center bg-white-200 rounded-full border border-gray-300 text-black-500 font-bold"
          >
            -
          </button>

          {/* Number */}
          <span className="px-3">{quantity}</span>

          {/* Increase */}
          <button
            onClick={() => {
              if (!cartItem) {
                addToCart(item);
              } else {
                increaseQty(item.id);
              }
            }}
            className="w-10 h-10 flex justify-center items-center bg-white-200 rounded-full border border-gray-300 text-black-500 font-bold"
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Add / Added Button */}
        <div className="flex w-full justify-end">
          <button
            onClick={() => addToCart(item)}
            className={`px-2 w-full py-2 rounded-lg text-black-500 font-normal ${
              cartItem ? "bg-gray-300" : "bg-red-200 text-red-500 font-semibold"
            }`}
          >
            {cartItem ? " ✔ Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
