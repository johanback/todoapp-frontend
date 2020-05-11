import React from 'react';
import './Sidebar.css';
import SidebarListButton from './SidebarListButton';

function Sidebar() {
    return (
        <React.Fragment>
            <div className="sidebartitle">
                To Do's
            </div>
            <div>
                <SidebarListButton />
                <SidebarListButton />
                <SidebarListButton />
            </div>
        </React.Fragment>
    )
}

export default Sidebar;