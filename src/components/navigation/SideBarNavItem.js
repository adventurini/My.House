import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { activeNavItemStyles } from '../../helper-functions/display-functions';

function SideBarNavItem({ navItem: { navTitle, path, icon, target }, location }) {
  return (
    <Link to={path}>
      <div className={activeNavItemStyles(path, location.pathname)} id={target}>
        <div className="dashboard_sidebar_icon">
          <img src={icon} alt={navTitle} title={navTitle} />
        </div>
        <h2 className="dashboard_sidebar_title">{navTitle}</h2>
      </div>
    </Link>
  );
}

export default withRouter(SideBarNavItem);
