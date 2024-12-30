import { useState } from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar";

const posts = [
    {
        id: 1,
        title: "Заголовок",
        date: "31 октября",
        email: "pochta@gmail.com",
        content: "Повседневная практика показывает, что...",
    },
    {
        id: 2,
        title: "Заголовок",
        date: "31 октября",
        email: "pochta@gmail.com",
        content: "Предварительные выводы неутешительны:...",
    },
];

function Post() {
    // Состояния
    const [currentPost, setCurrentPost] = useState(posts[0]);
    const [isTabsVisible, setTabsVisible] = useState(false); // Управление видимостью табса

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
                            <li
                                onClick={() => setTabsVisible(!isTabsVisible)} // Переключение видимости табса
                                className="cursor-pointer"
                            >
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
                    {isTabsVisible && ( // Рендеринг табса при видимости
                        <div className="mb-4">
                            <div className="tabs w-[307px] h-[40px] p-1 flex items-center border rounded-t-md">
                                <button className="tab-trigger w-[96px] h-[32px] flex items-center justify-center whitespace-nowrap px-4 py-2 bg-white hover:bg-slate-100 rounded">Все посты</button>
                                <button className="tab-trigger w-[100px] h-[32px] flex items-center justify-center whitespace-nowrap px-4 py-2 bg-white hover:bg-slate-100 rounded">Мои посты</button>
                                <button className="tab-trigger w-[101px] h-[32px] flex items-center justify-center whitespace-nowrap px-4 py-2 bg-white hover:bg-slate-100 rounded">Черновики</button>
                            </div>
                        </div>
                    )}
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="post bg-white p-6 rounded shadow hover:bg-gray-200 transition-colors"
                            onClick={() => setCurrentPost(post)}
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
