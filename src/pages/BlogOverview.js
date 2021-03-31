import React, {Fragment} from 'react';
import PostList from "../components/PostList.js";
import Posts from '../data/posts.json';


function BlogOverview() {


    // const [isAuthenticated, toggleIsAuthenticated] = useState(false)
    return (
        <Fragment>
            <h2>Blog overview</h2>
            <div>

            </div>
            <PostList/>
        </Fragment>
    );
}

export default BlogOverview;