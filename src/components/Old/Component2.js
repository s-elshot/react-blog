import React from 'react';
// import posts from './data/posts.json';
function PageTwo({title,children}) {
    return (
        <section className="componentOne">
            <h1>{title}</h1>
            <p>{children}</p>
        </section>
    );
}

export default PageTwo