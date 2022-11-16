import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutLineIcon from "@mui/icons-material/DeleteOutline";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

import Navbar from "./Pages/Navbar";
import Navbar1 from "./Pages/NavBar1";
import Login from "./Pages/Login";
import Signup from "./Pages/signup";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Employee from "./Pages/Employee/Employee";
import Layout from "./Pages/Layout";
import Newuser from "./Pages/Newuser";
import Edit from "./Pages/Edit";
import Details from "./Pages/Details";
import Register from "./Pages/Employee/Register";
import Learn, { Car, Garage } from "./Pages/Learn";
import Department from "./Pages/Department/Department";
import DepartRegister from "./Pages/Department/DepartRegister";
import DepartEdit from "./Pages/Department/DepartEdit";
import DepartDetails from "./Pages/Department/DepartDetails";
import EmployeeView from "./Pages/Employee/EmployeeView";
import EmployeeDetails from "./Pages/Employee/EmployeeDetails";
import EmpRegister from "./Pages/Employee/EmpRegister";
import EmpEdit from "./Pages/Employee/EmpEdit";

function App() {
  return (
    <div className="Main">
      {/* <Home /> */}
      {/* <Navbar1 /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/home" element={[<Home></Home>, <Navbar1></Navbar1>]} />
          <Route path="/about" element={<About></About>} />
          <Route
            path="/employee"
            element={[<Employee></Employee>, <Home></Home>, <Navbar1 />]}
          />
          <Route path="/learn" element={<Learn></Learn>} />
          <Route path="/newuser" element={<Newuser></Newuser>} />
          <Route path="/edit/:id" element={<Edit></Edit>} />
          <Route path="/departedit/:id" element={<DepartEdit></DepartEdit>} />
          <Route path="/details/:id" element={<Details></Details>} />
          <Route
            path="/departdetails/:id"
            element={<DepartDetails></DepartDetails>}
          />
          <Route path="/register" element={<Register></Register>} />
          <Route
            path="/department"
            element={[
              <Department></Department>,
              <Home></Home>,
              <Navbar1></Navbar1>,
            ]}
          />
          <Route
            path="/deptregister"
            element={<DepartRegister></DepartRegister>}
          />
          <Route path="/empview" element={<EmployeeView></EmployeeView>} />
          <Route
            path="/empdetails/:EmployeeCode"
            element={<EmployeeDetails></EmployeeDetails>}
          />
          <Route path="/empregister" element={<EmpRegister></EmpRegister>} />
          <Route path="/empedit/:id" element={<EmpEdit></EmpEdit>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
