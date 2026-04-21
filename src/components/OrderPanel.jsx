import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Plus, Minus, Wallet, CreditCard, QrCode } from "lucide-react";


const OrderPanel = () => {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="w-80 bg-white p-5 shadow-xl flex flex-col rounded-l-2xl">
      <div className="mt-2 border-b pb-3">
        <h2 className="text-xl font-bold mt-4 py-2">🧾 Order List</h2>
      </div>
      <div className="flex gap-3 mt-4 bg-white rounded-lg mb-4 p-2">
        <h2 className="border rounded-lg p-2 bg-red-100 text-red-700  text-center cursor-pointer w-15">
          Dining{" "}
        </h2>
        <h2 className="border rounded-lg p-2 text-black  text-center cursor-pointer w-15">
          Take Away{" "}
        </h2>
        <h2 className="border rounded-lg p-2 text-black  text-center cursor-pointer">
          Delivery{" "}
        </h2>
      </div>

      <div className="gap-3 mt-2 bg-white rounded-lg mb-4 p-2">
        <h2 className="font-bold">Choose Table </h2>
        <select className="border rounded p-1 h-10 w-full">
          <option>Table 1</option>
          <option>Table 2</option>
          <option>Table 3</option>
        </select>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 bg-white p-3 rounded-xl border shadow-sm"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-28 rounded-lg object-cover"
            />

            {/* Info */}
            <div className="flex-1">
              <p className="font-semibold text-sm">{item.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-green-600 font-bold">${item.price}</p>
                <div className="w-4 h-4 border-red-500 border rounded-sm flex items-center justify-center">
                  <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-7 h-7 flex items-center justify-center border rounded-full"
                >
                  <Minus size={20} />
                </button>

                <span className="text-sm">{item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-7 h-7 flex items-center justify-center border rounded-full"
                >
                  <Plus size={20} />
                </button>
                <button className="bg-red-200 hover:text-red-700">🗑</button>
              </div>
            </div>

            {/* Delete Button */}
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-3 gap-3 flex flex-col">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Sub Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Tax 5%</span>
            <span>${(subtotal * 0.05).toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total Amount</span>
            <span>${(subtotal * 1.05).toFixed(2)}</span>
          </div>
        </div>

        <div className="flex gap-3 mt-4 bg-gray-50 rounded-lg p-2">
          {/* Cash */}
          <div className="flex items-center justify-center gap-2 border rounded-lg px-3 py-2 bg-red-100 text-red-600 cursor-pointer w-24">
            <Wallet size={16} />
            <span>Cash</span>
          </div>

          {/* Card */}
          <div className="flex items-center justify-center gap-2 border rounded-lg px-3 py-2 bg-white text-black cursor-pointer w-24">
            <CreditCard size={16} />
            <span>Card</span>
          </div>

          {/* QR Code */}
          <div className="flex items-center justify-center gap-2 border rounded-lg px-3 py-2 bg-white text-black cursor-pointer w-28">
            <QrCode size={16} />
            <span>QR</span>
          </div>
        </div>
        <div className="flex gap-3 mt-4 rounded-lg p-2">
          <button className="w-full bg-gray-200 text-black py-2 rounded-lg shadow hover:bg-red-600 hover:text-white">
            Save
          </button>
          <button className="w-full bg-red-600 text-white py-2 rounded-lg shadow hover:bg-gray-500 hover:text-black">
            Generate Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
