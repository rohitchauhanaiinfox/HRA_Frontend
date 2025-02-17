import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import Login from "./auth/Login";
import UnProtected_routes from "./common/unprotected_routes";
import Protected_routes from "./common/protected_routes";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Employee from "./pages/Employee";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import Customer from "./pages/Customer";
import TimeSheet from "./pages/Timesheet";
import PurchaseOrder from "./pages/PurchaseOrders";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>

        <Route exact path='/' element={<UnProtected_routes Component={Login} />} />
        <Route exact path='/forgot' element={<UnProtected_routes Component={ForgotPassword} />} />
        <Route exact path='/reset-password' element={<UnProtected_routes Component={ResetPassword} />} />
        <Route exact path='/dashboard' element={<Protected_routes Component={Dashboard} />} />
        <Route exact path='/profile' element={<Protected_routes Component={Profile} />} />
        <Route exact path='/employee' element={<Protected_routes Component={Employee} />} />
        <Route exact path='/customer' element={<Protected_routes Component={Customer} />} />
        <Route exact path='/purchaseorder' element={<Protected_routes Component={PurchaseOrder} />} />
        <Route exact path='/timesheet' element={<Protected_routes Component={TimeSheet} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
