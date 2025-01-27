import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "@/api/auth";
import { useState } from "react";
import { useAuth } from "@/components/ui/AuthContext"; // Импортируем AuthContext

function Login() {
    const navigate = useNavigate();
    const { setEmail } = useAuth(); // Получаем функцию для сохранения email из контекста
    const [email, setLocalEmail] = useState(""); // Локальное состояние для ввода email
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const { accessToken, refreshToken } = await loginUser(email, password);
            
            // Сохраняем токены в localStorage
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            
            // Сохраняем email в глобальном контексте
            setEmail(email);

            alert("Вход выполнен!");
            navigate("/post");
        } catch (error) {
            console.error("Ошибка входа:", error);
            alert("Ошибка входа");
        }
    };

    return (
        <div className="login-form bg-white rounded-[12px]">
            <h4 className="label-create-account">Войти</h4>
            <Label htmlFor="email">Почта</Label>
            <Input
                id="email"
                placeholder="Введите почту"
                value={email}
                onChange={(e) => setLocalEmail(e.target.value)} // Обновляем локальное состояние
            />
            <Label htmlFor="password">Пароль</Label>
            <Input
                id="password"
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Обновляем локальное состояние
            />
            <Button onClick={handleLogin}>Войти</Button>
            <div className="auth-container">
                <Label className="auth-text">Нет аккаунта?</Label>
                <Link to="/" className="auth-link">
                    Создать аккаунт
                </Link>
            </div>
        </div>
    );
}

export default Login;
