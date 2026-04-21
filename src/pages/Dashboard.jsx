import { useState } from "react";
import Sidebar from "../components/Sidebar";
import OrderPanel from "../components/OrderPanel";
import SaveOrders from "../components/SaveOrders";
import FoodCard from "../components/FoodCard";
import menuData from "../data/menuData";
import { Search } from "lucide-react";
import { Check } from "lucide-react";

const categories = [
  { name: "All", count: 53 },
  { name: "Starters", count: 35 },
  { name: "Main Course", count: 20 },
  { name: "Side Dishes", count: 15 },
  { name: "Desserts", count: 10 },
];

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filters, setFilters] = useState({
    veg: false,
    nonVeg: false,
    egg: false,
  });

  const toggleFilter = (type) => {
    setFilters((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // Filter logic
  const filteredItems =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow w-4/5">
            <Search size={20} className="text-gray-400 mr-2" />
            <input placeholder="Search food..." className="outline-none" />
          </div>
        </div>

        {/* 🔥 CATEGORY FILTERS */}
        <div className="flex gap-4 mt-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition
        ${
          selectedCategory === cat.name
            ? "bg-red-50 border-red-300 text-red-500"
            : "bg-white border-gray-30 text-gray-70 hover:bg-gray-100"
        }`}
            >
              {/* Text */}
              <span>{cat.name}</span>

              {/* 🔢 Number Badge */}
              <span
                className={`text-xs px-2 py-0.5 rounded-md
          ${
            selectedCategory === cat.name
              ? "bg-red-200 text-red-600"
              : "bg-gray-200 text-gray-600"
          }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* 🟢 Filters */}
        <div className="flex gap-6 mt-3 text-sm text-gray-700">
          {/* Veg */}
          <label className="flex items-center gap-2 cursor-pointer">
            {/* 1️⃣ REAL CHECKBOX */}
            <input
              type="checkbox"
              checked={filters.veg}
              onChange={() => toggleFilter("veg")}
              className="w-4 h-4 cursor-pointer"
            />

            {/* 2️⃣ COLOR BOX (ALWAYS VISIBLE) */}
           <div className="w-4 h-4 border-green-500 border rounded-sm flex items-center justify-center">
              <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div>
            </div>


            {/* 3️⃣ TEXT */}
            <span>Veg</span>
          </label>

          {/* Non Veg */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.nonVeg}
              onChange={() => toggleFilter("nonVeg")}
              className="w-4 h-4 cursor-pointer"
            />

            <div className="w-4 h-4 border-red-500 border rounded-sm flex items-center justify-center">
              <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>
            </div>


            <span>Non Veg</span>
          </label>

          {/* Egg */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.egg}
              onChange={() => toggleFilter("egg")}
              className="w-4 h-4 cursor-pointer"
            />

            <div className="w-4 h-4 border-yellow-500 border rounded-sm flex items-center justify-center">
              <div className="h-2.5 w-2.5 bg-yellow-500 rounded-full"></div>
            </div>

            <span>Egg</span>
          </label>
        </div>
        {/* Food Grid */}
        <div className="grid grid-cols-3 gap-5 overflow-y-auto">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
         <SaveOrders />
      </div>
     
      <OrderPanel />
    </div>
  );
};

export default Dashboard;
