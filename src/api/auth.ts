const API_URL = "https://cpt-stage-2.duckdns.org/api/auth";

export async function registerUser(email: string, password: string, role: string) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Ошибка регистрации");
    }

    return await response.json(); 
}

export async function loginUser(email: string, password: string) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Ошибка входа");
    }

    return await response.json(); 
}

export async function refreshAccessToken(refreshToken: string) {
    const response = await fetch(`${API_URL}/refresh-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }), 
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Ошибка обновления токена");
    }

    return await response.json(); 
}
