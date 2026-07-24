import { Routes, Route } from "react-router-dom"
import Layout  from "@/layout/Layout"
import DashBoard from "@/pages/dashboard/DashBoard"
import Orders from "@/pages/orders/Orders"
import Products from "@/pages/products/Products"
import Reports from "@/pages/reports/Reports"
import Settings from "@/pages/settings/Settings"
import Collections from "@/pages/collections/Collections"
import Employes from "@/pages/employes/Employes"

const App = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="/orders"  element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/employes" element={<Employes />} />
        </Route>
    </Routes>
  )
}

export default App