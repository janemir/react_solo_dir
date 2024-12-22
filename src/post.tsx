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
    return (
        <div>
            <header className="post-header flex justify-between items-center px-4 py-2 bg-gray-100">
                <div className="post-header-left">
                    <img src="/src/assets/logo.svg" alt="Логотип" className="h-10" />
                </div>
                <div className="post-header-right flex items-center space-x-4">
                    <p className="text-gray-700">pochta@gmail.com</p>
                    <img src="/src/assets/avatar.svg" alt="Аватар" className="h-10 w-10 rounded-full" />
                </div>
            </header>
            <div className="main-container flex">
                <aside className="sidebar w-64 bg-gray-50 p-4">
                    <nav>
                        <ul className="space-y-4">
                            <li>
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
                    <article className="post bg-white p-6 rounded shadow hover:bg-gray-200 transition-colors">
                        <div className="tag flex items-center space-x-4">
                            <img src="/src/assets/avatar.svg" alt="Аватар" className="h-10 w-10 rounded-full" />
                            <div>
                                <p className="text-gray-700">pochta@gmail.com</p>
                                <p className="text-gray-500 text-sm">31 октября</p>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold mt-4">Заголовок</h2>
                        <section className="post-content mt-4"></section>
                        <p className="text-gray-600 mt-2">Повседневная практика показывает, что социально-экономическое развитие
                            способствует подготовке и реализации распределения внутренних резервов и ресурсов.
                            Предварительные выводы неутешительны: перспективное планирование не даёт нам иного выбора,
                            кроме определения экономической целесообразности принимаемых решений.</p>
                        <div className="mt-4">
                            <img src="/src/assets/icon buttons.svg" alt="icon buttons" className="h-6" />
                        </div>
                    </article>
                    <article className="post bg-white p-6 rounded shadow hover:bg-gray-200 transition-colors">
                        <div className="tag flex items-center space-x-4">
                            <img src="/src/assets/avatar.svg" alt="Аватар" className="h-10 w-10 rounded-full" />
                            <div>
                                <p className="text-gray-700">pochta@gmail.com</p>
                                <p className="text-gray-500 text-sm">31 октября</p>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold mt-4">Заголовок</h2>
                        <section className="post-content mt-4"></section>
                        <p className="text-gray-600 mt-2">Повседневная практика показывает, что социально-экономическое развитие
                            способствует подготовке и реализации распределения внутренних резервов и ресурсов.
                            Предварительные выводы неутешительны: перспективное планирование не даёт нам иного выбора,
                            кроме определения экономической целесообразности принимаемых решений.</p>
                        <div className="mt-4">
                            <img src="/src/assets/icon buttons.svg" alt="icon buttons" className="h-6" />
                        </div>
                    </article>
                </main>
                <div className="content-right w-64 p-4">
                    <img src="/src/assets/adv.png" alt="Иконки" className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default Post;

