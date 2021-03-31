import React from 'react';
import PostData from "../data/posts.json";
import {useParams
} from "react-router-dom";


function BlogPost () {

    const {idUrl} = useParams();
    const singlePost = PostData[`${idUrl}`]

    return(
        <div className="individualPosts">
            <h2>{singlePost.title}</h2>
            <h3>{singlePost.date}</h3>
            <h3>{singlePost.id}</h3>
            <p>{singlePost.content}</p>
        </div>

    );
}

export default BlogPost;