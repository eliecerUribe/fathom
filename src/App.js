import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
