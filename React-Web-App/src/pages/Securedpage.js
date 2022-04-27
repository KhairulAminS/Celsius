import React from 'react';
import Dashboard from '../pages/Dashboard';
import { Outlet } from "react-router-dom";


const Secured = () => {

 return (
   <div>
     <Dashboard/>
   </div>
 );
};

export default Secured;