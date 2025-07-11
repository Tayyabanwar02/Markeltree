import React from 'react';
import Link from "next/link";
import Image from "next/image";

type postData = {
    thumb: string;
    title: string;
    category: string;
    icon: string;
}

const SingleRecentPost = ({ post } : { post: postData } ) => {
    const { thumb, title, category, icon } = post

    return (
        <>
            <li>
                <div className="te-latest-post-thumb">
                    <Image
                        src={`/images/blog/${thumb}`}
                        alt="image"
                        width={90}
                        height={90}
                    />
                </div>
                <div className="te-latest-post-desc">
                    <h3 className="te-latest-post-title">
                        <Link href="/blog-details/1">{title}</Link>
                    </h3>
                    <span className="te-latest-post-meta"><i className={icon}></i>{category}</span>
                </div>
            </li>
        </>
    );
};

export default SingleRecentPost;