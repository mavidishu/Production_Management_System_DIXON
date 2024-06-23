import { useEffect } from "react";
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

function App() {
  useEffect(() => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const crossIcon = document.querySelector(".cross-icon");

    const content = document.querySelector(".toggleContent");
    const openSidebar = () =>{
      content.classList.toggle('hidden');
    };
    const closeSidebar = () =>{
      content.classList.toggle('hidden');
    }

    if (hamburgerIcon) {
      hamburgerIcon.addEventListener("click", openSidebar);
    }

    if (crossIcon) {
      crossIcon.addEventListener("click", closeSidebar);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (hamburgerIcon) {
        hamburgerIcon.removeEventListener("click", openSidebar);
      }
      if (crossIcon) {
        crossIcon.removeEventListener("click", closeSidebar);
      }
    };
  }, []);
  return (
    <UserState>
      <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="body">
          <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/products" element={<Product/>}></Route>
                <Route path="/customers" element={<Customers/>}></Route>
                <Route path="/transactions" element={<Transactions/>}></Route>
                <Route path="/overview" element={<Overview/>}></Route>
                <Route path="/daily" element={<Daily/>}></Route>
                <Route path="/monthly" element={<Monthly/>}></Route>
                <Route path="/breakdown" element={<Breakdown/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
              </Routes>
        </div>
      </div>
      </Router>
    </UserState>
  );
}

export default App;
