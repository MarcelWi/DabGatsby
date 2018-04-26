import React from 'react';
import Link from 'gatsby-link';
import Menu from '../Menu';
import './style.scss';

class Sidebar extends React.Component {
    render() {
        const { menu } = this.props.data.site.siteMetadata;
        const authorBlock = (
            <div>
                <Link to="/">
                    <span>Logo</span>
                </Link>
            </div>
        );

        return (
            <div className="sidebar">
                <div className="sidebar__inner">
                    <div className="sidebar__author">
                        {authorBlock}
                    </div>
                    <div>
                        <Menu data={menu} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;