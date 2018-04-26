import React from "react"
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

class IndexRoute extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>DAB Gatsby</title>
                    <meta name="description" content="DAB Gatsby Description" />
                </Helmet>
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