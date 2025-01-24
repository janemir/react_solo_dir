import { refreshAccessToken } from "@/api/auth";

export async function getAccessToken(): Promise<string | null> {
    let accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken && refreshToken) {
        try {

            const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await refreshAccessToken(refreshToken);

            localStorage.setItem("accessToken", newAccessToken);
            if (newRefreshToken) {
                localStorage.setItem("refreshToken", newRefreshToken);
            }

            accessToken = newAccessToken;
        } catch (error) {
            console.error("Ошибка обновления токена:", error);

            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            throw new Error("Не удалось обновить токен. Авторизуйтесь снова.");
        }
    }

    return accessToken;
}
