import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"

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
            <header className="post-header ">
                <div className="post-header-left">
                    <img src="/src/assets/logo.svg" alt="Логотип" className="left-image" />
                </div>
                <div className="post-header-right">
                    <p>pochta@gmail.com</p>
                    <img src="/src/assets/avatar.svg" alt="Аватар" className="right-image" />
                </div>
            </header>
            <div className="main-container">
                <aside className="sidebar">
                    <nav>
                        <ul>
                            <li>
                                <div>
                                    <img src="/src/assets/newspaper.svg" alt="newspaper" className="newspaper-image" />
                                    <a href="#item1">Посты</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="/src/assets/phone.svg" alt="phone" className="phone-image" />
                                    <a href="#item2">Контакты</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="/src/assets/log-out.svg" alt="log-out" className="log-out-image" />
                                    <a href="#item3">Выйти</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="content-center">
                    <article className="post">
                        <div className="tag">
                            <img src="/src/assets/avatar.svg" alt="Аватар" className="right-image" />
                            <div>
                                <p>pochta@gmail.com</p>
                                <p>31 октября</p>
                            </div>
                        </div>
                        <h2>Заголовок </h2>
                        <section className="post-content"></section>
                        <p>Повседневная практика показывает, что социально-экономическое развитие
                            способствует подготовке и реализации распределения внутренних резервов и ресурсов.
                            Предварительные выводы неутешительны: перспективное планирование не даёт нам иного выбора,
                            кроме определения экономической целесообразности принимаемых решений.</p>
                        <div><img src="/src/assets/icon buttons.svg" alt="icon buttons" className="icon-buttons-image" /></div>
                    </article>
                    <article className="post">
                        <div>
                            <img src="/src/assets/avatar.svg" alt="Аватар" className="right-image" />
                            <div>
                                <p>pochta@gmail.com</p>
                                <p>31 октября</p>
                            </div>
                        </div>
                        <h2>Заголовок </h2>
                        <section className="post-content"></section>
                        <p>Повседневная практика показывает, что социально-экономическое развитие способствует
                            подготовке и реализации распределения внутренних резервов и ресурсов. Предварительные
                            выводы неутешительны: перспективное планирование не даёт нам иного выбора, кроме определения
                            экономической целесообразности принимаемых решений.</p>
                        <div>
                            <img src="/src/assets/icon buttons.svg" alt="icon buttons" className="icon-buttons-image" />
                        </div>
                    </article>
                </main>
                <div className="content-right">
                    <img src="/src/assets/adv.png" alt="Рекламное изображение" className="right-picture" />
                </div>
            </div>
        </div>
    );
}

export default Post;
