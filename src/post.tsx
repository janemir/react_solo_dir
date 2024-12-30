import { useState } from "react";

const posts = [
    {
        id: 1,
        title: "Заголовок",
        date: "31 октября",
        email: "pochta@gmail.com",
        content: "Повседневная практика показывает, что социально-экономическое развитие способствует подготовке и реализации " +
            "распределения внутренних резервов и ресурсов. Предварительные выводы неутешительны: перспективное планирование " +
            "не даёт нам иного выбора, кроме определения экономической целесообразности принимаемых решений.",
    },
    {
        id: 2,
        title: "Заголовок",
        date: "31 октября",
        email: "pochta@gmail.com",
        content: "Повседневная практика показывает, что социально-экономическое развитие способствует подготовке и реализации " +
            "распределения внутренних резервов и ресурсов. Предварительные выводы неутешительны: " +
            "перспективное планирование не даёт нам иного выбора, кроме определения экономической целесообразности принимаемых решений.",
    },
];

function Post() {
    const [currentPost, setCurrentPost] = useState(posts[0]);
    const [isTabsVisible, setTabsVisible] = useState(false);
    const [visiblePostButtons, setVisiblePostButtons] = useState(null);
    const [activeTab, setActiveTab] = useState("all"); // Состояние активной вкладки

    const handlePostsClick = () => {
        setTabsVisible(!isTabsVisible);
    };

    const handlePostClick = (post) => {
        setCurrentPost(post);
        setVisiblePostButtons(post.id);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <header className="post-header flex justify-between items-center px-4 py-2 bg-gray-100">
                <div className="post-header-left">
                    <img src="/src/assets/logo.svg" alt="Логотип" className="h-10" />
                </div>
                <div className="post-header-right flex items-center space-x-4">
                    <p className="text-gray-700">{currentPost.email}</p>
                    <img src="/src/assets/avatar.svg" alt="Аватар" className="h-10 w-10 rounded-full" />
                </div>
            </header>
            <div className="main-container flex">
                <aside className="sidebar w-64 bg-gray-50 p-4">
                    <nav>
                        <ul className="space-y-4">
                            <li onClick={handlePostsClick} className="cursor-pointer">
                                <div className="flex items-center space-x-2">
                                    <img src="/src/assets/newspaper.svg" alt="newspaper" className="h-6" />
                                    <a href="#item1" className="text-gray-700 hover:text-blue-500">Посты</a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-2">
                                    <img src="/src/assets/phone.svg" alt="phone" className="h-6" />
                                    <a href="#item2" className="text-gray-700 hover:text-blue-500">Контакты</a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-2">
                                    <img src="/src/assets/log-out.svg" alt="log-out" className="h-6" />
                                    <a href="#item3" className="text-gray-700 hover:text-blue-500">Выйти</a>
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
                                <img src="/src/assets/avatar.svg" alt="Аватар" className="h-10 w-10 rounded-full" />
                                <div>
                                    <p className="text-gray-700">{post.email}</p>
                                    <p className="text-gray-500 text-sm">{post.date}</p>
                                </div>
                            </div>
                            <h2 className="font-inter text-h4 font-h4 text-left">{post.title}</h2>
                            <section className="post-content mt-4"></section>
                            <p className="text-sm text-gray-600 mt-2">{post.content}</p>
                            {visiblePostButtons === post.id && (
                                <div className="post-actions-container flex items-center gap-2 w-[313px] h-[40px] mt-4">
                                    <button className="publish-button whitespace-nowrap flex items-center justify-center w-[167px] h-[40px] px-4 py-2 gap-2 bg-gray-100 text-gray-700
    rounded-tl-md rounded-bl-md hover:bg-[#0F172A] hover:text-[#F1F5F9] focus:bg-[#0F172A]
    focus:text-[#F1F5F9] transition-all duration-200">
                                        Опубликовать пост
                                    </button>
                                    <button className="edit-button w-[138px] h-[40px] bg-gray-100 text-gray-700 rounded-tr-md hover:bg-gray-800">
                                        Редактировать
                                    </button>
                                </div>
                            )}
                            <div className="mt-4">
                                <img src="/src/assets/icon buttons.svg" alt="icon buttons" className="h-6" />
                            </div>
                        </article>
                    ))}
                </main>
                <div className="content-right w-64 p-4">
                    <img src="/src/assets/adv.png" alt="Иконки" className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default Post;
