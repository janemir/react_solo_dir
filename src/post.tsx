import { useState } from "react";
import avatar from './assets/avatar.svg';
import logo from './assets/logo.svg';
import newspaper from './assets/newspaper.svg';
import phone from './assets/phone.svg';
import logout from './assets/log-out.svg';
import iconButtons from './assets/icon buttons.svg';
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
    const [currentPost, setCurrentPost] = useState<Post>(posts[0]);
    const [isTabsVisible, setTabsVisible] = useState(false);
    const [visiblePostButtons, setVisiblePostButtons] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<string>("all");
    const [isModalOpen, setModalOpen] = useState(false);
    const [isImageModalOpen, setImageModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isEditImageModalOpen, setEditImageModalOpen] = useState(false);

    const handlePostsClick = () => {
        setTabsVisible(!isTabsVisible);
    };

    const handlePostClick = (post: Post) => {
        setCurrentPost(post);
        setVisiblePostButtons(post.id);
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleCreatePostClick = () => {
        setModalOpen(true);
    };

    const handleAddImageClick = () => {
        setModalOpen(false);
        setImageModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setImageModalOpen(false);
    };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setModalOpen(false);
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
        <div>
            <header className="post-header flex justify-between w-[1140px] items-center px-4 py-2 bg-gray-100">
                <div className="post-header-left">
                    <img src={logo} alt="Логотип" className="h-10" />
                </div>
                <div className="post-header-right flex items-center space-x-4">
                    <p className="text-gray-700">{currentPost.email}</p>
                    <img src={avatar} alt="Аватар" className="h-10 w-10 rounded-full" />
                </div>
            </header>
            <div className="main-container flex">
                <aside className="sidebar w-64 bg-gray-50 p-4">
                    <nav>
                        <ul className="space-y-4">
                            <li onClick={handlePostsClick} className="cursor-pointer">
                                <div className="flex items-center space-x-2">
                                    <img src={newspaper} alt="newspaper" className="h-6" />
                                    <span className="text-gray-700 font-inter hover:text-blue-500">Посты</span>
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="flex items-center space-x-2">
                                    <img src={phone} alt="phone" className="h-6" />
                                    <span className="text-gray-700 hover:text-blue-500">Контакты</span>
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <div className="flex items-center space-x-2">
                                    <img src={logout} alt="log-out" className="h-6" />
                                    <span className="text-gray-700 hover:text-blue-500">Выйти</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="content-center flex-1 p-6 space-y-18">
                    {isTabsVisible && (
                        <div className="mb-4">
                            <div className="tabs w-[307px] h-[40px] p-1 flex items-center border rounded-t-md">
                                <button
                                    onClick={() => handleTabClick("all")}
                                    className={`tab-trigger w-[96px] h-[32px] flex items-center justify-center
                                    whitespace-nowrap px-4 py-2 ${
                                        activeTab === "all" ? "bg-gray-200" : "bg-white hover:bg-slate-100"
                                    } rounded`}
                                >
                                    Все посты
                                </button>
                                <button
                                    onClick={() => handleTabClick("mine")}
                                    className={`tab-trigger w-[100px] h-[32px] flex items-center justify-center
                                    whitespace-nowrap px-4 py-2 ${
                                        activeTab === "mine" ? "bg-gray-200" : "bg-white hover:bg-slate-100"
                                    } rounded`}
                                >
                                    Мои посты
                                </button>
                                <button
                                    onClick={() => handleTabClick("drafts")}
                                    className={`tab-trigger w-[101px] h-[32px] flex items-center justify-center
                                    whitespace-nowrap px-4 py-2 ${
                                        activeTab === "drafts" ? "bg-gray-200" : "bg-white hover:bg-slate-100"
                                    } rounded`}
                                >
                                    Черновики
                                </button>
                            </div>
                            {activeTab === "mine" && (
                                <button
                                    className="create-post-button mt-4 w-[768px] h-[40px] px-4 py-2 text-white bg-[#0F172A] rounded-tl-md
    focus:opacity-100 opacity-100 hover:bg-gray-800 transition-all duration-200"
                                    onClick={handleCreatePostClick}
                                >
                                    Создать пост
                                </button>
                            )}
                        </div>
                    )}
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="post bg-white p-6 rounded shadow hover:bg-gray-200 transition-colors"
                            onClick={() => handlePostClick(post)}
                        >
                            <div className="tag flex items-center space-x-4">
                                <img src={avatar} alt="Аватар" className="h-10 w-10 rounded-full" />
                                <div>
                                    <p className="text-gray-700">{post.email}</p>
                                    <p className="text-gray-500 text-sm">{post.date}</p>
                                </div>
                            </div>
                            <h2 className="font-inter text-h4 font-h4 text-left">{post.title}</h2>
                            <section className="post-content mt-4"> </section>
                            <p className="text-sm text-gray-600 mt-2">{post.content}</p>
                            {visiblePostButtons === post.id && (
                                <div className="post-actions-container flex items-center gap-2 w-[313px] h-[40px] mt-4">
                                    <button className="publish-button whitespace-nowrap flex items-center justify-center w-[167px] h-[40px] px-4 py-2 gap-2 bg-gray-100 text-gray-700
    rounded-tl-md rounded-bl-md hover:bg-[#0F172A] hover:text-[#F1F5F9] focus:bg-[#0F172A]
    focus:text-[#F1F5F9] transition-all duration-200">
                                        Опубликовать пост
                                    </button>
                                    <button className="edit-button w-[138px] h-[40px] bg-gray-100 text-gray-700 rounded-tr-md hover:bg-gray-800"
                                            onClick={handleEditPostClick}>
                                        Редактировать
                                    </button>
                                </div>
                            )}
                            <div className="mt-4">
                                <img src={iconButtons} alt="icon buttons" className="h-6"/>
                            </div>
                        </article>
                    ))}
                </main>
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
                {/* Второе модальное окно */}
                {isImageModalOpen && (
                    <div
                        className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                        onClick={handleImageModalClick}
                    >
                        <div className="modal-content bg-white p-6 rounded shadow w-[400px]">
                            <h4 className="font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.005em] text-[#0F172A]">Создать пост</h4>
                            <div className="w-full mt-[16px] gap-[6px]">
                                <label className="block font-inter text-[14px] font-medium leading-[20px] text-[#0F172A]">Заголовок</label>
                                <input
                                    type="text"
                                    placeholder="Введите заголовок"
                                    className="w-full h-[40px] mt-[6px] px-3 py-2 border border-gray-300 rounded-[6px] text-gray-600 bg-white placeholder-gray-400"
                                />
                            </div>
                            <section className="post-content relative mt-3 w-[300px] h-[200px] hover:bg-[#a6aeb8] group">
                                <img
                                    src={trash}
                                    alt="Delete"
                                    className="trash-icon absolute top-2 right-2 hidden group-hover:block w-6 h-6 cursor-pointer"
                                />
                            </section>
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
                                    onClick={handleCloseModal}
                                >
                                    Опубликовать пост
                                </button>
                                <button
                                    className="w-[196px] px-4 py-2 bg-[#E2E8F0] border  text-[#0F172A] text-[14px] font-medium rounded-[6px] hover:bg-[#0F172A] hover:text-white"
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
                                        className="w-[167px] px-4 py-2 bg-[#E2E8F0] border  text-[#0F172A] text-[14px] font-medium rounded-[6px] hover:bg-[#0F172A] hover:text-white"
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
                        <div className="modal-content bg-white p-6 rounded shadow w-[400px]">
                            <h4 className="font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.005em] text-[#0F172A]">Создать пост</h4>
                            <div className="w-full mt-[16px] gap-[6px]">
                                <label className="block font-inter text-[14px] font-medium leading-[20px] text-[#0F172A]">Заголовок</label>
                                <input
                                    type="text"
                                    placeholder="Введите заголовок"
                                    className="w-full h-[40px] mt-[6px] px-3 py-2 border border-gray-300 rounded-[6px] text-gray-600 bg-white placeholder-gray-400"
                                />
                            </div>
                            <section className="post-content relative mt-3 w-[300px] h-[200px] hover:bg-[#a6aeb8] group">
                                <img
                                    src={trash}
                                    alt="Delete"
                                    className="trash-icon absolute top-2 right-2 hidden group-hover:block w-6 h-6 cursor-pointer"
                                />
                            </section>
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
                )}
            </div>
        </div>
    );
}

export default Post;
