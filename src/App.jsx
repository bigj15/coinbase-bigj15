import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AssetDetail from "./pages/AssetDetail";
import Learn from "./pages/Learn";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import AccountType from "./components/layout/AccountType";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/asset-details" element={<AssetDetail />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/account-type" element={<AccountType />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}