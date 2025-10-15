import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login";

  return (
    <>
      {!hideLayout && <Header />}

      <main className="p-4 d-flex justify-content-center align-items-center flex-column">
        <Routes>
          <Route path="/login" element={<Login />} />
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