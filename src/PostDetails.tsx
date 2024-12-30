import { useParams } from "react-router-dom";

function PostDetails() {
    const { postId } = useParams();
    const posts = {
        1: {
            title: "Пост 1",
            content: "Контент поста 1. Это пример описания поста.",
        },
        2: {
            title: "Пост 2",
            content: "Контент поста 2. Это другой пример описания поста.",
        },
    };

    const post = posts[postId];

    if (!post) {
        return <div>Пост не найден</div>;
    }

    return (
        <div className="post-details-container p-6">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700">{post.content}</p>
        </div>
    );
}

export default PostDetails;
