import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id=" dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-5xl font-bold text-purple-500 text-center py-3'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for=" dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-55 bg-base-100 text-base-content">

                    <li><Link to="/dashboard"> My Appoinments</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/history">My  History</Link></li>
                    <li><Link to="/dashboard/users">All user</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;