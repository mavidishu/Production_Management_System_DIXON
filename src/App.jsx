import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Product from "./components/Products/Product.jsx";
import Customers from "./components/Customers/Customers.jsx";
import Transactions from "./components/Transactions/Transactions.jsx";
import Overview from "./components/Overview/Overview.jsx";
import Daily from "./components/Daily/Daily.jsx";
import Monthly from "./components/Monthly/Monthly.jsx";
import Breakdown from "./components/Breakdown/Breakdown.jsx";
import Admin from "./components/Admin/Admin.jsx";
import UserState from "./context/user/UserState.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <UserState>
      <Router>
      <div className="d-flex">
        {isSidebarOpen&&<Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>}
        <div className="body">
          <Navbar toggleSidebar={toggleSidebar}/>
              <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/product/view/:id" element={<Dashboard/>}></Route>
                <Route path="/products" element={<Product/>}></Route>
                <Route path="/customers" element={<Customers/>}></Route>
                <Route path="/transactions" element={<Transactions/>}></Route>
                <Route path="/overview" element={<Overview/>}></Route>
                <Route path="/daily" element={<Daily/>}></Route>
                <Route path="/monthly" element={<Monthly/>}></Route>
                <Route path="/breakdown" element={<Breakdown/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
              </Routes>
          <Footer/>
        </div>
      </div>
      </Router>
    </UserState>
  );
}

export default App;
