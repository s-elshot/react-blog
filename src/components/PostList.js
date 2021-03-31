
import React, {Fragment} from "react";
import Posts from '../data/posts.json';
import {NavLink} from "react-router-dom";


function PostList() {

    <NavLink to="/" exact activeClassName="active-link">Home page</NavLink>

    return (
        <Fragment>
            <section>
                {Posts.map((postDetails) => {
                     return <ul>
                                <li>
                                    <NavLink to={`/blog/${postDetails.id}`}>{postDetails.title}</NavLink>
                                </li>
                            </ul>
              })}
          </section>
        </Fragment>
    );
}

export default PostList;
