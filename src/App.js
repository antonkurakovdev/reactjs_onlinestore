import './styles/layout.scss'
import Category from './pages/Category/Category'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import NotFound from './pages/NotFound/NotFound'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import TopPanel from './layout/TopPanel/TopPanel'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="wrapper">
        <TopPanel />
        <Header />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/catalog" element={<Category />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
