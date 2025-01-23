import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Login from "@/login";
import Post from "@/post";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./Home.css";
import { registerUser } from "@/api/auth";
import { useState } from "react";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post" element={<Post />} />
                <Route path="/post/:id" element={<Post />} />
            </Routes>
        </Router>
    );
}

function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [role, setRole] = useState("reader"); // Роль по умолчанию

    const handleRegister = async () => {
        if (password !== repeatPassword) {
            alert("Пароли не совпадают");
            return;
        }

        try {
            await registerUser(email, password, role);
            alert("Регистрация успешна!");
            navigate("/login");
        } catch (error) {
            console.error("Ошибка регистрации:", error);
            alert("Ошибка регистрации");
        }
    };

    return (
        <div className="form-container bg-white rounded-[12px]">
            <h4 className="label-create-account">Создать аккаунт</h4>
            <div className="form-input-group">
                <Label htmlFor="email">Почта</Label>
                <Input
                    id="email"
                    placeholder="Введите почту"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-input-group">
                <Label htmlFor="password">Пароль</Label>
                <Input
                    id="password"
                    placeholder="Введите пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-input-group">
                <Label htmlFor="repeat_password">Повторите пароль</Label>
                <Input
                    id="repeat_password"
                    placeholder="Повторите пароль"
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
            </div>
            <div className="select-role-group">
                <Label htmlFor="select_role">Выберите роль</Label>
                <Tabs defaultValue="reader" onValueChange={(value) => setRole(value)}>
                    <TabsList className="tabs-list">
                        <TabsTrigger className="tabs-trigger" value="reader">
                            Читатель
                        </TabsTrigger>
                        <TabsTrigger className="tabs-trigger" value="author">
                            Автор
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <Button onClick={handleRegister}>Создать аккаунт</Button>
            <div className="auth-container">
                <Label className="auth-text">Уже есть аккаунт?</Label>
                <Link to="/login" className="auth-link">
                    Войти
                </Link>
            </div>
        </div>
    );
}


export default App;
