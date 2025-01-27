import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
{/*import { useNavigate } from "react-router-dom";*/ }
import adv from './assets/adv.png';
import PostDetail from './components/ui/PostDetail.tsx';
import Header from './components/ui/Header.tsx';
import Sidebarrr from './components/ui/Sidebarrr.tsx';
import SinglePost from './components/ui/SinglePost.tsx';
import trash from './assets/trash.svg';
import upload from './assets/upload.svg';

type Post = {
    id: number;
    title: string;
    date: string;
    email: string;
    content: string;
};

const posts: Post[] = [
    {
        id: 1,
        title: "Заголовок",
        date: "31 октября",
        email: "pochta@gmail.com",
        content:
            "Повседневная практика показывает, что социально-экономическое развитие способствует подготовке и реализации " +
            "распределения внутренних резервов и ресурсов. Предварительные выводы неутешительны: перспективное планирование " +
            "не даёт нам иного выбора, кроме определения экономической целесообразности принимаемых решений.",
    },
    {
        id: 2,
        title: "Заголовок",
        date: "31 октября",
        email: "pochta@gmail.com",
        content:
            "Повседневная практика показывает, что социально-экономическое развитие способствует подготовке и реализации " +
            "распределения внутренних резервов и ресурсов. Предварительные выводы неутешительны: " +
            "перспективное планирование не даёт нам иного выбора, кроме определения экономической целесообразности принимаемых решений.",
    },
];

function Post() {
    {/*const [currentPost, setCurrentPost] = useState<Post>(posts[0]);*/ }
    const [isTabsVisible, setTabsVisible] = useState(true);
    {/*const [visiblePostButtons, setVisiblePostButtons] = useState<number | null>(null);*/ }
    /*const [activeTab, setActiveTab] = useState<string>("all");*/
    const [isModalOpen, setModalOpen] = useState(false);
    const [isImageModalOpen, setImageModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isEditImageModalOpen, setEditImageModalOpen] = useState(false);
    /*const navigate = useNavigate();*/
    const [activeTab, setActiveTab] = useState<string>("all");
    /*const handleLogout = () => {
        navigate("/");
    };*/

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const currentPost = id ? posts.find((p) => p.id === Number(id)) : null;

    const handlePostClick = (post: { id: number }) => {
        navigate(`/post/${post.id}`);
    };

    const handlePostsClick = () => {
        setTabsVisible(!isTabsVisible);
    };

    {/*const handlePostClick = (post: Post) => {
        setCurrentPost(post);
        setVisiblePostButtons(post.id);
    };*/}

    /*const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };*/

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        navigate("/post"); // Вернуться к списку постов при переключении табов
    };

    /*const handleCreatePostClick = () => {
        setModalOpen(true);
    };*/

    const handleAddImageClick = () => {
        setModalOpen(false);
        setImageModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setImageModalOpen(false);
        setEditModalOpen(false);
        setEditImageModalOpen(false);
    };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setModalOpen(false);
            setImageModalOpen(false);
            setEditModalOpen(false);
            setEditImageModalOpen(false);
        }
    };

    const handlePublishClick = () => {
        setModalOpen(false);
    };

    const handleDraftClick = () => {
        setModalOpen(false);
    };

    const handleImageModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setImageModalOpen(false);
        }
    };

    const handleEditPostClick = () => {
        setEditModalOpen(true);
    };

    const handleAddEditImageClick = () => {
        setEditModalOpen(false);
        setEditImageModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setEditModalOpen(false);
        setEditImageModalOpen(false);
    };

    const handleEditModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setEditModalOpen(false);
        }
    };

    const handleEditImageModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setEditImageModalOpen(false);
        }
    };

    return (
        <div className="container mx-auto w-[1248px]">
            <Header />
            <div className="main-container flex gap-[32px] mt-6">
                <Sidebarrr onPostsClick={handlePostsClick} />
                <main className="w-[768px] ml-[240px]">
                    {isTabsVisible && (
                        <div className="mb-4">
                            <div className="tabs w-[307px] h-[40px] p-1 flex items-center border rounded-md">
                                <button
                                    onClick={() => handleTabClick("all")}
                                    className={`tab-trigger w-[96px] h-[32px] flex items-center justify-center
                                    whitespace-nowrap px-4 py-2 ${activeTab === "all" ? "bg-gray-200" : "bg-white hover:bg-slate-100"} rounded`}
                                >
                                    Все посты
                                </button>
                                <button
                                    onClick={() => handleTabClick("mine")}
                                    className={`tab-trigger w-[100px] h-[32px] flex items-center justify-center
                                    whitespace-nowrap px-4 py-2 ${activeTab === "mine" ? "bg-gray-200" : "bg-white hover:bg-slate-100"} rounded`}
                                >
                                    Мои посты
                                </button>
                                <button
                                    onClick={() => handleTabClick("drafts")}
                                    className={`tab-trigger w-[101px] h-[32px] flex items-center justify-center
                                    whitespace-nowrap px-4 py-2 ${activeTab === "drafts" ? "bg-gray-200" : "bg-white hover:bg-slate-100"} rounded`}
                                >
                                    Черновики
                                </button>
                            </div>
                            {activeTab === "mine" && (
                                <button
                                    className="create-post-button mt-4 w-[768px] h-[40px] px-4 py-2 text-white bg-[#0F172A] rounded-tl-md
                                    focus:opacity-100 opacity-100 hover:bg-gray-800 transition-all duration-200"
                                    onClick={() => setModalOpen(true)}
                                >
                                    Создать пост
                                </button>
                            )}
                        </div>
                    )}
                    {currentPost ? (
                        <SinglePost
                            post={currentPost}
                            activeTab={activeTab}
                            onEditPostClick={handleEditPostClick}
                        />
                    ) : (
                        posts
                            .filter(() => { /*post */
                                if (activeTab === "all") return true;
                                if (activeTab === "mine") return true;
                                if (activeTab === "drafts") return true;
                                return false;
                            })
                            .map((post) => (
                                <PostDetail
                                    key={post.id}
                                    post={post}
                                    onPostClick={handlePostClick}
                                    activeTab={activeTab}
                                    onEditPostClick={handleEditPostClick}
                                //currentPostId={currentPost?.id || null} 
                                //selectedPostId={null} 
                                />
                            ))
                    )}
                </main>
                <aside>
                    <img src={adv} alt="Баннер" className="w-[208px] h-auto bg-[#1234]" />
                </aside>
                {isModalOpen && (
                    <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center" onClick={handleModalClick}>
                        <div className="modal-content bg-white p-6 rounded shadow">
                            <div className="w-[544px] h-[370px] top-[355px] left-[688px] pt-4 gap-4 rounded-tl-[12px] opacity-0]">
                                <h4 className="font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.005em] text-[#0F172A]">Создать пост</h4>
                                <div className="w-full mt-[16px] gap-[6px]">
                                    <label className="block font-inter text-[14px] font-medium leading-[20px] text-[#0F172A]">Заголовок</label>
                                    <input
                                        type="text"
                                        placeholder="Введите заголовок"
                                        className="w-full h-[40px] mt-[6px] px-3 py-2 border border-gray-300 rounded-[6px] text-gray-600 bg-white placeholder-gray-400"
                                    />
                                </div>
                                <button
                                    className="mt-[16px] px-4 py-2 bg-[#0F172A] text-white text-[14px] font-medium rounded-[6px] hover:opacity-90 flex items-center space-x-2"
                                    onClick={handleAddImageClick}
                                >
                                    <img src={upload} alt="Upload" className="w-4 h-4" />
                                    <span>Добавить картинку</span>
                                </button>
                                <div className="w-full mt-[16px] gap-[6px]">
                                    <label className="block font-inter text-[14px] font-medium leading-[14px] text-[#0F172A]">Контент</label>
                                    <input
                                        placeholder="Введите контент"
                                        className="w-full h-[80px] mt-[6px] px-3 py-2 border border-gray-300 rounded-[6px] text-gray-600 bg-white placeholder-gray-400"
                                    />
                                </div>
                                <div className="w-full mt-[16px] flex gap-[8px]">
                                    <button
                                        className="w-[167px] px-4 py-2 bg-[#E2E8F0] border  text-[#0F172A] text-[14px] font-medium rounded-[6px] hover:bg-[#0F172A] hover:text-white"
                                        onClick={handlePublishClick}
                                    >
                                        Опубликовать пост
                                    </button>
                                    <button
                                        className="w-[196px] px-4 py-2 bg-[#E2E8F0] border  text-[#0F172A] text-[14px] font-medium rounded-[6px] hover:bg-[#0F172A] hover:text-white"
                                        onClick={handleDraftClick}
                                    >
                                        Отправить в черновики
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isImageModalOpen && (
                    <div
                        className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                        onClick={handleImageModalClick}
                    >
                        <div className="modal-content bg-white p-4 rounded-lg shadow w-[544px] h-[618px]">
                            <h4 className="font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.005em] text-[#0F172A]">
                                Создать пост
                            </h4>
                            <div className="w-full mt-4 gap-2">
                                <label className="block font-inter text-[14px] font-medium leading-[20px] text-[#0F172A]">
                                    Заголовок
                                </label>
                                <input
                                    type="text"
                                    placeholder="Введите заголовок"
                                    className="w-full h-[40px] mt-1 px-3 py-2 border border-gray-300 rounded-md text-gray-600 bg-white placeholder-gray-400"
                                />
                            </div>
                            <section className="post-content relative mt-4 w-[512px] h-[288px] bg-gray-300 rounded-lg group hover:bg-[#a6aeb8]">
                                <img
                                    src={trash}
                                    alt="Delete"
                                    className="trash-icon absolute top-2 right-2 hidden w-6 h-6 cursor-pointer group-hover:block"
                                />
                            </section>
                            <div className="w-full mt-4 gap-2">
                                <label className="block font-inter text-[14px] font-medium leading-[14px] text-[#0F172A]">
                                    Контент
                                </label>
                                <input
                                    placeholder="Введите контент"
                                    className="w-full h-[80px] mt-1 px-3 py-2 border border-gray-300 rounded-md text-gray-600 bg-white placeholder-gray-400"
                                />
                            </div>
                            <div className="w-full mt-4 flex gap-2">
                                <button
                                    className="w-[167px] px-4 py-2 bg-gray-200 border text-[#0F172A] text-[14px] font-medium rounded-md hover:bg-[#0F172A] hover:text-white"
                                    onClick={handleCloseModal}
                                >
                                    Опубликовать пост
                                </button>
                                <button
                                    className="w-[196px] px-4 py-2 bg-gray-200 border text-[#0F172A] text-[14px] font-medium rounded-md hover:bg-[#0F172A] hover:text-white"
                                    onClick={handleCloseModal}
                                >
                                    Отправить в черновики
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {isEditModalOpen && (
                    <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center" onClick={handleEditModalClick}>
                        <div className="modal-content bg-white p-6 rounded shadow">
                            <div className="w-[544px] h-[370px] top-[355px] left-[688px] pt-4 gap-4 rounded-tl-[12px] opacity-0]">
                                <h4 className="font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.005em] text-[#0F172A]">Редактировать пост</h4>
                                <div className="w-full mt-[16px] gap-[6px]">
                                    <label className="block font-inter text-[14px] font-medium leading-[20px] text-[#0F172A]">Заголовок</label>
                                    <input
                                        type="text"
                                        placeholder="Введите заголовок"
                                        className="w-full h-[40px] mt-[6px] px-3 py-2 border border-gray-300 rounded-[6px] text-gray-600 bg-white placeholder-gray-400"
                                    />
                                </div>
                                <button
                                    className="mt-[16px] px-4 py-2 bg-[#0F172A] text-white text-[14px] font-medium rounded-[6px] hover:opacity-90 flex items-center space-x-2"
                                    onClick={handleAddEditImageClick}
                                >
                                    <img src={upload} alt="Upload" className="w-4 h-4" />
                                    <span>Добавить картинку</span>
                                </button>
                                <div className="w-full mt-[16px] gap-[6px]">
                                    <label className="block font-inter text-[14px] font-medium leading-[14px] text-[#0F172A]">Контент</label>
                                    <input
                                        placeholder="Введите контент"
                                        className="w-full h-[80px] mt-[6px] px-3 py-2 border border-gray-300 rounded-[6px] text-gray-600 bg-white placeholder-gray-400"
                                    />
                                </div>
                                <div className="w-full mt-[16px] flex gap-[8px]">
                                    <button
                                        className="w-[167px] px-4 py-2 bg-[#E2E8F0] border text-[#0F172A] text-[14px] font-medium rounded-[6px] hover:bg-[#0F172A] hover:text-white"
                                        onClick={handleCloseEditModal}
                                    >
                                        Опубликовать пост
                                    </button>
                                    <button
                                        className="w-[196px] px-4 py-2 bg-[#E2E8F0] border  text-[#0F172A] text-[14px] font-medium rounded-[6px] hover:bg-[#0F172A] hover:text-white"
                                        onClick={handleCloseEditModal}
                                    >
                                        Отправить в черновики
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isEditImageModalOpen && (
                    <div
                        className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                        onClick={handleEditImageModalClick}
                    >
                        <div className="modal-content bg-white p-4 rounded-lg shadow w-[544px] h-[618px]">
                            <h4 className="font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.005em] text-[#0F172A]">
                                Редактировать
                            </h4>
                            <div className="w-full mt-4 gap-2">
                                <label className="block font-inter text-[14px] font-medium leading-[20px] text-[#0F172A]">
                                    Заголовок
                                </label>
                                <input
                                    type="text"
                                    placeholder="Введите заголовок"
                                    className="w-full h-[40px] mt-1 px-3 py-2 border border-gray-300 rounded-md text-gray-600 bg-white placeholder-gray-400"
                                />
                            </div>
                            <section className="post-content rounded-lg relative mt-4 w-[512px] h-[288px] bg-gray-300 rounded-lg group hover:bg-[#a6aeb8]">
                                <img
                                    src={trash}
                                    alt="Delete"
                                    className="trash-icon absolute top-2 right-2 hidden w-6 h-6 cursor-pointer group-hover:block"
                                />
                            </section>
                            <div className="w-full mt-4 gap-2">
                                <label className="block font-inter text-[14px] font-medium leading-[14px] text-[#0F172A]">
                                    Контент
                                </label>
                                <input
                                    placeholder="Введите контент"
                                    className="w-full h-[80px] mt-1 px-3 py-2 border border-gray-300 rounded-md text-gray-600 bg-white placeholder-gray-400"
                                />
                            </div>
                            <div className="w-full mt-4 flex gap-2">
                                <button
                                    className="w-[167px] px-4 py-2 bg-gray-200 border text-[#0F172A] text-[14px] font-medium rounded-md hover:bg-[#0F172A] hover:text-white"
                                    onClick={handleCloseEditModal}
                                >
                                    Опубликовать пост
                                </button>
                                <button
                                    className="w-[196px] px-4 py-2 bg-gray-200 border text-[#0F172A] text-[14px] font-medium rounded-md hover:bg-[#0F172A] hover:text-white"
                                    onClick={handleCloseEditModal}
                                >
                                    Отправить в черновики
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Post;