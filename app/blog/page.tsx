import React from 'react';
import { BreadCrumb } from '@/components/breadcrumb/BreadCrumb';
import BlogPageContent from '@/components/blog/BlogPageContent';
import ClientLayout from "@/components/layouts/ClientLayout";

const Blog = () => {
    return (
        <ClientLayout>
            {/* Breadcrumb with custom background image */}
            <BreadCrumb
                pageTitle="Blog"
                breadcrumb="blog"
                backgroundImage="/images/background/blog-cover.jpg" // ✅ Ensure this image exists in /public
            />

            {/* Blog Content */}
            <BlogPageContent />
        </ClientLayout>
    );
};

export default Blog;
