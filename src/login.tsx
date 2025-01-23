import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "@/api/auth";
import { useState } from "react";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const { accessToken, refreshToken } = await loginUser(email, password);
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
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
                onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlFor="password">Пароль</Label>
            <Input
                id="password"
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
