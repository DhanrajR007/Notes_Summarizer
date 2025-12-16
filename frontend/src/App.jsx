import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="mt-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
