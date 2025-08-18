import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { getProfile } from "./services/auth.mjs";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Product from "./components/Products/Product.jsx";
import Employees from "./components/Employees/Employees.jsx";
import Transactions from "./components/Transactions/Transactions.jsx";
import Overview from "./components/Overview/Overview.jsx";
import Daily from "./components/Daily/Daily.jsx";
import Monthly from "./components/Monthly/Monthly.jsx";
import Breakdown from "./components/Breakdown/Breakdown.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/Login/Login.jsx";
import NewProduct from "./components/NewProduct/NewProduct.jsx";
import EditProduct from "./components/EditRoute/EditProduct.jsx";
import NewEmployee from "./components/NewEmployee/NewEmployee.jsx";
import EmployeeInfo from "./components/Employees/EmployeeInfo.jsx";
import EmployeeEdit from "./components/Employees/EmployeeEdit.jsx";
import Signup from "./pages/Login/Signup.jsx";
import HomeDashboard from "./components/Dashboard/HomeDashboard.jsx";
import UserContext from "./context/user/UserContext.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setUser } = useContext(UserContext);
  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };

  // Persist login after page refresh
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        if (response.message === "Unauthorized") {
          setUser(null);
        } else {
          setUser(response);
        }
      } catch (error) {
        setUser(null);
      }
    };
    fetchProfile();
  }, []);


  return (
      <Router>
      <div className="d-flex">
        {isSidebarOpen&&<Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>}
        <div className="body">
          <Navbar toggleSidebar={toggleSidebar}/>
              <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/products/new" element={<NewProduct/>}></Route>
                <Route path="/products/edit/:id" element={<EditProduct/>}></Route>
                <Route path="/product/view/:id" element={<Dashboard/>}></Route>
                <Route path="/products" element={<Product/>}></Route>
                <Route path="/employees" element={<Employees/>}></Route>
                <Route path="/employees/:id" element={<EmployeeInfo/>}></Route>
                <Route path="/employees/new" element={<NewEmployee/>}></Route>
                <Route path="/employees/edit/:id" element={<EmployeeEdit/>}></Route>
                <Route path="/transactions" element={<Transactions/>}></Route>
                <Route path="/home" element={<HomeDashboard/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/daily" element={<Daily/>}></Route>
                <Route path="/monthly" element={<Monthly/>}></Route>
                <Route path="/breakdown" element={<Breakdown/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
              </Routes>
          <Footer/>
        </div>
      </div>
      </Router>
  );
}

export default App;
