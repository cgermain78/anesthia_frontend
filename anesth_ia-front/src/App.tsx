import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import ForgotPass from "./pages/ForgotPass";
import Dashboard from "./pages/Dashboard";

function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgotpassword";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {!hideLayout && <Header />}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPass />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}