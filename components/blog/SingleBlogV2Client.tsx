'use client';

import React from 'react';
import Link from "next/link";
import Image from "next/image";

interface BlogItem {
    id: number;
    date: string;
    thumb: string;
    author: string;
    comments: string;
    title: string;
    text: string;
    blogPostLink: string;
    btnText: string;
}

interface SingleBlogV2Props {
    item: BlogItem;
    index: number;
}

const SingleBlogV2: React.FC<SingleBlogV2Props> = ({ item, index }) => {
    return (
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={`${index * 100}`}>
            <div className="te-blog style-2">
                <div className="blog-thumb">
                    <Link href={`/blog-details/${item.id}`}>
                        <Image src={item.thumb} alt="blog thumb" width={416} height={289} />
                    </Link>
                </div>
                <div className="blog-content">
                    <div className="blog-meta">
                        <ul>
                            <li>
                                <i className="fa-regular fa-calendar"></i>
                                <span>{item.date}</span>
                            </li>
                            <li>
                                <i className="fa-regular fa-user"></i>
                                <span>{item.author}</span>
                            </li>
                            <li>
                                <i className="fa-regular fa-comments"></i>
                                <span>{item.comments}</span>
                            </li>
                        </ul>
                    </div>
                    <h4 className="blog-title">
                        <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                    </h4>
                    <p>{item.text}</p>
                    <Link href={`/blog-details/${item.id}`} className="read-more">
                        {item.btnText} <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogV2;
