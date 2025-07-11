import React from 'react';
import Link from "next/link";
import TagsData from '@/jsonData/widgets/TagsData.json'

const TagsWidget = () => {
    return (
        <>
            <div className="widget te_widget_tag_cloud">
                <div className="te-widget-title">
                    <h4 className="wp-block-heading">Tags</h4>
                </div>
                <div className="tagcloud">
                    {TagsData.map(tag =>
                        <Link href="#" key={tag.id}>{tag.name}</Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default TagsWidget;