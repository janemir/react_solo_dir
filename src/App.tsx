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
import { AuthProvider } from "@/components/ui/AuthContext";

function App() {
    return (
        <AuthProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post" element={<Post />} />
                <Route path="/post/:id" element={<Post />} />
            </Routes>
        </Router>
        </AuthProvider>
    );
}

function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [role, setRole] = useState("reader"); 
    const [errorMessage, setErrorMessage] = useState(""); 
    const [hasError, setHasError] = useState(false); 

    const handleRegister = async () => {
        setErrorMessage("");
        setHasError(false);

        if (password !== repeatPassword) {
            setErrorMessage("Пароли не совпадают");
            setHasError(true);
            return;
        }

        try {
            await registerUser(email, password, role);
            localStorage.setItem("userRole", role); 
            navigate("/login");
        } catch (error) {
            console.error("Ошибка регистрации:", error);
            setErrorMessage("Ошибка регистрации");
            setHasError(true);
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
                    className={`${hasError ? "border-red-500" : ""} border rounded px-3 py-2`}
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
                    className={`${hasError ? "border-red-500" : ""} border rounded px-3 py-2`}
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
                    className={`${hasError ? "border-red-500" : ""} border rounded px-3 py-2`}
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

            {errorMessage && (
                <div className="error-message text-red-500 text-sm mb-4">
                    {errorMessage}
                </div>
            )}

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
