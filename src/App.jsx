 import All from "./components/All";
import {Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Page from "./components/Page";
import Sight from "./components/Sight";
import Target from "./components/Target";

 const App = () => {
  return (
    <main className="bg-transparent">

      <Routes>
    <Route path="/" element={<Layout/>}>
   <Route index element={<Target/>}/>
       <Route path="products" element={<Page/>}/>
       <Route path="apple" element={<All/>}/>
     </Route>
   </Routes>
    </main>
  );

};

export default App;