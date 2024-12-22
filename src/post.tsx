import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
//1233
export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader/>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

function Post() {
    const navigate = useNavigate();

    const handlePostClick = (id) => {
        navigate(`/post/${id}`);
    };

    return (
        <div className="main-container">
            <header className="post-header flex justify-between items-center p-4 bg-white shadow">
                <div className="post-header-left">
                    <img src="/src/assets/logo.svg" alt="Логотип" className="h-10" />
                </div>
                <div className="post-header-right flex items-center space-x-4">
                    <p className="text-gray-600">pochta@gmail.com</p>
                    <img src="/src/assets/avatar.svg" alt="Аватар" className="h-10 w-10 rounded-full" />
                </div>
            </header>
            <div className="flex">
                <aside className="sidebar w-1/4 p-4 bg-gray-100">
                    <nav>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-2">
                                <img src="/src/assets/newspaper.svg" alt="newspaper" className="h-6" />
                                <a href="#item1" className="text-gray-700 hover:text-blue-500">Посты</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <img src="/src/assets/phone.svg" alt="phone" className="h-6" />
                                <a href="#item2" className="text-gray-700 hover:text-blue-500">Контакты</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <img src="/src/assets/log-out.svg" alt="log-out" className="h-6" />
                                <a href="#item3" className="text-gray-700 hover:text-blue-500">Выйти</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="content-center flex-1 p-4">
                    {[1, 2].map((id) => (
                        <article
                            key={id}
                            className="post bg-white shadow p-6 rounded-lg mb-[72px] hover:bg-gray-200 cursor-pointer"
                            onClick={() => handlePostClick(id)}
                        >
                            <div className="tag flex items-center space-x-4 mb-4">
                                <img src="/src/assets/avatar.svg" alt="Аватар" className="h-10 w-10 rounded-full" />
                                <div>
                                    <p className="text-gray-600">pochta@gmail.com</p>
                                    <p className="text-gray-400 text-sm">31 октября</p>
                                </div>
                            </div>
                            <h2 className="text-lg font-bold mb-4">Заголовок</h2>

                            <p className="text-gray-700">
                                Повседневная практика показывает, что социально-экономическое развитие
                                способствует подготовке и реализации распределения внутренних резервов и ресурсов.
                            </p>
                            <div className="mt-4">
                                <img src="/src/assets/icon buttons.svg" alt="icon buttons" className="h-6" />
                            </div>
                        </article>
                    ))}
                </main>
                <div className="content-right w-1/4 p-4">
                    <img src="/src/assets/adv.png" alt="Рекламное изображение" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
}

export default Post;
