import React, { memo } from 'react';

const Folio = memo(({i}) => {
    return (
        <article>
            <h3>{i.title}</h3>
            <div>
                <img src={i.imgurl} alt={i.title} />
            </div>
            <p>{i.desc}</p>
        </article>
    );
});

export default Folio;