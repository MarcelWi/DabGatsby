import React from 'react';
import Link from 'gatsby-link';
import Menu from '../Menu';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    const { menu } = this.props.data.site.siteMetadata;

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <Link to="/">
            <span>Logo</span>
          </Link>
          <Menu data={menu} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
