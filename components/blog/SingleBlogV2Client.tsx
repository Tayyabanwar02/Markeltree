'use client';

import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";

type itemData = {
    id: number;
    date: string;
    thumb: string;
    author: string;
    title: string;
    text: string;
    btnText: string;
    comments: string;
}

const SingleBlogV2 = ({ item, index } : { item: itemData; index: number } ) => {
    const { id, date, thumb, author, title, text, btnText, comments } = item
    const delay = index * 0.2;

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay}}
            className="blog-post-two wow fadeInUp"
        >
            <div className="blog-image">
                <Link href={`/blog-details/${id}`}>
                    <Image src={thumb} width={416} height={274} alt="blog" />
                </Link>
                <div className="blog-date">
                    <span>{date}</span>
                </div>
            </div>
            <div className="blog-content">
                <div className="blog-meta">
                    <span><i className="far fa-user"/> By <Link href="#">{author}</Link></span>
                    <span><i className="far fa-comments"/> {comments} Comments</span>
                </div>
                <h4 className="blog-title">
                    <Link href={`/blog-details/${id}`}>{title}</Link>
                </h4>
                <p>{text}</p>
                <Link href={`/blog-details/${id}`} className="theme-btn">{btnText} <i className="fas fa-angle-double-right"/></Link>
            </div>
        </motion.div>
    );
};

export default SingleBlogV2;
