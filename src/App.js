import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Products from './pages/Products/Products';
import Purchase from './pages/Purchase/Purchase';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AllOrders from './pages/Dashboard/AllOrders/AllOrders';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import AdminRoute from './AdminRoute/AdminRoute';
import MyOrders from './pages/Dashboard/UserDasboard/MyOrders/MyOrders';
import AddReview from './pages/Dashboard/UserDasboard/AddReview/AddReview';
import Payment from './pages/Dashboard/UserDasboard/Payment/Payment';
import MangeReviews from './pages/Dashboard/MangeReviews/MangeReviews';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<Products />} />

          <Route path='dashboard' element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}>
            <Route path='Add-product' element={<AdminRoute>
              <AddProduct />
            </AdminRoute>}> </Route>

            <Route path='manage-product' element={<AdminRoute>
              <ManageProducts />
            </AdminRoute>}> </Route>

            <Route path='all-orders' element={<AdminRoute>
              <AllOrders />
            </AdminRoute>}> </Route>

            <Route path='all-reviews' element={<AdminRoute>
              <MangeReviews />
            </AdminRoute>}> </Route>

            <Route path='make-admin' element={<AdminRoute>
              <MakeAdmin />
            </AdminRoute>}> </Route>

            <Route path="my-order" element={<MyOrders />} />
            <Route path="add-review" element={<AddReview />} />
            <Route path="payment" element={<Payment />} />

          </Route>

          <Route path="purchase/:id" element={<PrivateRoute>
            <Purchase />
          </PrivateRoute>}>
          </Route>
          <Route path="products/purchase/:id" element={<PrivateRoute>
            <Purchase />
          </PrivateRoute>}>
          </Route>
        </Routes>
      </AuthProvider >
    </div >
  );
}

export default App;
