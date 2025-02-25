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
import Invoicing from "./pages/invoicing";
import Masters from "./pages/Masters";
import Role from "./pages/Role";
import Company from "./pages/Company";
import AddEmployee from "./pages/AddEmployee";
import Attendence from "./pages/Attendence";
import Projects from "./pages/Projects";
import EditEmployee from "./pages/EditEmployee";

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
        <Route exact path='/invoicing' element={<Protected_routes Component={Invoicing} />} />
        <Route exact path='/masters' element={<Protected_routes Component={Masters} />} />
        <Route exact path='/roles-privileges' element={<Protected_routes Component={Role} />} />
        <Route exact path='/company' element={<Protected_routes Component={Company} />} />
        <Route exact path='/add-employee' element={<Protected_routes Component={AddEmployee} />} />
        <Route exact path='/attendence' element={<Protected_routes Component={Attendence} />} />
        <Route exact path='/projects' element={<Protected_routes Component={Projects} />} />
        <Route exact path='/edit-employee' element={<Protected_routes Component={EditEmployee} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
