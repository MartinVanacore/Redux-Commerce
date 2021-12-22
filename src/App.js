import './App.css';
import { Header } from './container/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ProductList } from './container/ProductList';
import { ProductDetail } from './container/ProductDetail';

function App() {
  return (
    <div>
      <Router>
          <Header />

          <Routes>
            

              <Route exact path="/"  element= { <ProductList /> } />
              
              <Route path="/products/:productId" exact element={ <ProductDetail />} />

              <Route>404 not found! </Route>
            
            
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
