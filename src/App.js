import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import OrdersList from "./pages/OrdersList/OrdersList";
import Orders from "./pages/Orders/Orders";
import AddCategory from "./pages/AddCategory/AddCategory";


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
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/product" element={<Product />} />
          
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/order/:orderId" element={<Orders />} />
          <Route path="/addcategory" element={<AddCategory />} />
         
        </Routes>
      </div>
    </Router>
  );
}
export default App;
