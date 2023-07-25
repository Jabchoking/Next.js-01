import React, { memo } from 'react';
import Image from 'next/image';
import styles from './page.module.css'
import Main from './main/page';
const Home = memo(() => {
  return (
    <main id='container'className={styles.main} >
      <Main/>
    </main>
  );
});

export default Home;