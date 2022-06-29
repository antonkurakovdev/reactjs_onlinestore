import './styles/layout.scss'
import Categories from './pages/Categories/Categories'
import Products from './pages/Products/Products'
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
          <Route path="/" element={<Categories />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
