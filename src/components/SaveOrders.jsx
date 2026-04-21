import React from "react";
import { ClipboardList } from "lucide-react";

const savedOrders = [
  { id: "Order#12354", type: "Dining", name: "Table 1" },
  { id: "Order#12354", type: "Takeaway", name: "Yogesh" },
  { id: "Order#12354", type: "Delivery", name: "Mano" },
  { id: "Order#12354", type: "Dining", name: "Table 5" },
  { id: "Order#12355", type: "Delivery", name: "Anna" },
  { id: "Order#12356", type: "Takeaway", name: "Ravi" },
  { id: "Order#12357", type: "Dining", name: "Table 3" },
  { id: "Order#12358", type: "Delivery", name: "Sophie" },
];

const SaveOrders = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md mt-6 ">
      {/* 🔥 Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <ClipboardList size={18} className="text-gray-600" />
          Saved Orders
        </h2>
      </div>

      {/* 🧾 Orders Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-3 max-h-52 overflow-y-auto">
        {savedOrders.map((order, index) => (
          <div
            key={`${order.id}-${index}`}
            className="border rounded-lg p-3 bg-gray-50 hover:bg-gray-100 cursor-pointer transition shadow-sm"
          >
            {/* Order ID */}
            <p className="text-sm font-semibold">{order.id}</p>

            {/* Type with dynamic color */}
            <div className="flex justify-between items-center mt-1">
              {/* Type */}
              <p
                className={`text-xs font-medium ${
                  order.type === "Dining"
                    ? "text-red-500"
                    : order.type === "Delivery"
                      ? "text-red-500"
                      : "text-red-500"
                }`}
              >
                {order.type}
              </p>

              {/* Name */}
              <p className="text-xs text-gray-600">{order.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaveOrders;
