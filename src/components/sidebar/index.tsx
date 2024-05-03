import React from "react";

interface ISidebar {
}

function Sidebar() {
    return <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
            <span className="brand-text font-weight-light">Sistema</span>
        </a>

        <div className="sidebar">

            <nav className="mt-3">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                <li className="nav-item menu-open">
                    <a href="#" className="nav-link active">
                        <i className="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                        Starter Pages
                        <i className="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                        <a href="#" className="nav-link ">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Active Page</p>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link active">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Inactive Page</p>
                        </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>
                    Simple Link
                    <span className="right badge badge-danger">New</span>
                    </p>
                </a>
                </li>
            </ul>
            </nav>
        </div>
    </aside>
}

export default Sidebar;