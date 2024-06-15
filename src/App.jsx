import { useEffect } from "react";
import "./App.css";
import Container from "./components/Container/Container.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

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
    <div className="d-flex">
      <Sidebar />
      <div className="body">
        <Navbar />
        <Container />
      </div>
    </div>
  );
}

export default App;
