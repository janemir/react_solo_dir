import React from "react";

type Post = {
    id: number;
    title: string;
    content: string;
    email: string;
    date: string;
};

const SinglePost: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div className="single-post-container p-6 bg-white rounded shadow">
            <div className="tag flex items-center space-x-4">
                <p className="text-gray-700">{post.email}</p>
                <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
            <h2 className="text-2xl font-semibold mt-4">{post.title}</h2>
            <p className="mt-4">{post.content}</p>
        </div>
    );
};

export default SinglePost;
