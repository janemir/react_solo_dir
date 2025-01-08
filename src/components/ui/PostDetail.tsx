import React from "react";
import avatar from "../../assets/avatar.svg";
import iconButtons from "../../assets/icon buttons.svg";

type Post = {
    id: number;
    title: string;
    date: string;
    email: string;
    content: string;
};

type PostDetailProps = {
    post: Post;
    activeTab: string;
    currentPostId: number | null;
    selectedPostId: number | null;
    onPostClick: (post: Post) => void;
    onEditPostClick: () => void;
};

const PostDetail: React.FC<PostDetailProps> = ({ post, activeTab, onPostClick, onEditPostClick }) => { /* currentPostId, selectedPostId, */
    return (
        <article
            key={post.id}
            className="post bg-white p-6 rounded shadow hover:bg-gray-200 transition-colors"
            onClick={() => onPostClick(post)}
        >
            <div className="tag flex items-center space-x-4">
                <img src={avatar} alt="Аватар" className="h-10 w-10 rounded-full" />
                <div>
                    <p className="text-gray-700">{post.email}</p>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
            </div>
            <h2 className="font-inter text-h4 font-h4 text-left">{post.title}</h2>
            <section className="post-content mt-4"></section>
            <p className="text-sm text-gray-600 mt-2">{post.content}</p>
            <div className="mt-4">
                <img src={iconButtons} alt="icon buttons" className="h-6" />
            </div>
            {activeTab === "drafts" && (
                <div className="post-actions-container flex items-center gap-2 w-[313px] h-[40px] mt-4">
                    <button
                        className="publish-button whitespace-nowrap flex items-center justify-center w-[167px] h-[40px] px-4 py-2 gap-2 bg-gray-100 text-gray-700
                        rounded-tl-md rounded-bl-md hover:bg-[#0F172A] hover:text-[#F1F5F9] focus:bg-[#0F172A]
                        focus:text-[#F1F5F9] transition-all duration-200"
                        onClick={(e) => {
                            e.stopPropagation(); 
                            console.log("Опубликовать пост", post.id);
                        }}
                    >
                        Опубликовать
                    </button>
                    <button
                        className="edit-button whitespace-nowrap flex items-center justify-center w-[128px] h-[40px] px-4 py-2 bg-gray-100 text-gray-700
                        rounded-tr-md rounded-br-md hover:bg-[#0F172A] hover:text-[#F1F5F9] focus:bg-[#0F172A]
                        focus:text-[#F1F5F9] transition-all duration-200"
                        onClick={(e) => {
                            e.stopPropagation(); 
                            onEditPostClick();
                        }}
                    >
                        Редактировать
                    </button>
                </div>
            )}
        </article>
    );
};

export default PostDetail;
