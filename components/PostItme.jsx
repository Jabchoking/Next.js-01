import React, { memo } from 'react';

const PostItme = memo(({i}) => {
    return (
        <li>
            <h3>{i.title}</h3>
            <p> {i.body} </p>
        </li>
    );
});

export default PostItme;