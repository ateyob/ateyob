import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/Product/Product";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />

          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<User />} />
          <Route path="/newproduct" element={<User />} />
          <Route path="/product" element={<Product />} />
         
        </Routes>
      </div>
    </Router>
  );
}
export default App;
