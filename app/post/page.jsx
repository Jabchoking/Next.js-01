import React, { memo } from 'react';
import {use} from 'react'
import styles from './Post.module.css'
import PostItme from '@/components/PostItme';

const getdata = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}

const Post = memo(() => {
    const post = use(getdata())
    return (
        <section className={styles.list}>
            <div className="inner">
                <h2>비동기처리 post</h2>
                <ul>
                    {post.map(i=>  <PostItme key={i.id} i={i} />)}
                </ul>
            </div>
        </section>
    );
});

export default Post;