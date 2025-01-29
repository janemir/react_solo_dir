const API_URL = "https://cpt-stage-2.duckdns.org/api";

export async function fetchPosts() {
    const token = localStorage.getItem("accessToken"); 

    const response = await fetch(`${API_URL}/posts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
        },
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Ошибка загрузки постов");
    }

    return await response.json(); 
}
