import { useState } from 'react';

import { LeftPanel } from './components/leftPanel/LeftPanel';
import { RightPanel } from './components/RightPanel';

import './App.css';


function App() {
  const [cart, setCart] = useState([])
  
  const addProductToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1}])
  }

  return (
    <div className="App">
      <LeftPanel addProductToCart={addProductToCart} />
      <RightPanel cart={cart} />    
    </div>
  );
}

export default App;
