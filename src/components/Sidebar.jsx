import {
  LayoutGrid,
  ShoppingCart,
  Table,
  Calendar,
  Truck,
  BarChart3,
  Settings,
} from "lucide-react";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const menu = [
    { name: "Menu", icon: <LayoutGrid size={18} /> },
    { name: "Orders", icon: <ShoppingCart size={18} /> },
    { name: "Table Services", icon: <Table size={18} /> },
    { name: "Reservation", icon: <Calendar size={18} /> },
    { name: "Delivery", icon: <Truck size={18} /> },
    { name: "Accounting", icon: <BarChart3 size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-64 bg-gray-50 p-5 flex flex-col border-r
        transform transition-transform duration-300 z-[60]
        ${showSidebar ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static
      `}
    >
      {/* CLOSE BUTTON (MOBILE ONLY) */}
      <button
        onClick={() => setShowSidebar(false)}
        className="lg:hidden mb-4 text-red-500"
      >
        ✕ Close
      </button>

      {/* LOGO */}
      <h1 className="text-xl font-bold mb-8">
        <span className="text-red-500">Cherry</span>
        <span className="text-gray-800">POS</span>
      </h1>

      {/* MENU */}
      <ul className="space-y-2">
        {menu.map((item, index) => (
          <li
            key={item.name}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
              ${
                index === 0
                  ? "bg-red-100 text-red-500"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </li>
        ))}
      </ul>

      {/* FOOTER */}
      <div className="mt-auto bg-white border rounded-lg p-3 text-sm flex justify-between">
        <span className="text-gray-600">Tasty Bites</span>
        <span>⚙️</span>
      </div>
    </div>
  );
};

export default Sidebar;