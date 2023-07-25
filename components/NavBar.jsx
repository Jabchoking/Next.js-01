import React, { memo } from 'react';
import styles from './navBar.module.css'
import Link from 'next/link';
const menulist = [
    {id : 1, title: 'Home' , url : '/'},
    {id : 2, title: 'protfolio' , url : '/protfolio'},
    {id : 3, title: 'About' , url : '/about'},
    {id : 4, title: 'Post' , url : '/post'},
    {id : 5, title: 'Contact' , url : '/contact'},
]
const NavBar = memo(() => {
    return (
        <nav className={styles.nav} >
            <ul>
                {menulist.map(i=> <li key={i.id}> <Link href={i.url} > {i.title} </Link> </li>  )}
            </ul>
        </nav>
    );
});

export default NavBar;