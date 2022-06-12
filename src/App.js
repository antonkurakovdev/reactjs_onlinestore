import './common.scss';
import Categories from './Pages/Categories/Categories';
import Products from './Pages/Products/Products';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
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

export default App;
