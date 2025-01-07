import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Link, useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-form bg-white rounded-[12px]">
            <h4 className="label-create-account">Войти</h4>
            <Label htmlFor="email">Почта</Label>
            <Input id="email" placeholder="Введите почту" />
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" type="password" placeholder="Введите пароль" />
            <Button onClick={() => navigate("/post")}>Войти</Button>
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
