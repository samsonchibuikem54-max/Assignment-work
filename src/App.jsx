// src/App.jsx
import Dashboard from "./pages/Dashboard";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="h-screen">
        <Dashboard />
      </div>
    </CartProvider>
  );
}

export default App;