import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import ForgotPass from "./pages/ForgotPass";

function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgotpassword";

  return (
    <>
      {!hideLayout && <Header />}

      <main className="p-4 d-flex justify-content-center align-items-center flex-column">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={< Register />} />
          <Route path="/forgotpassword" element={< ForgotPass />} />

        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}