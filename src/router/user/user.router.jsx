import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../pages/Home/Home.jsx';
import Detail from '../../pages/Detail/Detail.jsx';
import Watch from '../../pages/watch/watch.jsx';
import Category from '../../pages/category/category.jsx';



const UserRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  </BrowserRouter>
);

export default UserRoutes;