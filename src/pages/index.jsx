import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';

class IndexRoute extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata;

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <p>hello world</p>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        menu {
          label
          path
        }
      }
    }
  }
`;
