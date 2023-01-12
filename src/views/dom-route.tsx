import { Routes, Route } from "react-router-dom";
import Home from './home/home';
import EmployeeList from './employeeList/employeeList';

const Router = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/employees" element={<EmployeeList />} />
               <Route path="*" element={<h1>404</h1>} />
          </Routes>
     )
};

export default Router;