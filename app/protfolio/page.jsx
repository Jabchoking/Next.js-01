import React, { memo } from 'react';
import styles from './Protfolio.module.css'
import Folio from '@/components/Folio';

const datalist = [
    {id :1 , title : '프로젝트 1' , imgurl : '/folio/img01.jpg',desc : '설명'},
    {id :2 , title : '프로젝트 2' , imgurl : '/folio/img02.jpg',desc : '설명'},
    {id :3 , title : '프로젝트 3' , imgurl : '/folio/img03.jpg',desc : '설명'}
]

const Protfolio = memo(() => {
    return (
        <section id="container" className={styles.protfolio}  >
            <div className="inner">
                <h2>protfolio</h2>
                <div className={styles.list} >
                    {datalist.map(i=> <Folio key={i.id} i={i} />)}
                </div>
            </div>
        </section>
    );
});

export default Protfolio;