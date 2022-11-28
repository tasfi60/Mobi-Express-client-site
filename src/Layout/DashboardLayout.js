import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Allpages/Shared/Header/Header';
import './DashboardLayout.css';

const DashboardLayout = () => {

   
    return (
        <div>
             <Header></Header>
             <Outlet></Outlet>
            
           
            
        </div>
    );
};

export default DashboardLayout;