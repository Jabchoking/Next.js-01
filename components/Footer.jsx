import React, { memo } from 'react';
import styles from './Footer.module.css'
const Footer = memo(() => {
    return (
        <footer id='footer' className={styles.footer}>
            <div className="inner">
                <h2>저작권</h2>
                <h2>연락처 : ㅇ</h2>
            </div>
        </footer>
    );
});

export default Footer;