import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Customer } from "./pages/Customer";
import { NewCustomer } from "./pages/NewCustomer";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/customer" element={<Customer />} />
        <Route path="/newCustomer" element={<NewCustomer />} />
      </Routes>
    </Router>
  );
}
