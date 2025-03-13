 import  Route1 from "./components/Route1";
import {Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import  Route2 from "./components/Route2";
import Target from "./components/Target";

 const App = () => {
  return (
    <main className="">
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="store" element={<Route1/>}/>
        <Route path="products" element={<Route2/>}/>
        <Route index element={<Target/>}/>
     </Route>
   </Routes>
    </main>
    
  );

};

export default App;
