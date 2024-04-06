import { Route, Routes } from "react-router-dom";
import { useThemeHook } from "./GlobalComponent/ThemeProvider";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Clients from "./Pages/Clients";
import ProductsClient from "./Pages/ProductsClients";
import ClientDetail from "./Pages/ClientDetail";
import Carts from './Pages/Carts';
import Footer from "./Components/Footer";

function App() {
  const[theme] = useThemeHook();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients/:city" element={<Clients />} />
        <Route path="/productsClient/:id" element={<ProductsClient />} />
        <Route path="/clientDetails/:clientId"  element={<ClientDetail />}/>
        <Route path="/carts" element={<Carts />}/>
      </Routes>
      
    </div>
  );
}

export default App;
