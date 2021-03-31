import React, {Fragment} from 'react';
import PostList from "../components/PostList.js";

function BlogOverview() {

    return (
        <Fragment>
            <h2>Blog overview</h2>
            <PostList/>
        </Fragment>
    );
}

export default BlogOverview;