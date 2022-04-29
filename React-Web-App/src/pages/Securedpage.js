import React from 'react';
import Dashboard from '../pages/DashboardPage';
import { Outlet } from "react-router-dom";


const Secured = () => {

 return (
   <div>
     <Dashboard/>
   </div>
 );
};

export default Secured;