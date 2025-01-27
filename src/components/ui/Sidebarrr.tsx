import React from "react";
import { useNavigate } from "react-router-dom";
import newspaper from "@/assets/newspaper.svg"; // Убедитесь, что путь к иконке корректный
import phone from "@/assets/phone.svg";
import logout from "@/assets/log-out.svg";

type SidebarProps = {
    onPostsClick: () => void; // Обработчик для клика на "Посты"
};

const Sidebarrr: React.FC<SidebarProps> = ({ onPostsClick }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/"); // Переход на главную страницу
    };

    return (
        <aside className="fixed top-[80px] w-[208px] h-[872px] flex flex-col justify-between p-4">
            <div className="flex flex-col space-y-2">
                {/* Кнопка "Посты" */}
                <div
                    className="w-[192px] h-[40px] flex items-center space-x-2 cursor-pointer hover:bg-[#F1F5F9]"
                    onClick={onPostsClick}
                >
                    <img src={newspaper} alt="Иконка" className="h-[24px] w-[24px] ml-[16px]" />
                    <span className="font-medium text-[14px] font-inter text-slate-900">Посты</span>
                </div>
                {/* Кнопка "Контакты" */}
                <div className="w-[192px] h-[40px] flex items-center space-x-2 cursor-pointer hover:bg-[#F1F5F9]">
                    <img src={phone} alt="Иконка" className="h-[24px] w-[24px] ml-[16px]" />
                    <span className="font-medium text-[14px] font-inter text-slate-400">Контакты</span>
                </div>
            </div>
            {/* Кнопка "Выйти" */}
            <div
                className="w-[192px] h-[40px] flex items-center space-x-2 cursor-pointer hover:bg-[#F1F5F9]"
                onClick={handleLogout}
            >
                <img src={logout} alt="Иконка" className="h-[24px] w-[24px] ml-[16px]" />
                <span className="font-medium text-[14px] font-inter text-slate-400">Выйти</span>
            </div>
        </aside>
    );
};

export default Sidebarrr;