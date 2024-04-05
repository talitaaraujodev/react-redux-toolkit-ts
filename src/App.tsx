import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <BrowserRouter>
      <div className="flex flex-col h-100 w-100">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <HomePage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
