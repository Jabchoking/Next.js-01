import React, { memo } from 'react';
import styles from './Header.module.css'
import Link from 'next/link';
import NavBar from './NavBar';
const Header = memo(() => {
    return (
        <header id='header' className={styles.header}>
            <div className="inner">
                <h1><Link href='/' ><img src="/common/logo.svg" alt="" /></Link> </h1>
                <NavBar/>
                <ul className={styles.top_menu}>
                    <li><Link href="/">홈</Link></li>
                    <li><Link href="/email">이메일</Link></li>
                    <li><Link href="/login">로그인</Link></li>
                    <li><Link href="/sitemap">사이트맵</Link></li>
                </ul>
            </div>
        </header>
    );
});

export default Header;