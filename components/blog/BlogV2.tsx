'use client';

import React from 'react';
import BlogV2Data from '@/jsonData/blog/BlogV2Data.json'
import dynamic from 'next/dynamic';

const SingleBlogV2 = dynamic(() => import('./SingleBlogV2Client'), { ssr: true });

const BlogV2 = () => {
    return (
        <>
            <div className="latest-posts-area style-2">
                <div className="circle-drop-shadow"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="te-section-title justify-content-center text-center">
                                <div className="te-section-content">
                                    <div>
                                        <span className="short-title">Latest Blog</span>
                                    </div>
                                    <h2 className="title">Elevating Businesses through <br /> Cutting-Edge IT</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {BlogV2Data.slice(0, 3).map((item, index) =>
                            <SingleBlogV2 key={item.id} item={item} index={index} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV2;