import React from 'react';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import { useAuth } from "@/components/ui/AuthContext";

const Header: React.FC = () => {
    const { email } = useAuth();

    return (
        <header className="header w-full h-[80px] p-4 bg-white flex justify-between items-center">
            <div>
                <img src={logo} alt="Логотип" className="w-72px h-20px" />
            </div>
            <div className="flex items-center space-x-4 relative left-[10px]">
                <p className="text-[#0F172A]">{email || "pochta@gmail.com"}</p>
                <img src={avatar} alt="Аватар" className="h-10 w-10 rounded-full" />
            </div>
        </header>
    );
};

export default Header;