import React from 'react';
import Link from "next/link";
import SocialShare from '../slider/SocialShare';


type postData = {
    id: number;
    title: string;
    category: string;
    date: string;
    comments: string;
    text: string;
    btnText: string;
    btnIcon: string;
}

const SingleBlogPost = ({ post } : { post: postData } ) => {
    const { id, title, category, date, comments, text, btnText, btnIcon } = post

    return (
        <>
            <div className="te-post-content-wrapper">
                <h3 className="te-post-title">
                    <Link href={`/blog-details/${id}`}>{title}</Link>
                </h3>
                <div className="te-post-meta">
                    <span><i className="fa-light fa-folder-open"></i>{category}</span>
                    <span><i className="fa-regular fa-clock"></i>{date}</span>
                    <span><Link href="#"><i className="fa-regular fa-comments"></i> {comments} Comments</Link></span>
                </div>
                <div className="te-post-content">
                    <p>{text}</p>
                </div>
                <div className="te-read-more">
                    <Link href={`/blog-details/${id}`} className="te-theme-btn">{btnText}<i className={btnIcon}></i></Link>
                    <div className="te-social-share">
                        <span className="te-social-share-title">share</span>
                        <SocialShare />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogPost;