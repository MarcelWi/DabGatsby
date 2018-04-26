import React from "react"
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import '../assets/scss/init.scss';

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
                        <p>Hello World</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexRoute;

export const query = graphql`
  query AboutQuery {
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
`
// export default ({ data }) =>
//     <div>
//         <h1>
//             About {data.site.siteMetadata.title}
//         </h1>
//         <p>
//             We're the only site running on your computer dedicated to showing the best
//             photos and videos of pandas eating lots of food.
//         </p>
//     </div>
//
// export const query = graphql`
//   query AboutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `